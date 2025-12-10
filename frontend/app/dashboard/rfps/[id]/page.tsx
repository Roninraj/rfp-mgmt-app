'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AuthGuard } from '@/components/AuthGuard';
import { rfpApi } from '@/lib/api';
import { RFP } from '@/lib/types';
import { ProposalCard } from '@/components/ProposalCard';

export default function RFPDetailPage() {
  const params = useParams();
  const [rfp, setRfp] = useState<RFP | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRFP();
  }, [params.id]);

  const loadRFP = async () => {
    try {
      setLoading(true);
      const data = await rfpApi.getById(Number(params.id));
      setRfp(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load RFP');
    } finally {
      setLoading(false);
    }
  };

  if (loading) return <AuthGuard><div>Loading...</div></AuthGuard>;
  if (error) return <AuthGuard><div style={{ color: 'red' }}>{error}</div></AuthGuard>;
  if (!rfp) return <AuthGuard><div>RFP not found</div></AuthGuard>;

  return (
    <AuthGuard>
      <div style={styles.container}>
        <h1 className=" text-blue-900">{<strong>{rfp.title}</strong>}</h1><br/><br/>
        <div style={styles.details}>
          <p><strong>Description:</strong> {rfp.descriptionRaw}</p><br/>
          <p><strong>Budget:</strong> {rfp.budget?.toLocaleString() || 'N/A'} {rfp.currency}</p><br/>
          <p><strong>Delivery By:</strong> {new Date(rfp.deliveryBy).toLocaleDateString()}</p><br/>
          {rfp.paymentTerms && <p><strong>Payment Terms:</strong> {rfp.paymentTerms}</p>}<br/>
          {rfp.requirements && <p><strong>Requirements:</strong> {rfp.requirements}</p>}
        </div>

        <h2>Proposals ({rfp.proposals?.length || 0})</h2>
        {rfp.proposals && rfp.proposals.length > 0 ? (
          rfp.proposals.map((proposal) => (
            <ProposalCard key={proposal.id} proposal={proposal} />
          ))
        ) : (
          <p>No proposals yet</p>
        )}
      </div>
    </AuthGuard>
  );
}

const styles = {
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '2rem 1rem',
  },
  details: {
    background: 'white',
    padding: '1.5rem',
    borderRadius: '8px',
    marginBottom: '2rem',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
};