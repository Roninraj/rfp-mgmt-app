import { Router } from 'express';
import { vendorController } from '../controllers/vendor.controller';

export const vendorRouter = Router();

vendorRouter.post('/', vendorController.create);
vendorRouter.get('/', vendorController.getAll);
vendorRouter.get('/:id', vendorController.getById);
vendorRouter.put('/:id', vendorController.update);
vendorRouter.delete('/:id', vendorController.delete);
