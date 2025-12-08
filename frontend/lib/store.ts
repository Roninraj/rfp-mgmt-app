import { create } from 'zustand';
import { User } from './types';
import { authApi } from './auth';

interface AuthStore {
  user: User | null;
  token: string | null;
  isLoading: boolean;
  login: (email: string, password: string, role: 'requester' | 'vendor') => Promise<void>;
  register: (email: string, password: string, name: string, role: 'requester' | 'vendor', companyName?: string, phone?: string, city?: string) => Promise<void>;
  logout: () => void;
  setUser: (user: User | null) => void;
}

export const useAuthStore = create<AuthStore>((set) => ({
  user: null,
  token: authApi.getToken() || null,
  isLoading: false,

  login: async (email, password, role) => {
    set({ isLoading: true });
    try {
      const response = await authApi.login(email, password, role);
      set({
        user: response.user,
        token: response.token,
      });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  register: async (email, password, name, role, companyName, phone, city) => {
    set({ isLoading: true });
    try {
      const response = await authApi.register(email, password, name, role, companyName, phone, city);
      set({
        user: response.user,
        token: response.token,
      });
    } catch (error) {
      throw error;
    } finally {
      set({ isLoading: false });
    }
  },

  logout: () => {
    authApi.logout();
    set({ user: null, token: null });
  },

  setUser: (user) => {
    set({ user });
  },
}));