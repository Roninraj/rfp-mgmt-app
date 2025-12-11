'use client';

import { useEffect, useState } from 'react';
import { useParams } from 'next/navigation';
import { AuthGuard } from '@/components/AuthGuard';
import { rfpApi, proposalApi } from '@/lib/api';
import { RFP } from '@/lib/types';
import { ProposalCard } from '@/components/ProposalCard';
import { useAuthStore } from '@/lib/store';

// Simple vendor proposal form state
function VendorProposalForm({ rfpId, onCreated }: { rfpId: number; onCreated: () => void }) {
  const [totalPrice, setTotalPrice] = useState('');
  const [deliveryDays, setDeliveryDays] = useState('');
  const [loading, setLoading] = useState(false);
  const { token } = useAuthStore();

  const submit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      setLoading(true);
      await proposalApi.create(rfpId, {
        totalPrice: Number(totalPrice),
        deliveryDays: Number(deliveryDays || 0),
      });
      setTotalPrice('');
      setDeliveryDays('');
      onCreated();
    } catch (err) {
      console.error('Proposal submit error', err);
      alert('Failed to submit proposal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={submit} style={{ margin: '1rem 0', background: '#fff', padding: '1rem', borderRadius: 8 }}>
      <h3>Submit a proposal</h3>
      <div style={{ display: 'flex', gap: 8, marginTop: 8 }}>
        <input placeholder="Total price" value={totalPrice} onChange={(e) => setTotalPrice(e.target.value)} />
        <input placeholder="Delivery days" value={deliveryDays} onChange={(e) => setDeliveryDays(e.target.value)} />
        <button type="submit" disabled={loading}>{loading ? 'Submitting...' : 'Submit'}</button>
      </div>
    </form>
  );
}

export default function RFPDetailPage() {
  const params = useParams();
  const [rfp, setRfp] = useState<RFP | null>(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');
  const [notice, setNotice] = useState('');

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
          {rfp.requester && (
            <div style={{ marginBottom: 12 }}>
              <strong>Requester:</strong> {rfp.requester.name} {rfp.requester.companyName ? `- ${rfp.requester.companyName}` : ''}
            </div>
          )}
          <p><strong>Description:</strong> {rfp.descriptionRaw}</p><br/>
          <p><strong>Budget:</strong> {rfp.budget?.toLocaleString() || 'N/A'} {rfp.currency}</p><br/>
          <p><strong>Delivery By:</strong> {new Date(rfp.deliveryBy).toLocaleDateString()}</p><br/>
          {rfp.paymentTerms && <p><strong>Payment Terms:</strong> {rfp.paymentTerms}</p>}<br/>
          {rfp.requirements && <p><strong>Requirements:</strong> {rfp.requirements}</p>}
        </div>

        <h2>Proposals ({rfp.proposals?.length || 0})</h2>
        {/* Transient notice (e.g., after selecting a proposal) */}
        {notice && (
          <div style={{ background: '#ecfdf5', border: '1px solid #bbf7d0', padding: 12, borderRadius: 6, marginBottom: 12 }}>
            {notice}
          </div>
        )}

        {/* If logged-in user is a vendor show the create form */}
        {useAuthStore.getState().user?.role === 'vendor' && (
          <VendorProposalForm rfpId={rfp.id} onCreated={loadRFP} />
        )}
        {rfp.proposals && rfp.proposals.length > 0 ? (
          rfp.proposals.map((proposal) => (
            <ProposalCard
              key={proposal.id}
              proposal={proposal}
              rfpId={rfp.id}
              isRequesterOwner={useAuthStore.getState().user?.role === 'requester' && useAuthStore.getState().user?.id === rfp.requesterId}
              selected={rfp.selectedProposalId === proposal.id}
              onSelect={async (proposalId: number) => {
                if (!confirm('Select this proposal? This action cannot be undone.')) return;
                try {
                  await rfpApi.selectProposal(rfp.id, proposalId);
                  await loadRFP();
                  setNotice('Proposal selected successfully');
                  setTimeout(() => setNotice(''), 3500);
                } catch (err: any) {
                  console.error(err);
                  setNotice(err.message || 'Failed to select proposal');
                  setTimeout(() => setNotice(''), 3500);
                }
              }}
            />
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