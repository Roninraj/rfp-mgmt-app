'use client';

import { useEffect, useState } from 'react';
import { proposalApi } from '@/lib/api';
import Link from 'next/link';

export default function VendorProposalsPage() {
  const [proposals, setProposals] = useState<any[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);
  const [vendorId, setVendorId] = useState<number | null>(null);

  useEffect(() => {
    // Get vendor ID from localStorage (set during login)
    const user = localStorage.getItem('user');
    if (user) {
      const { id } = JSON.parse(user);
      setVendorId(id);
    }
  }, []);

  useEffect(() => {
    if (!vendorId) return;

    const loadProposals = async () => {
      try {
        setLoading(true);
        const data = await proposalApi.getByVendor(vendorId);
        setProposals(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadProposals();
  }, [vendorId]);

  if (loading) return <div>Loading your proposals...</div>;
  if (error) return <div>Error: {error}</div>;

  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My Proposals</h1>

      {proposals.length === 0 ? (
        <p>You haven't submitted any proposals yet.</p>
      ) : (
        <div className="grid gap-4">
          {proposals.map((prop: any) => (
            <Link
              key={prop.id}
              href={`/dashboard/proposals/vendor/${prop.id}`}
            >
              <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
                <h2 className="text-lg font-semibold">{prop.rfp?.title}</h2>
                <p className="text-gray-600 text-sm mb-2">
                  {prop.rfp?.descriptionRaw?.substring(0, 100)}...
                </p>

                <div className="flex justify-between items-center">
                  <div>
                    <p className="font-bold text-lg">
                      ${prop.totalPrice} {prop.currency}
                    </p>
                    <p className="text-sm text-gray-500">
                      {prop.deliveryDays} days delivery
                    </p>
                  </div>
                  <span className="text-blue-500 font-medium">View Details →</span>
                </div>
              </div>
            </Link>
          ))}
        </div>
      )}
    </div>
  );
}
