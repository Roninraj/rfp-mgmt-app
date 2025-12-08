'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';
import { authApi } from '@/lib/auth';

export default function Home() {
  const router = useRouter();

  useEffect(() => {
    if (authApi.isAuthenticated()) {
      router.push('/dashboard');
    }
  }, [router]);

  return (
    <div style={styles.container}>
      <div style={styles.hero}>
        <h1>RFP Management System</h1>
        <p>Streamline your Request for Proposal process</p>
        <div style={styles.buttons}>
          <Link href="/login" style={{ ...styles.button, ...styles.primary }}>
            Login
          </Link>
          <Link href="/register" style={{ ...styles.button, ...styles.secondary }}>
            Register
          </Link>
        </div>
      </div>
    </div>
  );
}

const styles = {
  container: {
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    minHeight: '100vh',
    background: 'linear-gradient(135deg, #667eea 0%, #764ba2 100%)',
  },
  hero: {
    textAlign: 'center' as const,
    color: 'white',
  },
  buttons: {
    marginTop: '2rem',
    display: 'flex',
    gap: '1rem',
    justifyContent: 'center',
  },
  button: {
    padding: '0.75rem 2rem',
    fontSize: '1rem',
    borderRadius: '4px',
    textDecoration: 'none',
    cursor: 'pointer',
  },
  primary: {
    background: 'white',
    color: '#667eea',
  },
  secondary: {
    background: 'transparent',
    color: 'white',
    border: '2px solid white',
  },
};