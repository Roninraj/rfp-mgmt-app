import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { PrismaClient } from './generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import nodemailer from 'nodemailer';

dotenv.config();
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS set:', !!process.env.SMTP_PASS);

const app = express();
const PORT = process.env.PORT || 3001;
const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';

// ===== CORS SETUP =====
app.use(cors({
  origin: 'http://localhost:3000',
  credentials: true,
}));


app.use(express.json());

// ===== EMAIL SETUP =====
const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

// ===== DATABASE SETUP =====
const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

// ===== AUTH ROUTES =====

// REGISTER - Saves to PostgreSQL
app.post('/auth/register', async (req, res) => {
  try {
    const { name, email, password, role, companyName, phone, address, city, state, country, postalCode } = req.body;

    // Validation
    if (!name || !email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields: name, email, password, role' });
    }

    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email },
    });
    if (existingUser) {
      return res.status(409).json({ message: 'Email already registered' });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    // Create user in PostgreSQL database
    const newUser = await prisma.user.create({
      data: {
        name,
        email,
        password: hashedPassword,
        role,
        companyName: companyName || null,
        phone: phone || null,
        address: address || null,
        city: city || null,
        state: state || null,
        country: country || null,
        postalCode: postalCode || null,
        isActive: true,
      },
    });

    // Create JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.status(201).json({
      message: 'User registered successfully',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
      },
    });
  } catch (err) {
    console.error('Registration error:', err);
    return res.status(500).json({ message: 'Registration failed', error: (err as Error).message });
  }
});

// LOGIN - Queries PostgreSQL
app.post('/auth/login', async (req, res) => {
  try {
    const { email, password, role } = req.body;

    // Validation
    if (!email || !password || !role) {
      return res.status(400).json({ message: 'Missing required fields: email, password, role' });
    }

    // Find user in database
    const user = await prisma.user.findUnique({
      where: { email },
    });

    if (!user) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if user's role matches
    if (user.role !== role) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Check if user is active
    if (!user.isActive) {
      return res.status(403).json({ message: 'User account is inactive' });
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      return res.status(401).json({ message: 'Invalid credentials' });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return res.json({
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
      },
    });
  } catch (err) {
    console.error('Login error:', err);
    return res.status(500).json({ message: 'Login failed', error: (err as Error).message });
  }
});

// HEALTH CHECK
app.get('/health', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', db: 'failed' });
  }
});

app.get('/healthcheck', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', db: 'failed' });
  }
});

// ===== RFP ROUTES =====

// CREATE RFP
app.post('/rfps', async (req, res) => {
  try {
    const {
      title,
      descriptionRaw,
      budget,
      currency,
      deliveryBy,
      paymentTerms,
      requirements,
    } = req.body;

    const rfp = await prisma.rfp.create({
      data: {
        title,
        descriptionRaw,
        budget,
        currency,
        deliveryBy: deliveryBy ? new Date(deliveryBy) : null,
        paymentTerms,
        requirements,
      },
    });

    res.status(201).json(rfp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create RFP' });
  }
});

// GET all RFPs
app.get('/rfps', async (_req, res) => {
  try {
    const rfps = await prisma.rfp.findMany();
    res.json(rfps);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch RFPs' });
  }
});

// GET RFP by id
app.get('/rfps/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const rfp = await prisma.rfp.findUnique({
      where: { id },
    });

    if (!rfp) {
      return res.status(404).json({ message: 'RFP not found' });
    }

    res.json(rfp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch RFP' });
  }
});

// UPDATE RFP
app.put('/rfps/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const {
      title,
      descriptionRaw,
      budget,
      currency,
      deliveryBy,
      paymentTerms,
      requirements,
    } = req.body;

    const rfp = await prisma.rfp.update({
      where: { id },
      data: {
        title,
        descriptionRaw,
        budget,
        currency,
        deliveryBy: deliveryBy ? new Date(deliveryBy) : null,
        paymentTerms,
        requirements,
      },
    });

    res.json(rfp);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update RFP' });
  }
});

// DELETE RFP
app.delete('/rfps/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.rfp.delete({
      where: { id },
    });

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete RFP' });
  }
});

// ===== VENDOR ROUTES =====

// CREATE VENDOR
app.post('/vendors', async (req, res) => {
  try {
    const { name, email, contactPerson, notes } = req.body;

    const vendor = await prisma.vendor.create({
      data: { name, email, contactPerson, notes },
    });

    res.status(201).json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to create vendor' });
  }
});

// GET all VENDORS
app.get('/vendors', async (_req, res) => {
  try {
    const vendors = await prisma.vendor.findMany();
    res.json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch vendors' });
  }
});

// GET VENDOR by id
app.get('/vendors/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    const vendor = await prisma.vendor.findUnique({ where: { id } });

    if (!vendor) {
      return res.status(404).json({ message: 'Vendor not found' });
    }

    res.json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch vendor' });
  }
});

// UPDATE VENDOR
app.put('/vendors/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);
    const { name, email, contactPerson, notes } = req.body;

    const vendor = await prisma.vendor.update({
      where: { id },
      data: { name, email, contactPerson, notes },
    });

    res.json(vendor);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to update vendor' });
  }
});

// DELETE VENDOR
app.delete('/vendors/:id', async (req, res) => {
  try {
    const id = Number(req.params.id);

    await prisma.vendor.delete({ where: { id } });

    res.status(204).send();
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to delete vendor' });
  }
});

// ===== PROPOSAL ROUTES =====

// CREATE PROPOSAL
app.post('/rfps/:rfpId/proposals', async (req, res) => {
  try {
    const rfpId = parseInt(req.params.rfpId, 10);
    if (Number.isNaN(rfpId)) {
      return res.status(400).json({ message: 'Invalid rfpId in URL' });
    }

    const {
      vendorId,
      totalPrice,
      currency,
      deliveryDays,
      warrantyMonths,
      paymentTermsText,
      lineItems,
      rawExtracted,
    } = req.body;

    if (!vendorId || !Number.isInteger(vendorId)) {
      return res.status(400).json({ message: 'vendorId must be a valid integer' });
    }

    const [rfp, vendor] = await Promise.all([
      prisma.rfp.findUnique({ where: { id: rfpId } }),
      prisma.vendor.findUnique({ where: { id: vendorId } }),
    ]);

    if (!rfp) return res.status(404).json({ message: 'RFP not found' });
    if (!vendor) return res.status(404).json({ message: 'Vendor not found' });

    const proposal = await prisma.proposal.create({
      data: {
        rfpId,
        vendorId,
        totalPrice,
        currency,
        deliveryDays,
        warrantyMonths,
        paymentTermsText,
        lineItems,
        rawExtracted,
      },
    });

    return res.status(201).json(proposal);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to create proposal' });
  }
});

// GET PROPOSALS for RFP
app.get('/rfps/:rfpId/proposals', async (req, res) => {
  try {
    const rfpId = parseInt(req.params.rfpId, 10);
    if (Number.isNaN(rfpId)) {
      return res.status(400).json({ message: 'Invalid rfpId in URL' });
    }

    const proposals = await prisma.proposal.findMany({
      where: { rfpId },
      include: {
        vendor: true,
        score: true,
      },
      orderBy: { id: 'asc' },
    });

    return res.json(proposals);
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to fetch proposals' });
  }
});

// ===== START SERVER =====
app.listen(PORT, () => {
  console.log(`✅ Server running on http://localhost:${PORT}`);
  console.log(`🗄️  Database: ${process.env.DATABASE_URL ? 'Connected' : 'Not configured'}`);
  console.log(`🔐 JWT_SECRET: ${JWT_SECRET.length > 0 ? 'Set' : 'Not set'}`);
});
