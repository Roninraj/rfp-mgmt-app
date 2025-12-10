import { Request, Response } from 'express';
import { proposalService } from '../services/proposal.service';

export const proposalController = {
  async create(req: Request, res: Response) {
    try {
      const rfpId = parseInt(req.params.rfpId, 10);
      if (Number.isNaN(rfpId)) {
        return res.status(400).json({ message: 'Invalid rfpId in URL' });
      }

      const { vendorId } = req.body;
      if (!vendorId || !Number.isInteger(vendorId)) {
        return res.status(400).json({ message: 'vendorId must be a valid integer' });
      }

      const result = await proposalService.createProposal(rfpId, req.body);
      return res.status(201).json(result);
    } catch (err) {
      console.error(err);
      const errorMsg = (err as Error).message;
      return res.status(400).json({ message: errorMsg || 'Failed to create proposal' });
    }
  },

  async getByRfpId(req: Request, res: Response) {
    try {
      const rfpId = parseInt(req.params.rfpId, 10);
      if (Number.isNaN(rfpId)) {
        return res.status(400).json({ message: 'Invalid rfpId in URL' });
      }

      const proposals = await proposalService.getProposalsByRfpId(rfpId);
      return res.json(proposals);
    } catch (err) {
      console.error(err);
      return res.status(500).json({ message: 'Failed to fetch proposals' });
    }
  },
};
