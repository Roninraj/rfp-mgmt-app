import { prisma } from '../config/database';

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
      prisma.rfp.findUnique({ where: { id: data.rfpId } }),
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
};
