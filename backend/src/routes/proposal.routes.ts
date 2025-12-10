import { Router } from 'express';
import { proposalController } from '../controllers/proposal.controller';

export const proposalRouter = Router();

proposalRouter.post('/:rfpId/proposals', proposalController.create);
proposalRouter.get('/:rfpId/proposals', proposalController.getByRfpId);
