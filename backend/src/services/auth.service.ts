import bcrypt from 'bcryptjs';
import jwt from 'jsonwebtoken';
import { prisma } from '../config/database';
import { JWT_SECRET } from '../config/env';

interface RegisterData {
  name: string;
  email: string;
  password: string;
  role: string;
  companyName?: string;
  phone?: string;
  address?: string;
  city?: string;
  state?: string;
  country?: string;
  postalCode?: string;
}

export const authService = {
  async register(data: RegisterData) {
    // Check if user already exists
    const existingUser = await prisma.user.findUnique({
      where: { email: data.email },
    });
    if (existingUser) {
      throw new Error('Email already registered');
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(data.password, 10);

    // Create user
    const newUser = await prisma.user.create({
      data: {
        name: data.name,
        email: data.email,
        password: hashedPassword,
        role: data.role,
        companyName: data.companyName || null,
        phone: data.phone || null,
        address: data.address || null,
        city: data.city || null,
        state: data.state || null,
        country: data.country || null,
        postalCode: data.postalCode || null,
        isActive: true,
      },
    });

    // 🔑 If vendor user, create matching Vendor row
    let vendor = null;
    if (newUser.role === 'vendor') {
      vendor = await prisma.vendor.create({
        data: {
          name: newUser.name,
          email: newUser.email,
          contactPerson: newUser.name,
          userId: newUser.id, // Link to User
        },
      });
    }

    // Create JWT token
    const token = jwt.sign(
      { id: newUser.id, email: newUser.email, role: newUser.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      message: 'User registered successfully',
      token,
      user: {
        id: newUser.id,
        name: newUser.name,
        email: newUser.email,
        role: newUser.role,
        vendor,
      },
    };
  },

  async login(email: string, password: string, role: string) {
    // Find user
    const user = await prisma.user.findUnique({
      where: { email },
      include: { vendor: true },
    });

    if (!user) {
      throw new Error('Invalid credentials');
    }

    // Check role
    if (user.role !== role) {
      throw new Error('Invalid credentials');
    }

    // Check if active
    if (!user.isActive) {
      throw new Error('User account is inactive');
    }

    // Compare passwords
    const passwordMatch = await bcrypt.compare(password, user.password);
    if (!passwordMatch) {
      throw new Error('Invalid credentials');
    }

    // Create JWT token
    const token = jwt.sign(
      { id: user.id, email: user.email, role: user.role },
      JWT_SECRET,
      { expiresIn: '7d' }
    );

    return {
      message: 'Login successful',
      token,
      user: {
        id: user.id,
        name: user.name,
        email: user.email,
        role: user.role,
        vendor: user.vendor,
      },
    };
  },
};
