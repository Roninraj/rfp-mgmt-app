import { prisma } from '../config/database';

export const rfpService = {
  async createRfp(data: any) {
    const rfp = await prisma.rfp.create({
      data: {
        title: data.title,
        descriptionRaw: data.descriptionRaw,
        budget: data.budget,
        currency: data.currency,
        deliveryBy: data.deliveryBy ? new Date(data.deliveryBy) : null,
        paymentTerms: data.paymentTerms,
        requirements: data.requirements,
      },
    });
    return rfp;
  },

  async getAllRfps() {
    const rfps = await prisma.rfp.findMany();
    return rfps;
  },

  async getRfpById(id: number) {
    const rfp = await prisma.rfp.findUnique({
      where: { id },
    });
    return rfp;
  },

  async updateRfp(id: number, data: any) {
    const rfp = await prisma.rfp.update({
      where: { id },
      data: {
        title: data.title,
        descriptionRaw: data.descriptionRaw,
        budget: data.budget,
        currency: data.currency,
        deliveryBy: data.deliveryBy ? new Date(data.deliveryBy) : null,
        paymentTerms: data.paymentTerms,
        requirements: data.requirements,
      },
    });
    return rfp;
  },

  async deleteRfp(id: number) {
    await prisma.rfp.delete({
      where: { id },
    });
  },
};
