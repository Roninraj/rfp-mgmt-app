// src/config/env.ts
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const JWT_SECRET = process.env.JWT_SECRET || 'dev-secret-key';
export const DATABASE_URL = process.env.DATABASE_URL!;
export const SMTP_USER = process.env.SMTP_USER;
export const SMTP_PASS = process.env.SMTP_PASS;

console.log('SMTP_USER:', SMTP_USER);
console.log('SMTP_PASS set:', !!SMTP_PASS);
