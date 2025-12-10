import { Router } from 'express';
import { rfpController } from '../controllers/rfp.controller';

export const rfpRouter = Router();

rfpRouter.post('/', rfpController.create);
rfpRouter.get('/', rfpController.getAll);
rfpRouter.get('/:id', rfpController.getById);
rfpRouter.put('/:id', rfpController.update);
rfpRouter.delete('/:id', rfpController.delete);
