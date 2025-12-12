import { Request, Response } from 'express';
import { authService } from '../services/auth.service';
import { registerSchema, loginSchema } from '../validation/auth.validation';
import { z, ZodError } from 'zod';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const validatedData = registerSchema.parse(req.body);

      const newUser = await authService.register(validatedData);

      return res.status(201).json(newUser);
    } catch (err) {
      console.error('Registration error:', err);
      if (err instanceof ZodError) {
        return res.status(400).json({ message: (err as ZodError).issues[0].message });
      }
      return res.status(500).json({ message: 'Registration failed', error: (err as Error).message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password, role } = loginSchema.parse(req.body);

      const result = await authService.login(email, password, role);
      return res.json(result);
    } catch (err) {
      console.error('Login error:', err);
      if (err instanceof ZodError) {
        return res.status(400).json({ message: (err as ZodError).issues[0].message });
      }
      const errorMsg = (err as Error).message;
      if (errorMsg === 'User account is inactive') {
        return res.status(403).json({ message: errorMsg });
      }
      return res.status(401).json({ message: errorMsg });
    }
  },
};
