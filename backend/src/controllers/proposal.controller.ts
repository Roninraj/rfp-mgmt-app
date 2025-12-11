import { proposalService } from '../services/proposal.service';

export const proposalController = {
  // Create proposal
  async create(req: any, res: any) {
    try {
      const { rfpId, totalPrice, currency, deliveryDays, warrantyMonths, paymentTermsText, lineItems, rawExtracted } = req.body;
      const user = req.user;

      if (!rfpId || !user.vendor) {
        return res.status(400).json({ message: 'rfpId and vendorId are required' });
      }

      const proposal = await proposalService.createProposal({
        rfpId: Number(rfpId),
        vendorId: user.vendor.id,
        totalPrice,
        currency,
        deliveryDays,
        warrantyMonths,
        paymentTermsText,
        lineItems,
        rawExtracted,
      });

      res.status(201).json({ message: 'Proposal created', proposal });
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  // Get proposals for an RFP
  async getByRfp(req: any, res: any) {
    try {
      const rfpId = Number(req.params.rfpId);
      if (!rfpId) return res.status(400).json({ message: 'Invalid rfpId' });

      const proposals = await proposalService.getProposalsByRfpId(rfpId);
      res.json(proposals);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  // ✅ Get proposals by vendor
  async getByVendor(req: any, res: any) {
    try {
      const vendorId = Number(req.params.vendorId);
      const user = req.user;

      if (!vendorId) return res.status(400).json({ message: 'Invalid vendorId' });
      if (!user.vendor || user.vendor.id !== vendorId) {
        return res.status(403).json({ message: 'Forbidden' });
      }

      const proposals = await proposalService.getProposalsByVendorId(vendorId);
      res.json(proposals);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  // ✅ Get single proposal
  async getById(req: any, res: any) {
    try {
      const id = Number(req.params.id);
      if (!id) return res.status(400).json({ message: 'Invalid proposal ID' });

      const proposal = await proposalService.getProposalById(id);
      if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

      res.json(proposal);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },

  // Get all proposals
  async getAll(req: any, res: any) {
    try {
      const proposals = await proposalService.getAllProposals();
      res.json(proposals);
    } catch (err: any) {
      res.status(400).json({ message: err.message });
    }
  },
};