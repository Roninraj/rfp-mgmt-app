import { prisma } from '../config/database';
import { emailService } from './email.service';
import { aiService } from './ai.service';

interface CreateProposalData {
  rfpId: number;
  vendorId: number;
  totalPrice?: number;
  currency?: string;
  deliveryDays?: number;
  warrantyMonths?: number;
  paymentTermsText?: string;
  lineItems?: any;
  rawExtracted?: any;
}

export const proposalService = {
  async createProposal(data: CreateProposalData) {
    const [rfp, vendor] = await Promise.all([
      prisma.rfp.findUnique({ 
        where: { id: data.rfpId },
        include: { requester: true }, 
      }),
      prisma.vendor.findUnique({ where: { id: data.vendorId } }),
    ]);

    if (!rfp) throw new Error('RFP not found');
    if (!vendor) throw new Error('Vendor not found');

    const proposal = await prisma.proposal.create({
      data: {
        rfpId: data.rfpId,
        vendorId: data.vendorId,
        totalPrice: data.totalPrice || null,
        currency: data.currency || 'USD',
        deliveryDays: data.deliveryDays || null,
        warrantyMonths: data.warrantyMonths || null,
        paymentTermsText: data.paymentTermsText || null,
        lineItems: data.lineItems || null,
        rawExtracted: data.rawExtracted || null,
      },
      include: {
        vendor: true,
        rfp: true,
        score: true,
      },
    });

    // Send email notification to requester
    if (rfp.requester?.email) {
      const messageId = await emailService.sendProposalSubmitted(
        rfp.requester.email,
        rfp.title,
        vendor.name,
        proposal.id
      );
      
      if (messageId) {
        await prisma.proposal.update({
          where: { id: proposal.id },
          data: { emailMessageId: messageId },
        });
      }
    }

    // Trigger AI Scoring asynchronously
    aiService.scoreProposal({
      rfpTitle: rfp.title,
      rfpDescription: rfp.descriptionRaw,
      rfpBudget: rfp.budget,
      rfpDeliveryDate: rfp.deliveryBy,
      proposalPrice: proposal.totalPrice,
      proposalDeliveryDays: proposal.deliveryDays,
      proposalWarranty: proposal.warrantyMonths,
      proposalPaymentTerms: proposal.paymentTermsText,
    }).then(async (score) => {
      if (score) {
        await prisma.proposalScore.create({
          data: {
            proposalId: proposal.id,
            priceScore: score.priceScore,
            deliveryScore: score.deliveryScore,
            warrantyScore: score.warrantyScore,
            overallScore: score.overallScore,
            explanation: score.explanation,
          },
        });
        console.log(`AI Score generated for proposal ${proposal.id}`);
      }
    }).catch(err => {
      console.error('Failed to save AI score:', err);
    });

    return proposal;
  },

  async getProposalsByRfpId(rfpId: number) {
    const proposals = await prisma.proposal.findMany({
      where: { rfpId },
      include: {
        vendor: true,
        rfp: true,
        score: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return proposals;
  },

  async getProposalsByVendorId(vendorId: number) {
    const proposals = await prisma.proposal.findMany({
      where: { vendorId },
      include: {
        vendor: true,
        rfp: true,
        score: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return proposals;
  },

  async getProposalById(id: number) {
    const proposal = await prisma.proposal.findUnique({
      where: { id },
      include: {
        vendor: true,
        rfp: true,
        score: true,
      },
    });
    return proposal;
  },

  async getAllProposals() {
    const proposals = await prisma.proposal.findMany({
      include: {
        vendor: true,
        rfp: true,
        score: true,
      },
      orderBy: { createdAt: 'desc' },
    });
    return proposals;
  },

  async updateProposal(id: number, data: Partial<CreateProposalData>) {
    const proposal = await prisma.proposal.update({
      where: { id },
      data: {
        totalPrice: data.totalPrice,
        currency: data.currency,
        deliveryDays: data.deliveryDays,
        warrantyMonths: data.warrantyMonths,
        paymentTermsText: data.paymentTermsText,
        lineItems: data.lineItems,
        rawExtracted: data.rawExtracted,
      },
      include: {
        vendor: true,
        rfp: true,
        score: true,
      },
    });
    return proposal;
  },

  async deleteProposal(id: number) {
    await prisma.proposal.delete({
      where: { id },
    });
  },
};
