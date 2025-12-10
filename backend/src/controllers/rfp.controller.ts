import { Request, Response } from 'express';
import { rfpService } from '../services/rfp.service';

export const rfpController = {
  async create(req: Request, res: Response) {
    try {
      const result = await rfpService.createRfp(req.body);
      return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to create RFP' });
    }
  },

  async getAll(req: Request, res: Response) {
    try {
      const rfps = await rfpService.getAllRfps();
      return res.json(rfps);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch RFPs' });
    }
  },

  async getById(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const rfp = await rfpService.getRfpById(id);

      if (!rfp) {
        return res.status(404).json({ message: 'RFP not found' });
      }

      return res.json(rfp);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch RFP' });
    }
  },

  async update(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      const rfp = await rfpService.updateRfp(id, req.body);
      return res.json(rfp);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update RFP' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
      await rfpService.deleteRfp(id);
      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to delete RFP' });
    }
  },
};
