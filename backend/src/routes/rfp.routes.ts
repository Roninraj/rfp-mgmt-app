import { Router } from 'express';
import { rfpController } from '../controllers/rfp.controller';
import { proposalController } from '../controllers/proposal.controller';
import { authenticate, requireRole } from '../middlewares/auth.middleware';

export const rfpRouter = Router();

rfpRouter.post('/', authenticate, requireRole('requester'), rfpController.create);
rfpRouter.get('/', rfpController.getAll);
rfpRouter.get('/:id', rfpController.getById);
rfpRouter.put('/:id', authenticate, requireRole('requester'), rfpController.update);
rfpRouter.delete('/:id', authenticate, requireRole('requester'), rfpController.delete);
rfpRouter.post('/:id/invite', authenticate, requireRole('requester'), rfpController.inviteVendor);

// Proposals for an RFP (keeps frontend compatibility at /rfps/:rfpId/proposals)
rfpRouter.get('/:rfpId/proposals', proposalController.getByRfp);
// Requester selects a proposal for their RFP
rfpRouter.post('/:rfpId/select-proposal', authenticate, requireRole('requester'), rfpController.selectProposal);
// Requester unselects a proposal
rfpRouter.post('/:rfpId/unselect-proposal', authenticate, requireRole('requester'), rfpController.unselectProposal);

