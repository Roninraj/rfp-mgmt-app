'use client';

import { useEffect, useState } from 'react';
import { useAuthStore } from '@/lib/store';
import { rfpApi } from '@/lib/api';
import Link from 'next/link';

export default function RFPsPage() {
  const { user } = useAuthStore();
  const [rfps, setRfps] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRfps();
  }, []);

  const loadRfps = async () => {
    try {
      setLoading(true);
      const data = await rfpApi.getAll();
      setRfps(data);
    } catch (err: any) {
      setError(err.message);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <p className="text-gray-600">Loading RFPs...</p>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4">
        <div className="flex justify-between items-center mb-8">
          <h1 className="text-3xl font-bold">RFPs</h1>
          {user?.role === 'requester' && (
            <Link
              href="/dashboard/rfps/create"
              className="px-4 py-2 bg-blue-600 text-white rounded hover:bg-blue-700"
            >
              Create RFP
            </Link>
          )}
        </div>

        {error && (
          <div className="bg-red-100 text-red-700 p-4 rounded mb-4">
            {error}
          </div>
        )}

        {rfps.length === 0 ? (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">No RFPs found</p>
          </div>
        ) : (
          <div className="grid gap-6">
            {rfps.map((rfp) => (
              <Link
                key={rfp.id}
                href={`/dashboard/rfps/${rfp.id}`}
                className="bg-white p-6 rounded-lg shadow hover:shadow-lg transition-shadow"
              >
                <h2 className="text-xl font-semibold mb-2">{rfp.title}</h2>
                <p className="text-gray-600 mb-4">{rfp.descriptionRaw}</p>
                <div className="flex justify-between items-center">
                  <div>
                    <p className="text-sm text-gray-500">Budget: ${rfp.budget}</p>
                    <p className="text-sm text-gray-500">
                      Delivery: {new Date(rfp.deliveryBy).toLocaleDateString()}
                    </p>
                  </div>
                  <button className="text-blue-600 hover:text-blue-800">
                    View Details →
                  </button>
                </div>
              </Link>
            ))}
          </div>
        )}
      </div>
    </div>
  );
}
