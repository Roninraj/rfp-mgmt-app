import { Router } from 'express';
import { authRouter } from './auth.routes';
import { rfpRouter } from './rfp.routes';
import { vendorRouter } from './vendor.routes';
import { proposalRouter } from './proposal.routes';
import { prisma } from '../config/database';

export const router = Router();

// Auth routes
router.use('/auth', authRouter);

// RFP routes
router.use('/rfps', rfpRouter);

// Vendor routes
router.use('/vendors', vendorRouter);

// Proposal routes
// Mount proposal routes at root so their defined paths are preserved
// Mount proposals under /proposals (keeps endpoints intuitive)
router.use('/proposals', proposalRouter);

// Health checks
router.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', db: 'failed' });
  }
});

router.get('/healthcheck', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', db: 'failed' });
  }
});
