import { mailer } from '../config/mailer';
import { SMTP_USER } from '../config/env';

export const emailService = {
  async sendVendorInvitation(toEmail: string, vendorName: string, rfpTitle: string, rfpId: number) {
    const subject = `Invitation to Bid: ${rfpTitle}`;
    const html = `
      <h3>Hello ${vendorName},</h3>
      <p>You have been invited to submit a proposal for the RFP: <strong>${rfpTitle}</strong>.</p>
      <p>Please log in to your dashboard to view the details and submit your proposal.</p>
      <a href="http://localhost:3000/dashboard/rfps/${rfpId}">View RFP</a>
      <p>Best regards,<br/>Procurement Team</p>
    `;

    try {
      await mailer.sendMail({
        from: SMTP_USER,
        to: toEmail,
        subject,
        html,
      });
      console.log(`Invitation sent to ${toEmail}`);
    } catch (error) {
      console.error('Failed to send invitation email:', error);
      // We don't throw here to avoid blocking the API flow, but in production you might want to retry.
    }
  },

  async sendProposalSubmitted(requesterEmail: string, rfpTitle: string, vendorName: string, proposalId: number) {
    const subject = `New Proposal Received: ${rfpTitle}`;
    const html = `
      <h3>New Proposal Notification</h3>
      <p>Vendor <strong>${vendorName}</strong> has submitted a proposal for your RFP: <strong>${rfpTitle}</strong>.</p>
      <p>You can review it in your dashboard.</p>
      <a href="http://localhost:3000/dashboard/rfps/${proposalId}">View Proposal</a>
      <p>Best regards,<br/>System</p>
    `;

    try {
      const info = await mailer.sendMail({
        from: SMTP_USER,
        to: requesterEmail,
        subject,
        html,
      });
      console.log(`Proposal notification sent to ${requesterEmail}`);
      return info.messageId;
    } catch (error) {
      console.error('Failed to send proposal notification email:', error);
      return null;
    }
  },

  async sendProposalSelected(vendorEmail: string, vendorName: string, rfpTitle: string) {
    const subject = `Proposal Selected: ${rfpTitle}`;
    const html = `
      <h3>Congratulations ${vendorName}!</h3>
      <p>Your proposal for <strong>${rfpTitle}</strong> has been selected.</p>
      <p>The requester will be in touch with you shortly regarding the next steps.</p>
      <p>Best regards,<br/>Procurement Team</p>
    `;

    try {
      await mailer.sendMail({
        from: SMTP_USER,
        to: vendorEmail,
        subject,
        html,
      });
      console.log(`Selection notification sent to ${vendorEmail}`);
    } catch (error) {
      console.error('Failed to send selection email:', error);
    }
  },

  async sendReminderEmail(toEmail: string, vendorName: string, rfpTitle: string, rfpId: number) {
    const subject = `Reminder: Submit Proposal for ${rfpTitle}`;
    const html = `
      <h3>Hello ${vendorName},</h3>
      <p>This is a reminder that you have been invited to submit a proposal for the RFP: <strong>${rfpTitle}</strong>.</p>
      <p>We haven't received your proposal yet. The deadline is approaching.</p>
      <p>Please log in to your dashboard to submit your proposal as soon as possible.</p>
      <a href="http://localhost:3000/dashboard/rfps/${rfpId}">View RFP</a>
      <p>Best regards,<br/>Procurement Team</p>
    `;

    try {
      await mailer.sendMail({
        from: SMTP_USER,
        to: toEmail,
        subject,
        html,
      });
      console.log(`Reminder email sent to ${toEmail}`);
    } catch (error) {
      console.error('Failed to send reminder email:', error);
    }
  },
};
