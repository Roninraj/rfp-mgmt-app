import { proposalService } from '../services/proposal.service';
import { createProposalSchema } from '../validation/proposal.validation';
import { z, ZodError } from 'zod';

export const proposalController = {
  // Create proposal
  async create(req: any, res: any) {
    try {
      const user = req.user;

      if (!user.vendor) {
        console.error(`Proposal creation failed: User ${user.id} has role 'vendor' but no linked Vendor record.`);
        return res.status(403).json({ message: 'User is not linked to a vendor profile. Please contact support.' });
      }

      const validatedData = createProposalSchema.parse(req.body);

      const proposal = await proposalService.createProposal({
        rfpId: validatedData.rfpId,
        vendorId: user.vendor.id,
        totalPrice: validatedData.totalPrice,
        currency: validatedData.currency,
        deliveryDays: validatedData.deliveryDays,
        warrantyMonths: validatedData.warrantyMonths,
        paymentTermsText: validatedData.paymentTermsText,
        lineItems: validatedData.lineItems,
        rawExtracted: validatedData.rawExtracted,
      });

      res.status(201).json({ message: 'Proposal created', proposal });
    } catch (err: any) {
      if (err instanceof ZodError) {
        return res.status(400).json({ message: (err as ZodError).issues[0].message });
      }
      res.status(400).json({ message: err.message });
    }
  },

  // Get proposals for an RFP
  async getByRfp(req: any, res: any) {
    try {
      const rfpId = Number(req.params.rfpId);
      if (isNaN(rfpId)) return res.status(400).json({ message: 'Invalid rfpId' });

      const proposals = await proposalService.getProposalsByRfpId(rfpId);
      res.json(proposals);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  // ✅ Get proposals by vendor
  async getByVendor(req: any, res: any) {
    try {
      const vendorId = Number(req.params.vendorId);
      const user = req.user;

      if (isNaN(vendorId)) return res.status(400).json({ message: 'Invalid vendorId' });

      if (!user.vendor) {
        return res.status(403).json({ message: 'User is not linked to a vendor profile' });
      }

      console.log(`[DEBUG] getByVendor: User Vendor ID: ${user.vendor.id}, Requested Vendor ID: ${vendorId}`);

      if (user.vendor.id !== vendorId) {
        return res.status(403).json({ message: 'Forbidden: You can only view your own proposals' });
      }

      const proposals = await proposalService.getProposalsByVendorId(vendorId);
      res.json(proposals);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  // ✅ Get single proposal
  async getById(req: any, res: any) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: 'Invalid proposal ID' });

      const proposal = await proposalService.getProposalById(id);
      if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

      res.json(proposal);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  // Get all proposals
  async getAll(req: any, res: any) {
    try {
      const proposals = await proposalService.getAllProposals();
      res.json(proposals);
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },

  async delete(req: any, res: any) {
    try {
      const id = Number(req.params.id);
      if (isNaN(id)) return res.status(400).json({ message: 'Invalid proposal ID' });

      const user = req.user;
      if (!user || !user.vendor) return res.status(403).json({ message: 'Forbidden' });

      const proposal = await proposalService.getProposalById(id);
      if (!proposal) return res.status(404).json({ message: 'Proposal not found' });

      if (proposal.vendorId !== user.vendor.id) {
        return res.status(403).json({ message: 'You can only delete your own proposals' });
      }

      await proposalService.deleteProposal(id);
      res.status(204).send();
    } catch (err: any) {
      res.status(500).json({ message: err.message });
    }
  },
};