import Cookies from 'js-cookie';
import { LoginResponse, User } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const authApi = {
  async register(
    email: string,
    password: string,
    name: string,
    role: 'requester' | 'vendor',
    companyName?: string,
    phone?: string,
    city?: string
  ): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/register`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({
          email,
          password,
          name,
          role,
          companyName,
          phone,
          city,
        }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Registration failed');
      }

      const data = await response.json();
      Cookies.set('token', data.token, { expires: 7 });
      return data;
    } catch (error) {
      console.error('Registration error:', error);
      throw error;
    }
  },

  async login(
    email: string,
    password: string,
    role: 'requester' | 'vendor'
  ): Promise<LoginResponse> {
    try {
      const response = await fetch(`${API_URL}/auth/login`, {
        method: 'POST',
        headers: { 'Content-Type': 'application/json' },
        body: JSON.stringify({ email, password, role }),
      });

      if (!response.ok) {
        const error = await response.json();
        throw new Error(error.message || 'Login failed');
      }

      const data = await response.json();
      Cookies.set('token', data.token, { expires: 7 });
      return data;
    } catch (error) {
      console.error('Login error:', error);
      throw error;
    }
  },

  logout() {
    Cookies.remove('token');
  },

  getToken() {
    return Cookies.get('token');
  },

  isAuthenticated() {
    return !!this.getToken();
  },
};
