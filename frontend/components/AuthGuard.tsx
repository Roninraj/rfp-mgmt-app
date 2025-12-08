'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import { useAuthStore } from '@/lib/store';
import { authApi } from '@/lib/auth';

export function AuthGuard({ children }: { children: React.ReactNode }) {
  const router = useRouter();
  const { user } = useAuthStore();

  useEffect(() => {
    if (!authApi.isAuthenticated() && !user) {
      router.push('/login');
    }
  }, [user, router]);

  if (!authApi.isAuthenticated()) {
    return <div>Loading...</div>;
  }

  return <>{children}</>;
}