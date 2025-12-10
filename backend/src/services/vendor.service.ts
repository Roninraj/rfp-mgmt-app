import { prisma } from '../config/database';

export const vendorService = {
  async createVendor(data: any) {
    const vendor = await prisma.vendor.create({
      data: {
        name: data.name,
        email: data.email,
        contactPerson: data.contactPerson,
        notes: data.notes,
      },
    });
    return vendor;
  },

  async getAllVendors() {
    const vendors = await prisma.vendor.findMany();
    return vendors;
  },

  async getVendorById(id: number) {
    const vendor = await prisma.vendor.findUnique({ where: { id } });
    return vendor;
  },

  async updateVendor(id: number, data: any) {
    const vendor = await prisma.vendor.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        contactPerson: data.contactPerson,
        notes: data.notes,
      },
    });
    return vendor;
  },

  async deleteVendor(id: number) {
    await prisma.vendor.delete({ where: { id } });
  },
};
