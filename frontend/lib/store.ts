'use client';

import { create } from 'zustand';
import { authApi } from './auth';

interface User {
  id: number;
  name: string;
  email: string;
  role: 'requester' | 'vendor';
}

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  register: (
    name: string,
    email: string,
    password: string,
    role: 'requester' | 'vendor'
  ) => Promise<void>;
  login: (
    email: string,
    password: string,
    role: 'requester' | 'vendor'
  ) => Promise<void>;
  logout: () => void;
  loadFromStorage: () => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: null,
  isLoading: false,

  register: async (name, email, password, role) => {
    set({ isLoading: true });
    try {
      const response = await authApi.register(name, email, password, role);

      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      set({
        user: response.user,
        token: response.token,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  login: async (email, password, role) => {
    set({ isLoading: true });
    try {
      const response = await authApi.login(email, password, role);

      if (response.token) {
        localStorage.setItem('token', response.token);
        localStorage.setItem('user', JSON.stringify(response.user));
      }

      set({
        user: response.user,
        token: response.token,
        isLoading: false,
      });
    } catch (error) {
      set({ isLoading: false });
      throw error;
    }
  },

  logout: () => {
    localStorage.removeItem('token');
    localStorage.removeItem('user');
    set({ user: null, token: null });
  },

  loadFromStorage: () => {
    if (typeof window === 'undefined') return;

    const token = localStorage.getItem('token');
    const user = localStorage.getItem('user');

    if (token && user) {
      set({
        token,
        user: JSON.parse(user),
      });
    }
  },
}));
