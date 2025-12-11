import express from 'express';
import { proposalController } from '../controllers/proposal.controller';
import { authenticate, requireRole } from '../middlewares/auth.middleware';

export const proposalRouter = express.Router();

// Create proposal (POST /proposals) - requires authenticated vendor
proposalRouter.post('/', authenticate, requireRole('vendor'), proposalController.create);

// Get all proposals (GET /proposals)
proposalRouter.get('/', proposalController.getAll);

// Get proposals for a vendor (GET /proposals/vendor/:vendorId)
proposalRouter.get('/vendor/:vendorId', proposalController.getByVendor);

// Get single proposal (GET /proposals/:id)
proposalRouter.get('/:id', proposalController.getById);

// Note: retrieving proposals for an RFP remains under the RFP routes
// as GET /rfps/:rfpId/proposals for compatibility with the frontend.