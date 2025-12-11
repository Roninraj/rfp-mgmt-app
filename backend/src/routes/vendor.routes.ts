import { Router } from 'express';
import { vendorController } from '../controllers/vendor.controller';
import { authenticate, requireRole } from '../middlewares/auth.middleware';

export const vendorRouter = Router();

vendorRouter.post('/', authenticate, requireRole('requester'), vendorController.create);
vendorRouter.get('/', authenticate, vendorController.getAll);
vendorRouter.get('/:id', authenticate, vendorController.getById);
vendorRouter.put('/:id', authenticate, requireRole('requester'), vendorController.update);
vendorRouter.delete('/:id', authenticate, requireRole('requester'), vendorController.delete);
