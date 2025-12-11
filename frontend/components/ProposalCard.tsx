"use client";

import React, { useState } from 'react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';

interface ProposalCardProps {
  proposal: Proposal;
  rfpId?: number;
  isRequesterOwner?: boolean;
  selected?: boolean;
  onSelect?: (proposalId: number) => void;
}

export function ProposalCard({ proposal, rfpId, isRequesterOwner, selected, onSelect }: ProposalCardProps) {
  const score = proposal.score;
  const [loading, setLoading] = useState(false);

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>{proposal.vendor.name}</h3>
        <div style={{ display: 'flex', alignItems: 'center', gap: 8 }}>
          {selected ? (
            <span style={{ background: '#27ae60', color: '#fff', padding: '0.25rem 0.5rem', borderRadius: 4 }}>Selected</span>
          ) : null}
          <span style={styles.status}>{proposal.status}</span>
        </div>
      </div>

      <div style={styles.content}>
        <div style={styles.row}>
          <div>
            <strong>Price:</strong> {formatCurrency(proposal.totalPrice, proposal.currency)}
          </div>
          <div>
            <strong>Delivery:</strong> {proposal.deliveryDays} days
          </div>
        </div>

        {proposal.warrantyMonths && (
          <div>
            <strong>Warranty:</strong> {proposal.warrantyMonths} months
          </div>
        )}

        {score && (
          <div style={styles.scoreSection}>
            <h4>Score</h4>
            <div style={styles.scoreRow}>
              <div>Price: {(score.priceScore * 100).toFixed(1)}%</div>
              <div>Delivery: {(score.deliveryScore * 100).toFixed(1)}%</div>
              <div>Warranty: {(score.warrantyScore * 100).toFixed(1)}%</div>
            </div>
            <div style={styles.overallScore}>
              Overall: {(score.overallScore * 100).toFixed(1)}%
            </div>
          </div>
        )}

        {isRequesterOwner && !selected && (
          <div style={{ marginTop: 12 }}>
            <button
              onClick={async () => {
                if (!onSelect) return;
                try {
                  setLoading(true);
                  await onSelect(proposal.id);
                } catch (err) {
                  // allow parent to handle errors
                  console.error('Select action failed', err);
                } finally {
                  setLoading(false);
                }
              }}
              aria-label={`Select proposal ${proposal.id}`}
              disabled={loading}
              style={{
                padding: '0.5rem 1rem',
                background: loading ? '#94a3b8' : '#2563eb',
                color: '#fff',
                borderRadius: 6,
                opacity: loading ? 0.9 : 1,
                cursor: loading ? 'wait' : 'pointer',
              }}
            >
              {loading ? 'Selecting...' : 'Select Proposal'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}


const styles = {
  card: {
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
    padding: '1.5rem',
    marginBottom: '1rem',
  },
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '1rem',
  },
  status: {
    background: '#ecf0f1',
    padding: '0.25rem 0.75rem',
    borderRadius: '4px',
    fontSize: '0.875rem',
  },
  content: {
    display: 'flex',
    flexDirection: 'column' as const,
    gap: '1rem',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  scoreSection: {
    background: '#f8f9fa',
    padding: '1rem',
    borderRadius: '4px',
  },
  scoreRow: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr 1fr',
    gap: '1rem',
    marginBottom: '1rem',
  },
  overallScore: {
    fontSize: '1.125rem',
    fontWeight: 'bold',
    color: '#27ae60',
  },
};