'use client';

import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';
import { useAuthStore } from '@/lib/store';

export default function Dashboard() {
  const { user } = useAuthStore();

  return (
    <AuthGuard>
      <div style={styles.container}>
        <h1>Dashboard</h1>
        <p>Welcome, {user?.name}!</p>

        <div style={styles.grid}>
          {user?.role === 'requester' && (
            <>
              <Link href="/dashboard/rfps" style={styles.card}>
                <h3>📋 RFPs</h3>
                <p>Manage your requests for proposals</p>
              </Link>
              <Link href="/dashboard/rfps/create" style={styles.card}>
                <h3>➕ Create RFP</h3>
                <p>Create a new RFP</p>
              </Link>
              <Link href="/dashboard/proposals" style={styles.card}>
                <h3>📝 Proposals</h3>
                <p>View vendor proposals</p>
              </Link>
            </>
          )}

          {user?.role === 'vendor' && (
            <>
              <Link href="/dashboard/vendors" style={styles.card}>
                <h3>🏢 Vendor Info</h3>
                <p>Update your vendor profile</p>
              </Link>
              <Link href="/dashboard/proposals" style={styles.card}>
                <h3>📝 Proposals</h3>
                <p>View your proposals</p>
              </Link>
            </>
          )}
        </div>
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
  grid: {
    display: 'grid',
    gridTemplateColumns: 'repeat(auto-fit, minmax(300px, 1fr))',
    gap: '1.5rem',
    marginTop: '2rem',
  },
  card: {
    background: 'white',
    padding: '2rem',
    borderRadius: '8px',
    textDecoration: 'none',
    color: 'inherit',
    boxShadow: '0 2px 10px rgba(0,0,0,0.1)',
    transition: 'transform 0.2s',
    cursor: 'pointer',
  },
};