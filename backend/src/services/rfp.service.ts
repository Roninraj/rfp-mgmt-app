import { prisma } from '../config/database';

interface CreateRfpData {
  title: string;
  descriptionRaw: string;
  requesterId?: number;
  budget?: number;
  currency?: string;
  deliveryBy?: string;
  paymentTerms?: string;
  requirements?: any;
}

interface UpdateRfpData {
  title?: string;
  descriptionRaw?: string;
  budget?: number;
  currency?: string;
  deliveryBy?: string;
  paymentTerms?: string;
  requirements?: any;
}

export const rfpService = {
  async createRfp(data: CreateRfpData) {
    const rfp = await prisma.rfp.create({
      data: {
        title: data.title,
        descriptionRaw: data.descriptionRaw,
        requesterId: data.requesterId || null,
        budget: data.budget || null,
        currency: data.currency || 'USD',
        deliveryBy: data.deliveryBy ? new Date(data.deliveryBy) : null,
        paymentTerms: data.paymentTerms || null,
        requirements: data.requirements || null,
      },
      include: {
        requester: true,
        rfpVendors: {
          include: { vendor: true },
        },
      },
    });
    return rfp;
  },

  async getAllRfps() {
    const rfps = await prisma.rfp.findMany({
      include: {
        requester: {
          select: { id: true, name: true, email: true },
        },
        proposals: {
          select: { id: true, vendorId: true },
        },
        rfpVendors: {
          select: { vendorId: true, status: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return rfps;
  },

  async getRfpById(id: number) {
    const rfp = await prisma.rfp.findUnique({
      where: { id },
      include: {
        requester: true,
        proposals: {
          include: {
            vendor: true,
            score: true,
          },
        },
        rfpVendors: {
          include: { vendor: true },
        },
      },
    });
    return rfp;
  },

  async getRfpsByRequesterId(requesterId: number) {
    const rfps = await prisma.rfp.findMany({
      where: { requesterId },
      include: {
        proposals: {
          include: { vendor: true, score: true },
        },
        rfpVendors: {
          include: { vendor: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return rfps;
  },

  async updateRfp(id: number, data: UpdateRfpData) {
    const rfp = await prisma.rfp.update({
      where: { id },
      data: {
        title: data.title,
        descriptionRaw: data.descriptionRaw,
        budget: data.budget,
        currency: data.currency,
        deliveryBy: data.deliveryBy ? new Date(data.deliveryBy) : undefined,
        paymentTerms: data.paymentTerms,
        requirements: data.requirements,
      },
      include: {
        requester: true,
        proposals: true,
        rfpVendors: true,
      },
    });
    return rfp;
  },

  async deleteRfp(id: number) {
    await prisma.rfp.delete({
      where: { id },
    });
  },

  async inviteVendor(rfpId: number, vendorId: number) {
    const rfpVendor = await prisma.rfpVendor.create({
      data: {
        rfpId,
        vendorId,
        status: 'invited',
      },
      include: {
        rfp: true,
        vendor: true,
      },
    });
    return rfpVendor;
  },

  async setSelectedProposal(rfpId: number, proposalId: number) {
    // Verify proposal exists and belongs to the rfp
    const proposal = await prisma.proposal.findUnique({ where: { id: proposalId } });
    if (!proposal) {
      throw new Error('Proposal not found');
    }
    if (proposal.rfpId !== rfpId) {
      throw new Error('Proposal does not belong to the specified RFP');
    }

    const updated = await prisma.rfp.update({
      where: { id: rfpId },
      data: { selectedProposalId: proposalId },
      include: {
        requester: true,
        selectedProposal: {
          include: { vendor: true, score: true },
        },
        proposals: { include: { vendor: true, score: true } },
        rfpVendors: { include: { vendor: true } },
      },
    });

    return updated;
  },
};
