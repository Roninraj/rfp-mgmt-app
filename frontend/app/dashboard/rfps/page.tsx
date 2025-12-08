'use client';

import { useEffect, useState } from 'react';
import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';
import { rfpApi } from '@/lib/api';
import { RFP } from '@/lib/types';

export default function RFPsPage() {
  const [rfps, setRfps] = useState<RFP[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState('');

  useEffect(() => {
    loadRFPs();
  }, []);

  const loadRFPs = async () => {
    try {
      setLoading(true);
      const data = await rfpApi.getAll();
      setRfps(data);
    } catch (err: any) {
      setError(err.message || 'Failed to load RFPs');
    } finally {
      setLoading(false);
    }
  };

  const handleDelete = async (id: number) => {
    if (confirm('Are you sure?')) {
      try {
        await rfpApi.delete(id);
        setRfps(rfps.filter((rfp) => rfp.id !== id));
      } catch (err: any) {
        setError(err.message || 'Failed to delete RFP');
      }
    }
  };

  return (
    <AuthGuard>
      <div style={styles.container}>
        <div style={styles.header}>
          <h1>My RFPs</h1>
          <Link href="/dashboard/rfps/create" style={styles.button}>
            Create RFP
          </Link>
        </div>

        {error && <div style={styles.error}>{error}</div>}

        {loading ? (
          <p>Loading...</p>
        ) : rfps.length === 0 ? (
          <p>No RFPs found. Create one to get started!</p>
        ) : (
          <div style={styles.table}>
            <table>
              <thead>
                <tr>
                  <th>Title</th>
                  <th>Budget</th>
                  <th>Delivery By</th>
                  <th>Proposals</th>
                  <th>Actions</th>
                </tr>
              </thead>
              <tbody>
                {rfps.map((rfp) => (
                  <tr key={rfp.id}>
                    <td>{rfp.title}</td>
                    <td>{rfp.budget?.toLocaleString() || 'N/A'} {rfp.currency}</td>
                    <td>{new Date(rfp.deliveryBy).toLocaleDateString()}</td>
                    <td>{rfp.proposals?.length || 0}</td>
                    <td>
                      <Link href={`/dashboard/rfps/${rfp.id}`} style={styles.link}>
                        View
                      </Link>
                      {' | '}
                      <button
                        onClick={() => handleDelete(rfp.id)}
                        style={styles.deleteLink}
                      >
                        Delete
                      </button>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
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
  header: {
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
    marginBottom: '2rem',
  },
  button: {
    padding: '0.75rem 1.5rem',
    background: '#3498db',
    color: 'white',
    textDecoration: 'none',
    borderRadius: '4px',
  },
  error: {
    background: '#ffe0e0',
    color: '#c0392b',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  table: {
    background: 'white',
    borderRadius: '8px',
    overflow: 'hidden',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
  },
  link: {
    color: '#3498db',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  deleteLink: {
    background: 'none',
    border: 'none',
    color: '#e74c3c',
    cursor: 'pointer',
    textDecoration: 'none',
  },
};