'use client';

import { useEffect, useState } from 'react';
import { rfpApi, proposalApi } from '@/lib/api';
import Link from 'next/link';

export default function ProposalsPage() {
  const [rfps, setRfps] = useState<any[]>([]);
  const [proposalsMap, setProposalsMap] = useState<Record<number, any[]>>({});
  const [vendorProposals, setVendorProposals] = useState<any[] | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadForVendor = async (vendorId: number) => {
      try {
        setLoading(true);
        const data = await proposalApi.getByVendor(vendorId);
        setVendorProposals(data || []);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    const loadForRequester = async () => {
      try {
        setLoading(true);
        const rfpData = await rfpApi.getAll();
        const myRfps = rfpData.rfps || [];
        setRfps(myRfps);

        const map: Record<number, any[]> = {};
        for (const rfp of myRfps) {
          try {
            const propsData = await proposalApi.getByRfp(rfp.id);
            map[rfp.id] = propsData || [];
          } catch {
            map[rfp.id] = [];
          }
        }
        setProposalsMap(map);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    // Detect logged-in user from localStorage
    const userJson = typeof window !== 'undefined' ? localStorage.getItem('user') : null;
    if (userJson) {
      try {
        const user = JSON.parse(userJson);
        if (user?.role === 'vendor' && user?.id) {
          loadForVendor(user.id);
          return;
        }
      } catch (e) {
        // ignore and fall through to requester view
      }
    }

    // Default: requester view
    loadForRequester();
  }, []);

  if (loading) return <div>Loading proposals...</div>;
  if (error) return <div className="p-6 text-red-600">Error: {error}</div>;

  // Vendor view
  if (vendorProposals !== null) {
    return (
      <div className="p-6">
        <h1 className="text-3xl font-bold mb-6">My Proposals</h1>

        {vendorProposals.length === 0 ? (
          <p>You haven't submitted any proposals yet.</p>
        ) : (
          <div className="grid gap-4">
            {vendorProposals.map((prop: any) => (
              <Link key={prop.id} href={`/dashboard/proposals/vendor/${prop.id}`}>
                <div className="border rounded-lg p-4 hover:shadow-lg transition cursor-pointer">
                  <h2 className="text-lg font-semibold">{prop.rfp?.title}</h2>
                  <p className="text-gray-600 text-sm mb-2">{prop.rfp?.descriptionRaw?.substring(0, 100)}...</p>

                  <div className="flex justify-between items-center">
                    <div>
                      <p className="font-bold text-lg">${prop.totalPrice} {prop.currency}</p>
                      <p className="text-sm text-gray-500">{prop.deliveryDays} days delivery</p>
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

  // Requester view (default)
  return (
    <div className="p-6">
      <h1 className="text-3xl font-bold mb-6">My RFP Proposals</h1>

      {rfps.length === 0 ? (
        <p>No RFPs created yet.</p>
      ) : (
        <div className="space-y-6">
          {rfps.map((rfp) => (
            <div key={rfp.id} className="border rounded-lg p-4">
              <h2 className="text-xl font-semibold">{rfp.title}</h2>
              <p className="text-gray-600 mb-4">{rfp.descriptionRaw}</p>

              <div className="ml-4">
                <h3 className="text-lg font-medium mb-2">Proposals ({proposalsMap[rfp.id]?.length || 0})</h3>

                {!proposalsMap[rfp.id] || proposalsMap[rfp.id].length === 0 ? (
                  <p className="text-gray-500">No proposals yet</p>
                ) : (
                  <div className="space-y-2">
                    {proposalsMap[rfp.id].map((prop: any) => (
                      <div key={prop.id} className="bg-blue-50 p-3 rounded border-l-4 border-blue-500">
                        <p className="font-medium">{prop.vendor?.name}</p>
                        <p className="text-sm text-gray-600">${prop.totalPrice} {prop.currency}</p>
                        <p className="text-sm text-gray-600">Delivery: {prop.deliveryDays} days</p>
                      </div>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}
