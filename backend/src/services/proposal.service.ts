import { prisma } from '../config/database';

export const proposalService = {
  async createProposal(rfpId: number, data: any) {
    const [rfp, vendor] = await Promise.all([
      prisma.rfp.findUnique({ where: { id: rfpId } }),
      prisma.vendor.findUnique({ where: { id: data.vendorId } }),
    ]);

    if (!rfp) throw new Error('RFP not found');
    if (!vendor) throw new Error('Vendor not found');

    const proposal = await prisma.proposal.create({
      data: {
        rfpId,
        vendorId: data.vendorId,
        totalPrice: data.totalPrice,
        currency: data.currency,
        deliveryDays: data.deliveryDays,
        warrantyMonths: data.warrantyMonths,
        paymentTermsText: data.paymentTermsText,
        lineItems: data.lineItems,
        rawExtracted: data.rawExtracted,
      },
    });

    return proposal;
  },

  async getProposalsByRfpId(rfpId: number) {
    const proposals = await prisma.proposal.findMany({
      where: { rfpId },
      include: {
        vendor: true,
        score: true,
      },
      orderBy: { id: 'asc' },
    });
    return proposals;
  },
};
