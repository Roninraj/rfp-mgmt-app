import { prisma } from '../config/database';
import { emailService } from './email.service';

export const reminderService = {
  async sendRemindersForApproachingDeadlines(daysThreshold: number = 3) {
    // 1. Find RFPs with deliveryBy within the next 'daysThreshold' days
    const now = new Date();
    const future = new Date();
    future.setDate(now.getDate() + daysThreshold);

    const approachingRfps = await prisma.rfp.findMany({
      where: {
        deliveryBy: {
          gte: now,
          lte: future,
        },
        selectedProposalId: null, // Open RFPs only
      },
      include: {
        rfpVendors: {
          where: { status: 'invited' }, // Only those who are strictly 'invited' (not 'declined' or 'submitted' if status tracked)
          include: { vendor: true },
        },
        proposals: true, // To cross-check if they submitted
      },
    });

    console.log(`Found ${approachingRfps.length} RFPs approaching deadline.`);

    for (const rfp of approachingRfps) {
      // 2. Identify vendors who haven't submitted
      const submittedVendorIds = new Set(rfp.proposals.map(p => p.vendorId));

      for (const rfpVendor of rfp.rfpVendors) {
        if (!submittedVendorIds.has(rfpVendor.vendorId)) {
          // 3. Send reminder
          if (rfpVendor.vendor.email) {
            console.log(`Sending reminder to ${rfpVendor.vendor.name} for RFP ${rfp.id}`);
            await emailService.sendReminderEmail(
              rfpVendor.vendor.email,
              rfpVendor.vendor.name,
              rfp.title,
              rfp.id
            );
          }
        }
      }
    }
  },
};
