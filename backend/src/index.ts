import express from 'express';
import cors from 'cors';
import dotenv from 'dotenv';
import { PrismaClient } from '../src/generated/client';
import { PrismaPg } from '@prisma/adapter-pg';
import nodemailer from 'nodemailer';

dotenv.config();
console.log('SMTP_USER:', process.env.SMTP_USER);
console.log('SMTP_PASS set:', !!process.env.SMTP_PASS);


const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: process.env.SMTP_USER,
    pass: process.env.SMTP_PASS,
  },
});

const app = express();

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL!,
});

const prisma = new PrismaClient({ adapter });

app.use(cors());
app.use(express.json());

const PORT = process.env.PORT || 3000;

app.get('/healthcheck', async (_req, res) => {
  try {
    await prisma.$queryRaw`SELECT 1`;
    res.json({ status: 'ok', db: 'connected' });
  } catch (err) {
    console.error(err);
    res.status(500).json({ status: 'error', db: 'failed' });
  }
});


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

//GET all RFP's 
app.get('/rfps', async (_req, res) => {
  const rfps = await prisma.rfp.findMany();
  res.json(rfps);
});

//GET by id request
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


//UPDATE RFP's
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


//DELETE RFPs by id
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


//--------------Vendor requests-------------------//

// CREATE vendor
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

// LIST vendors
app.get('/vendors', async (_req, res) => {
  try {
    const vendors = await prisma.vendor.findMany();
    res.json(vendors);
  } catch (err) {
    console.error(err);
    res.status(500).json({ message: 'Failed to fetch vendors' });
  }
});

// GET vendor by id
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

// UPDATE vendor
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

// DELETE vendor
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



//Invitation endpoint for vendors toward a proposal
app.post('/rfps/:rfpId/invite-vendors', async (req, res) => {
  try {
    const rfpId = parseInt(req.params.rfpId, 10);
    if (Number.isNaN(rfpId)) {
      return res.status(400).json({ message: 'Invalid rfpId in URL' });
    }

    const { vendorIds } = req.body as { vendorIds: number[] };
    if (!Array.isArray(vendorIds) || vendorIds.length === 0) {
      return res
        .status(400)
        .json({ message: 'vendorIds must be a non-empty array of numbers' });
    }
    if (!vendorIds.every((id) => Number.isInteger(id) && id > 0)) {
      return res
        .status(400)
        .json({ message: 'vendorIds must contain only positive integers' });
    }

    // Check RFP exists
    const rfp = await prisma.rfp.findUnique({ where: { id: rfpId } });
    if (!rfp) {
      return res.status(404).json({ message: 'RFP not found' });
    }

    // Check vendors exist
    const vendors = await prisma.vendor.findMany({
      where: { id: { in: vendorIds } },
      select: { id: true, name: true, email: true, contactPerson: true },
    });
    const existingIds = new Set(vendors.map((v) => v.id));
    const missing = vendorIds.filter((id) => !existingIds.has(id));
    if (missing.length > 0) {
      return res
        .status(400)
        .json({ message: `Vendors not found: ${missing.join(', ')}` });
    }

    // Create RfpVendor records
    const result = await prisma.rfpVendor.createMany({
      data: vendorIds.map((vendorId) => ({
        rfpId,
        vendorId,
        status: 'invited',
      })),
      skipDuplicates: true,
    });

    console.log(`Invited ${result.count} vendors to RFP ${rfpId}`);

    // ✅ SEND INVITATION EMAILS
    const emailPromises = vendors.map((vendor) => {
      console.log(`Sending invitation email to ${vendor.name} (${vendor.email})`);

      const emailBody = `Dear ${vendor.contactPerson || vendor.name},

You have been invited to submit a proposal for the following RFP:

**RFP Details:**
Title: ${rfp.title}
Budget: ${rfp.budget ?? 'Not specified'} ${rfp.currency ?? ''}
Delivery By: ${rfp.deliveryBy ?? 'Not specified'}
Payment Terms: ${rfp.paymentTerms ?? 'Not specified'}

**Description:**
${rfp.descriptionRaw}

---

Please review the RFP details and submit your proposal at your earliest convenience.

If you have any questions, please contact us.

Best regards,
RFP Management System`;

      return mailer
        .sendMail({
          from: process.env.SMTP_USER,
          to: vendor.email,
          subject: `You are invited to submit a proposal for RFP: ${rfp.title}`,
          text: emailBody,
        })
        .then((result) => {
          console.log(
            `✅ Invitation email sent to ${vendor.email}, MessageID: ${result.messageId}`
          );
          return { success: true, vendor: vendor.id, email: vendor.email };
        })
        .catch((err) => {
          console.error(`❌ Failed to send invitation to ${vendor.email}:`, err.message);
          return { success: false, vendor: vendor.id, email: vendor.email, error: err.message };
        });
    });

    // Send all emails (don't fail if some emails fail)
    const emailResults = await Promise.all(emailPromises);
    const successfulEmails = emailResults.filter((r) => r.success).length;
    const failedEmails = emailResults.filter((r) => !r.success).length;

    console.log(
      `Email results: ${successfulEmails} sent, ${failedEmails} failed`
    );

    return res.status(201).json({
      message: 'Vendors invited',
      invitedCount: result.count,
      emailsSent: successfulEmails,
      emailsFailed: failedEmails,
      details: failedEmails > 0 ? emailResults.filter((r) => !r.success) : [],
    });
  } catch (err) {
    console.error('Invite vendors error:', err);
    return res.status(500).json({ message: 'Failed to invite vendors', error: (err as Error).message });
  }
});




//Proposal to a RFid , posted by a vendor
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

    // Optional: ensure RFP & vendor exist
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


//Get proposals to an existing RFP using RFid
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

//-----------------------------------------------------
//Mailer Service for sending proposals


app.post('/rfps/:rfpId/send-emails', async (req, res) => {
  console.log('send-emails route hit');
  try {
    const rfpId = parseInt(req.params.rfpId, 10);
    if (Number.isNaN(rfpId)) {
      return res.status(400).json({ message: 'Invalid rfpId in URL' });
    }

    const { subject, message } = req.body as {
      subject?: string;
      message?: string;
    };

    if (!subject || !message) {
      return res.status(400).json({ message: 'subject and message are required' });
    }

    const rfp = await prisma.rfp.findUnique({
      where: { id: rfpId },
      include: {
        rfpVendors: {
          include: { vendor: true },
        },
      },
    });

    if (!rfp) return res.status(404).json({ message: 'RFP not found' });

    const invited = rfp.rfpVendors.filter((rv) => rv.status === 'invited');

    if (invited.length === 0) {
      return res.status(400).json({ message: 'No invited vendors to email' });
    }

    const sendPromises = invited.map((rv) =>
      mailer.sendMail({
        from: process.env.SMTP_USER,
        to: rv.vendor.email,
        subject,
        text:
          message +
          `

RFP details:
Title: ${rfp.title}
Budget: ${rfp.budget ?? 'N/A'} ${rfp.currency ?? ''}
Delivery by: ${rfp.deliveryBy ?? 'Not specified'}
Payment terms: ${rfp.paymentTerms ?? 'Not specified'}

Description:
${rfp.descriptionRaw}
`,
      })
    );

    await Promise.all(sendPromises);

    return res.json({
      message: 'Emails sent to invited vendors',
      count: invited.length,
    });
  } catch (err) {
    console.error(err);
    return res.status(500).json({ message: 'Failed to send RFP emails' });
  }
});


//-------------

app.post('/debug-json', express.json(), (req, res) => {
  console.log('BODY RAW:', req.body);
  res.json({ ok: true, body: req.body });
});


//--------------------
app.listen(PORT, () => {
  console.log(`Server running on http://localhost:${PORT}`);
});
