'use client';

import { useEffect, useState } from 'react';
import { vendorApi } from '@/lib/api';
import Link from 'next/link';

export default function VendorsPage() {
  const [vendors, setVendors] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadVendors();
  }, []);

  const loadVendors = async () => {
    try {
      setLoading(true);
      const data = await vendorApi.getAll();
      setVendors(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading vendors...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">Vendors</h1>
          <Link
            href="/dashboard/vendors/create"
            className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
          >
            Add Vendor
          </Link>
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error}
          </div>
        )}

        {vendors.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No vendors found</p>
          </div>
        ) : (
          <div className="grid gap-6 md:grid-cols-2 lg:grid-cols-3">
            {vendors.map((vendor) => (
              <div
                key={vendor.id}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-lg font-semibold mb-2">{vendor.name}</h2>
                <p className="text-gray-600 mb-2">{vendor.email}</p>
                <p className="text-gray-600 mb-4">{vendor.contactPerson}</p>
                {vendor.notes && (
                  <p className="text-sm text-gray-500 mb-4">{vendor.notes}</p>
                )}
                <Link
                  href={`/dashboard/vendors/${vendor.id}`}
                  className="text-blue-600 hover:text-blue-800"
                >
                  View Details →
                </Link>
              </div>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
