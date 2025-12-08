'use client';

import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';

interface ProposalCardProps {
  proposal: Proposal;
}

export function ProposalCard({ proposal }: ProposalCardProps) {
  const score = proposal.score;

  return (
    <div style={styles.card}>
      <div style={styles.header}>
        <h3>{proposal.vendor.name}</h3>
        <span style={styles.status}>{proposal.status}</span>
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