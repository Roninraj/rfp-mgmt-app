import { prisma } from '../config/database';

interface CreateVendorData {
  name: string;
  email: string;
  contactPerson?: string;
  notes?: string;
}

interface UpdateVendorData {
  name?: string;
  email?: string;
  contactPerson?: string;
  notes?: string;
}

export const vendorService = {
  async createVendor(data: CreateVendorData) {
    const vendor = await prisma.vendor.create({
      data: {
        name: data.name,
        email: data.email,
        contactPerson: data.contactPerson || null,
        notes: data.notes || null,
      },
      include: {
        user: true, // Include linked User if exists
      },
    });
    return vendor;
  },

  async getAllVendors() {
    const vendors = await prisma.vendor.findMany({
      include: {
        user: true, // Include linked User
        proposals: {
          select: { id: true, rfpId: true },
        },
      },
      orderBy: { createdAt: 'desc' },
    });
    return vendors;
  },

  async getVendorById(id: number) {
    const vendor = await prisma.vendor.findUnique({
      where: { id },
      include: {
        user: true,
        proposals: {
          include: {
            rfp: true,
            score: true,
          },
        },
      },
    });
    return vendor;
  },

  async getVendorByUserId(userId: number) {
    const vendor = await prisma.vendor.findUnique({
      where: { userId },
      include: {
        user: true,
        proposals: {
          include: {
            rfp: true,
          },
        },
      },
    });
    return vendor;
  },

  async updateVendor(id: number, data: UpdateVendorData) {
    const vendor = await prisma.vendor.update({
      where: { id },
      data: {
        name: data.name,
        email: data.email,
        contactPerson: data.contactPerson,
        notes: data.notes,
      },
      include: {
        user: true,
      },
    });
    return vendor;
  },

  async deleteVendor(id: number) {
    // This will cascade delete proposals and rfpVendors
    await prisma.vendor.delete({
      where: { id },
    });
  },
};
