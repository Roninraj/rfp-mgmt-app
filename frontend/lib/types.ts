export interface User {
  id: number;
  email: string;
  name: string;
  role: 'requester' | 'vendor';
  companyName?: string;
  phone?: string;
  city?: string;
}

export interface RFP {
  id: number;
  title: string;
  descriptionRaw: string;
  budget: number;
  currency: string;
  deliveryBy: string;
  paymentTerms?: string;
  requirements?: any;
  createdAt: string;
  requesterId: number;
  requester?: User;
  proposals: Proposal[];
  rfpVendors: RfpVendor[];
}

export interface Vendor {
  id: number;
  name: string;
  email: string;
  contactPerson?: string;
  notes?: string;
}

export interface RfpVendor {
  id: number;
  rfpId: number;
  vendorId: number;
  status: string;
  vendor: Vendor;
}

export interface Proposal {
  id: number;
  rfpId: number;
  vendorId: number;
  totalPrice: number;
  currency: string;
  deliveryDays: number;
  warrantyMonths?: number;
  paymentTermsText?: string;
  status: string;
  vendor: Vendor;
  score?: ProposalScore;
}

export interface ProposalScore {
  id: number;
  priceScore: number;
  deliveryScore: number;
  warrantyScore: number;
  overallScore: number;
  explanation: string;
}

export interface LoginResponse {
  message: string;
  user: User;
  token: string;
}
