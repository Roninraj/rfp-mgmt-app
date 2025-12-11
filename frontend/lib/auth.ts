
const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export interface LoginResponse {
  message: string;
  token: string;
  user: {
    id: number;
    name: string;
    email: string;
    role: 'requester' | 'vendor';
  };
}

export const authApi = {
  register: async (
    name: string,
    email: string,
    password: string,
    role: 'requester' | 'vendor'
  ): Promise<LoginResponse> => {
    const response = await fetch(`${API_URL}/auth/register`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ name, email, password, role }),
    });

    if (!response.ok) {
      const text = await response.text(); // helps if backend returns HTML
      throw new Error(text || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  },

  login: async (
    email: string,
    password: string,
    role: 'requester' | 'vendor'
  ): Promise<LoginResponse> => {
    const response = await fetch(`${API_URL}/auth/login`, {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({ email, password, role }),
    });

    if (!response.ok) {
      const text = await response.text();
      throw new Error(text || `HTTP error! status: ${response.status}`);
    }

    return response.json();
  },
};
