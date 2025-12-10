import { Request, Response } from 'express';
import { authService } from '../services/auth.service';

export const authController = {
  async register(req: Request, res: Response) {
    try {
      const { name, email, password, role, companyName, phone, address, city, state, country, postalCode } = req.body;

      // Validation
      if (!name || !email || !password || !role) {
        return res.status(400).json({ message: 'Missing required fields: name, email, password, role' });
      }

      const result = await authService.register({
        name,
        email,
        password,
        role,
        companyName,
        phone,
        address,
        city,
        state,
        country,
        postalCode,
      });

      return res.status(201).json(result);
    } catch (err) {
      console.error('Registration error:', err);
      return res.status(500).json({ message: 'Registration failed', error: (err as Error).message });
    }
  },

  async login(req: Request, res: Response) {
    try {
      const { email, password, role } = req.body;

      // Validation
      if (!email || !password || !role) {
        return res.status(400).json({ message: 'Missing required fields: email, password, role' });
      }

      const result = await authService.login(email, password, role);
      return res.json(result);
    } catch (err) {
      console.error('Login error:', err);
      const errorMsg = (err as Error).message;
      if (errorMsg === 'User account is inactive') {
        return res.status(403).json({ message: errorMsg });
      }
      return res.status(401).json({ message: errorMsg });
    }
  },
};
