'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user, token, loadFromStorage } = useAuthStore();

  useEffect(() => {
    // Load auth state from localStorage
    loadFromStorage();
  }, [loadFromStorage]);

  useEffect(() => {
    // Check if user is authenticated
    if (!user || !token) {
      // Wait a bit for localStorage to load
      const timer = setTimeout(() => {
        if (!user && !token) {
          router.push('/login');
        }
      }, 1000);

      return () => clearTimeout(timer);
    }
  }, [user, token, router]);

  // Show loading while checking auth
  if (!user || !token) {
    return (
      <div className="flex items-center justify-center min-h-screen">
        <div className="text-center">
          <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-blue-600 mb-4"></div>
          <p className="text-slate-600">Loading...</p>
        </div>
      </div>
    );
  }

  return <>{children}</>;
}
