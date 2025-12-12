// src/config/env.ts
import dotenv from 'dotenv';
dotenv.config();

export const PORT = process.env.PORT || 3001;
export const JWT_SECRET = process.env.JWT_SECRET!; // Should be defined in production
export const DATABASE_URL = process.env.DATABASE_URL!; // Must be defined
export const SMTP_USER = process.env.SMTP_USER;
export const SMTP_PASS = process.env.SMTP_PASS;
export const GEMINI_API_KEY = process.env.GEMINI_API_KEY;


