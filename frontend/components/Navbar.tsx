'use client';

import { useAuthStore } from '@/lib/store';
import Link from 'next/link';
import { useRouter } from 'next/navigation';

export function Navbar() {
  const { user, token, logout } = useAuthStore();
  const router = useRouter();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <nav className="bg-white shadow-md">
      <div className="mx-auto flex max-w-7xl items-center justify-between px-6 py-3">
        <Link href="/" className="text-2xl font-bold text-blue-600">
          RFP Manager
        </Link>

        <div className="flex items-center gap-3">
          {user && token ? (
            <>
              <Link
                href="/dashboard"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Dashboard
              </Link>
              <span className="text-sm text-slate-600">
                {user.name}
              </span>
              <button
                onClick={handleLogout}
                className="rounded-md bg-red-600 px-3 py-1 text-sm text-white hover:bg-red-700"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-sm text-slate-600 hover:text-slate-900"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700"
              >
                Register
              </Link>
            </>
          )}
        </div>
      </div>
    </nav>
  );
}
