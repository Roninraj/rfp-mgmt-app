'use client';

import { useEffect, useState } from 'react';
import { proposalApi } from '@/lib/api';
import { useParams } from 'next/navigation';

export default function ProposalDetailPage() {
  const params = useParams();
  const id = Number(params.id);

  const [proposal, setProposal] = useState<any>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  useEffect(() => {
    const load = async () => {
      try {
        setLoading(true);
        const data = await proposalApi.getById(id);
        setProposal(data);
      } catch (err: any) {
        setError(err.message);
      } finally {
        setLoading(false);
      }
    };

    load();
  }, [id]);

  if (loading) return <div>Loading...</div>;
  if (error) return <div>Error: {error}</div>;
  if (!proposal) return <div>Proposal not found</div>;

  return (
    <div className="p-6 max-w-2xl">
      <h1 className="text-3xl font-bold mb-4">{proposal.rfp?.title}</h1>

      <div className="bg-gray-50 p-4 rounded-lg mb-6">
        <h2 className="text-lg font-semibold mb-2">Your Proposal</h2>
        <p className="text-2xl font-bold text-green-600 mb-2">
          ${proposal.totalPrice} {proposal.currency}
        </p>
        <p className="text-gray-600 mb-2">Delivery: {proposal.deliveryDays} days</p>
        <p className="text-gray-600 mb-2">
          Warranty: {proposal.warrantyMonths} months
        </p>
        {proposal.paymentTermsText && (
          <p className="text-gray-600">Payment: {proposal.paymentTermsText}</p>
        )}
      </div>

      {proposal.message && (
        <div className="bg-blue-50 p-4 rounded-lg mb-6">
          <h3 className="font-semibold mb-2">Your Message</h3>
          <p>{proposal.message}</p>
        </div>
      )}

      {proposal.lineItems && (
        <div className="bg-gray-50 p-4 rounded-lg">
          <h3 className="font-semibold mb-2">Line Items</h3>
          <pre className="text-sm overflow-auto">
            {JSON.stringify(proposal.lineItems, null, 2)}
          </pre>
        </div>
      )}
    </div>
  );
}
