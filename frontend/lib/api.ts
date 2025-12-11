const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

// Helper to get auth token
const getAuthHeader = () => {
  const token = localStorage.getItem('token');
  return {
    'Content-Type': 'application/json',
    ...(token && { Authorization: `Bearer ${token}` }),
  };
};

// ===== RFP API =====
export const rfpApi = {
  // Get all RFPs
  getAll: async () => {
    const response = await fetch(`${API_URL}/rfps`, {
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to fetch RFPs');
    return response.json();
  },

  // Get single RFP
  getById: async (id: number) => {
    const response = await fetch(`${API_URL}/rfps/${id}`, {
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to fetch RFP');
    return response.json();
  },

  // Create RFP
  create: async (data: any) => {
    const response = await fetch(`${API_URL}/rfps`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create RFP');
    return response.json();
  },

  // Update RFP
  update: async (id: number, data: any) => {
    const response = await fetch(`${API_URL}/rfps/${id}`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update RFP');
    return response.json();
  },

  // Delete RFP
  delete: async (id: number) => {
    const response = await fetch(`${API_URL}/rfps/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to delete RFP');
    return response.json();
  },
  // Select a proposal for an RFP (requester action)
  selectProposal: async (rfpId: number, proposalId: number) => {
    const response = await fetch(`${API_URL}/rfps/${rfpId}/select-proposal`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify({ proposalId }),
    });
    if (!response.ok) {
      const text = await response.text();
      throw new Error(`Failed to select proposal: ${text}`);
    }
    return response.json();
  },
};

// ===== VENDOR API =====
export const vendorApi = {
  // Get all vendors
  getAll: async () => {
    const response = await fetch(`${API_URL}/vendors`, {
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to fetch vendors');
    return response.json();
  },

  // Get single vendor
  getById: async (id: number) => {
    const response = await fetch(`${API_URL}/vendors/${id}`, {
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to fetch vendor');
    return response.json();
  },

  // Create vendor
  create: async (data: any) => {
    const response = await fetch(`${API_URL}/vendors`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to create vendor');
    return response.json();
  },

  // Update vendor
  update: async (id: number, data: any) => {
    const response = await fetch(`${API_URL}/vendors/${id}`, {
      method: 'PUT',
      headers: getAuthHeader(),
      body: JSON.stringify(data),
    });
    if (!response.ok) throw new Error('Failed to update vendor');
    return response.json();
  },

  // Delete vendor
  delete: async (id: number) => {
    const response = await fetch(`${API_URL}/vendors/${id}`, {
      method: 'DELETE',
      headers: getAuthHeader(),
    });
    if (!response.ok) throw new Error('Failed to delete vendor');
    return response.json();
  },
};

// ===== PROPOSAL API =====
export const proposalApi = {
  // Create proposal
  create: async (rfpId: number, data: any) => {
    const res = await fetch(`${API_URL}/proposals`, {
      method: 'POST',
      headers: getAuthHeader(),
      body: JSON.stringify({ rfpId, ...data }),
    });
    if (!res.ok) throw new Error('Failed to create proposal');
    return res.json();
  },

  // Get proposals for an RFP (for requester)
  getByRfp: async (rfpId: number) => {
    const res = await fetch(`${API_URL}/rfps/${rfpId}/proposals`);
    if (!res.ok) throw new Error('Failed to fetch proposals');
    return res.json();
  },

  // ✅ Get proposals by vendor (for vendor)
  getByVendor: async (vendorId: number) => {
    const res = await fetch(`${API_URL}/proposals/vendor/${vendorId}`);
    if (!res.ok) throw new Error('Failed to fetch vendor proposals');
    return res.json();
  },

  // ✅ Get single proposal details
  getById: async (id: number) => {
    const res = await fetch(`${API_URL}/proposals/${id}`);
    if (!res.ok) throw new Error('Failed to fetch proposal');
    return res.json();
  },
};
