import { Router } from 'express';
import { rfpController } from '../controllers/rfp.controller';
import { proposalController } from '../controllers/proposal.controller';
import { authenticate, requireRole } from '../middlewares/auth.middleware';

export const rfpRouter = Router();

rfpRouter.post('/', rfpController.create);
rfpRouter.get('/', rfpController.getAll);
rfpRouter.get('/:id', rfpController.getById);
rfpRouter.put('/:id', rfpController.update);
rfpRouter.delete('/:id', rfpController.delete);

// Proposals for an RFP (keeps frontend compatibility at /rfps/:rfpId/proposals)
rfpRouter.get('/:rfpId/proposals', proposalController.getByRfp);
// Requester selects a proposal for their RFP
rfpRouter.post('/:rfpId/select-proposal', authenticate, requireRole('requester'), rfpController.selectProposal);
