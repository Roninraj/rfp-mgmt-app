import axios from 'axios';
import { authApi } from './auth';
import { RFP, Vendor, Proposal } from './types';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:4000';

export const apiClient = axios.create({
  baseURL: API_URL,
  headers: {
    'Content-Type': 'application/json',
  },
});

// Add token to all requests
apiClient.interceptors.request.use((config) => {
  const token = authApi.getToken();
  if (token) {
    config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});

// Handle 401 errors
apiClient.interceptors.response.use(
  (response) => response,
  (error) => {
    if (error.response?.status === 401) {
      authApi.logout();
      if (typeof window !== 'undefined') {
        window.location.href = '/login';
      }
    }
    return Promise.reject(error);
  }
);

export const rfpApi = {
  async getAll(): Promise<RFP[]> {
    const response = await apiClient.get('/rfps');
    return response.data;
  },

  async getById(id: number): Promise<RFP> {
    const response = await apiClient.get(`/rfps/${id}`);
    return response.data;
  },

  async create(data: Partial<RFP>): Promise<RFP> {
    const response = await apiClient.post('/rfps', data);
    return response.data;
  },

  async update(id: number, data: Partial<RFP>): Promise<RFP> {
    const response = await apiClient.put(`/rfps/${id}`, data);
    return response.data;
  },

  async delete(id: number): Promise<void> {
    await apiClient.delete(`/rfps/${id}`);
  },
};

export const vendorApi = {
  async getAll(): Promise<Vendor[]> {
    const response = await apiClient.get('/vendors');
    return response.data;
  },

  async create(data: Partial<Vendor>): Promise<Vendor> {
    const response = await apiClient.post('/vendors', data);
    return response.data;
  },
};

export const proposalApi = {
  async getAll(): Promise<Proposal[]> {
    const response = await apiClient.get('/proposals');
    return response.data;
  },

  async create(data: Partial<Proposal>): Promise<Proposal> {
    const response = await apiClient.post('/proposals', data);
    return response.data;
  },
};