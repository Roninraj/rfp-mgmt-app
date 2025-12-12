import { z } from 'zod';

export const createProposalSchema = z.object({
  rfpId: z.union([z.string(), z.number()]).transform((val) => Number(val)),
  totalPrice: z.union([z.string().min(1, 'Total Price is required'), z.number()])
    .transform((val) => Number(val)),
  currency: z.string().optional().default('USD'),
  deliveryDays: z.union([z.string().min(1, 'Delivery Days are required'), z.number()])
    .transform((val) => Number(val)),
  warrantyMonths: z.union([z.string(), z.number()]).optional().transform((val) => (val ? Number(val) : undefined)),
  paymentTermsText: z.string().optional(),
  lineItems: z.any().optional(),
  rawExtracted: z.any().optional(),
});
