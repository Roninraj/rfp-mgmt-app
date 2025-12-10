import express from 'express';
import { proposalController } from '../controllers/proposal.controller';

export const proposalRouter = express.Router();

// Create proposal for an RFP
proposalRouter.post('/proposals', proposalController.create);

// Get proposals for an RFP
proposalRouter.get('/rfps/:rfpId/proposals', proposalController.getByRfp);


// ✅ Get proposals by vendor
proposalRouter.get('/proposals/vendor/:vendorId', proposalController.getByVendor);

// ✅ Get single proposal
proposalRouter.get('/proposals/:id', proposalController.getById);