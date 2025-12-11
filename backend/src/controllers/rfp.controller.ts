import { Request, Response } from 'express';
import { rfpService } from '../services/rfp.service';

export const rfpController = {
  async create(req: Request, res: Response) {
    try {
      const user = req.user;
      if (!user) return res.status(401).json({ message: 'Not authenticated' });

      const { title, descriptionRaw, budget, currency, deliveryBy, paymentTerms, requirements } = req.body;

      if (!title || typeof title !== 'string') {
        return res.status(400).json({ message: 'Title is required and must be a string' });
      }

      if (!descriptionRaw || typeof descriptionRaw !== 'string') {
        return res.status(400).json({ message: 'Description is required and must be a string' });
      }

      const result = await rfpService.createRfp({ title, descriptionRaw, budget, currency, deliveryBy, paymentTerms, requirements }, user.id);
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
      const user = req.user;
      if (!user) return res.status(401).json({ message: 'Not authenticated' });

      const { title, descriptionRaw, budget, currency, deliveryBy, paymentTerms, requirements } = req.body;

      if (title && typeof title !== 'string') {
        return res.status(400).json({ message: 'Title must be a string' });
      }

      if (descriptionRaw && typeof descriptionRaw !== 'string') {
        return res.status(400).json({ message: 'Description must be a string' });
      }

      const rfp = await rfpService.updateRfp(id, { title, descriptionRaw, budget, currency, deliveryBy, paymentTerms, requirements }, user.id);
      return res.json(rfp);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to update RFP' });
    }
  },

  async delete(req: Request, res: Response) {
    try {
      const id = Number(req.params.id);
       const user = req.user;
      if (!user) return res.status(401).json({ message: 'Not authenticated' });
      await rfpService.deleteRfp(id, user.id);
      return res.status(204).send();
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to delete RFP' });
    }
  },

  async selectProposal(req: Request, res: Response) {
    try {
      const rfpId = Number(req.params.rfpId || req.params.id);
      const { proposalId } = req.body;

      // @ts-ignore - user attached by auth middleware
      const user = req.user;
      if (!user) return res.status(401).json({ message: 'Not authenticated' });

      const rfp = await rfpService.getRfpById(rfpId);
      if (!rfp) return res.status(404).json({ message: 'RFP not found' });

      // Ensure the requester owns this RFP
      if (rfp.requesterId !== user.id) return res.status(403).json({ message: 'You do not own this RFP' });

      const updated = await rfpService.setSelectedProposal(rfpId, Number(proposalId));
      return res.json(updated);
    } catch (err: any) {
      console.error(err);
      if (err.message === 'Proposal not found') return res.status(404).json({ message: err.message });
      if (err.message === 'Proposal does not belong to the specified RFP') return res.status(400).json({ message: err.message });
      return res.status(500).json({ message: 'Failed to select proposal' });
    }
  },
};
