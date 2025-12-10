'use client';

import { useEffect, useState } from 'react';
import { rfpApi, proposalApi } from '@/lib/api';
import Link from 'next/link';

export default function RequesterProposalsPage() {
  const [rfps, setRfps] = useState<any[]>([]);
  const [proposals, setProposals] = useState<Record<number, any[]>>({});
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const loadData = async () => {
      try {
        setLoading(true);

        // Get requester's RFPs
        const rfpData = await rfpApi.getAll();
        const myRfps = rfpData.rfps || [];
        setRfps(myRfps);

        // For each RFP, get proposals
        const proposalsMap: Record<number, any[]> = {};
        for (const rfp of myRfps) {
          try {
            const propsData = await proposalApi.getByRfp(rfp.id);
            proposalsMap[rfp.id] = propsData || [];
          } catch {
            proposalsMap[rfp.id] = [];
          }
        }
        setProposals(proposalsMap);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    loadData();
  }, []);

  if (loading) return <div>Loading proposals...</div>;
  if (error) return <div>Error: {error}</div>;

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
                <h3 className="text-lg font-medium mb-2">
                  Proposals ({proposals[rfp.id]?.length || 0})
                </h3>

                {!proposals[rfp.id] || proposals[rfp.id].length === 0 ? (
                  <p className="text-gray-500">No proposals yet</p>
                ) : (
                  <div className="space-y-2">
                    {proposals[rfp.id].map((prop: any) => (
                      <div
                        key={prop.id}
                        className="bg-blue-50 p-3 rounded border-l-4 border-blue-500"
                      >
                        <p className="font-medium">{prop.vendor?.name}</p>
                        <p className="text-sm text-gray-600">
                          ${prop.totalPrice} {prop.currency}
                        </p>
                        <p className="text-sm text-gray-600">
                          Delivery: {prop.deliveryDays} days
                        </p>
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
