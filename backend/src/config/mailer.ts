import nodemailer from 'nodemailer';
import { SMTP_USER, SMTP_PASS } from './env';

export const mailer = nodemailer.createTransport({
  host: 'smtp.gmail.com',
  port: 465,
  secure: true,
  auth: {
    user: SMTP_USER,
    pass: SMTP_PASS,
  },
});
