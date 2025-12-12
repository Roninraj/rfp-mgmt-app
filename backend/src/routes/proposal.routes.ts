import express from 'express';
import { proposalController } from '../controllers/proposal.controller';
import { authenticate, requireRole } from '../middlewares/auth.middleware';

export const proposalRouter = express.Router();

// Create proposal (POST /proposals) - requires authenticated vendor
proposalRouter.post('/', authenticate, requireRole('vendor'), proposalController.create);

// Get all proposals (GET /proposals)
proposalRouter.get('/', authenticate, proposalController.getAll);

// Get proposals for a vendor (GET /proposals/vendor/:vendorId)
proposalRouter.get('/vendor/:vendorId', authenticate, requireRole('vendor'), proposalController.getByVendor);

// Get single proposal (GET /proposals/:id)
proposalRouter.get('/:id', authenticate, proposalController.getById);

// Delete proposal (DELETE /proposals/:id) - requires authenticated vendor
proposalRouter.delete('/:id', authenticate, requireRole('vendor'), proposalController.delete);

// Note: retrieving proposals for an RFP remains under the RFP routes
// as GET /rfps/:rfpId/proposals for compatibility with the frontend.