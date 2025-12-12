import { Request, Response } from 'express';
import { vendorService } from '../services/vendor.service';

export const vendorController = {
  async create(req: Request, res: Response) {
    try {
      const result = await vendorService.createVendor(req.body);
      return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to create vendor' });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const vendors = await vendorService.getAllVendors();
      return res.json({ vendors });
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch vendors' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const vendor = await vendorService.getVendorById(id);

      if (!vendor) {
        return res.status(404).json({ message: 'Vendor not found' });
      }

      return res.json(vendor);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch vendor' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const vendor = await vendorService.updateVendor(id, req.body);
      return res.json(vendor);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update vendor' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await vendorService.deleteVendor(id);
      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to delete vendor' });
    }
  },
};
