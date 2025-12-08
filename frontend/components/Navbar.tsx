'use client';

import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';

export function Navbar() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <nav style={styles.navbar}>
      <div style={styles.container}>
        <Link href="/dashboard" style={styles.logo}>
          📋 RFP Manager
        </Link>
        {user && (
          <div style={styles.nav}>
            <div style={styles.userInfo}>
              <span>{user.name}</span>
              <span style={styles.role}>({user.role})</span>
            </div>
            <button onClick={handleLogout} style={styles.logout}>
              Logout
            </button>
          </div>
        )}
      </div>
    </nav>
  );
}

const styles = {
  navbar: {
    background: '#2c3e50',
    color: 'white',
    padding: '1rem 0',
    borderBottom: '1px solid #34495e',
  },
  container: {
    maxWidth: '1200px',
    margin: '0 auto',
    padding: '0 1rem',
    display: 'flex',
    justifyContent: 'space-between',
    alignItems: 'center',
  },
  logo: {
    fontSize: '1.5rem',
    fontWeight: 'bold',
    textDecoration: 'none',
    color: 'white',
  },
  nav: {
    display: 'flex',
    gap: '2rem',
    alignItems: 'center',
  },
  userInfo: {
    display: 'flex',
    gap: '0.5rem',
    alignItems: 'center',
  },
  role: {
    fontSize: '0.875rem',
    opacity: 0.8,
  },
  logout: {
    padding: '0.5rem 1rem',
    background: '#e74c3c',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    cursor: 'pointer',
  },
};