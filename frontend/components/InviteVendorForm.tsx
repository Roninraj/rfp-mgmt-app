'use client';

import { useState, useEffect } from 'react';
import { vendorApi, rfpApi } from '@/lib/api';

interface Vendor {
  id: number;
  name: string;
  email: string;
  companyName?: string;
}

interface InviteVendorFormProps {
  rfpId: number;
  existingInvites: { vendorId: number }[];
  onInviteSuccess: () => void;
}

export function InviteVendorForm({ rfpId, existingInvites, onInviteSuccess }: InviteVendorFormProps) {
  const [vendors, setVendors] = useState<Vendor[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [inviting, setInviting] = useState<number | null>(null);

  useEffect(() => {
    loadVendors();
  }, []);

  const loadVendors = async () => {
    try {
      setLoading(true);
      const data = await vendorApi.getAll();
      setVendors(data.vendors || []);
    } catch (err: any) {
      setError('Failed to load vendors');
    } finally {
      setLoading(false);
    }
  };

  const handleInvite = async (vendorId: number) => {
    try {
      setInviting(vendorId);
      await rfpApi.inviteVendor(rfpId, vendorId);
      onInviteSuccess(); // Refresh parent data
    } catch (err: any) {
      alert(err.message || 'Failed to invite vendor');
    } finally {
      setInviting(null);
    }
  };

  const isInvited = (vendorId: number) => {
    return existingInvites.some((inv) => inv.vendorId === vendorId);
  };

  if (loading) return <div className="text-gray-500 text-sm">Loading vendors...</div>;
  if (error) return <div className="text-red-500 text-sm">{error}</div>;

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Invite Vendors</h3>
      
      {vendors.length === 0 ? (
        <p className="text-gray-500">No vendors found in the system.</p>
      ) : (
        <div className="max-h-60 overflow-y-auto space-y-2">
          {vendors.map((vendor) => {
            const invited = isInvited(vendor.id);
            return (
              <div key={vendor.id} className="flex justify-between items-center p-3 hover:bg-gray-50 rounded border border-gray-100">
                <div>
                  <div className="font-medium text-gray-900">{vendor.name}</div>
                  <div className="text-sm text-gray-500">{vendor.email}</div>
                  {vendor.companyName && <div className="text-xs text-gray-400">{vendor.companyName}</div>}
                </div>
                
                <button
                  onClick={() => handleInvite(vendor.id)}
                  disabled={invited || inviting === vendor.id}
                  className={`px-3 py-1.5 rounded text-sm font-medium transition-colors ${
                    invited
                      ? 'bg-green-100 text-green-700 cursor-default'
                      : inviting === vendor.id
                      ? 'bg-blue-100 text-blue-700 cursor-wait'
                      : 'bg-blue-600 text-white hover:bg-blue-700'
                  }`}
                >
                  {invited ? 'Invited' : inviting === vendor.id ? 'Sending...' : 'Invite'}
                </button>
              </div>
            );
          })}
        </div>
      )}
    </div>
  );
}
