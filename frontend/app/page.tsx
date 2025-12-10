'use client';

import { useEffect } from 'react';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { useAuthStore } from '@/lib/store';

export default function Home() {
  const router = useRouter();
  const { user, token, loadFromStorage } = useAuthStore();

  useEffect(() => {
    // Load user from localStorage on mount
    loadFromStorage();
  }, [loadFromStorage]);

  // If user is logged in, redirect to dashboard
  useEffect(() => {
    if (user && token) {
      router.push('/dashboard');
    }
  }, [user, token, router]);

  return (
    <div className="min-h-screen bg-linear-to-br from-slate-900 to-slate-800 flex items-center justify-center px-4">
      <div className="max-w-2xl mx-auto text-center">
        {/* Hero Section */}
        <div className="mb-12">
          <h1 className="text-5xl md:text-6xl font-bold text-white mb-6">
            RFP Management System
          </h1>
          <p className="text-xl text-slate-300 mb-8">
            Streamline your Request for Proposals process. Connect requesters with vendors effortlessly.
          </p>
        </div>

        {/* Features */}
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          <div className="bg-slate-700 p-6 rounded-lg">
            <div className="text-3xl mb-3">📋</div>
            <h3 className="text-lg font-semibold text-white mb-2">Create RFPs</h3>
            <p className="text-slate-300 text-sm">
              Post requests for proposals and manage vendor responses in one place.
            </p>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg">
            <div className="text-3xl mb-3">🏢</div>
            <h3 className="text-lg font-semibold text-white mb-2">Vendor Management</h3>
            <p className="text-slate-300 text-sm">
              Build and manage your vendor database with ease.
            </p>
          </div>

          <div className="bg-slate-700 p-6 rounded-lg">
            <div className="text-3xl mb-3">📊</div>
            <h3 className="text-lg font-semibold text-white mb-2">Compare Proposals</h3>
            <p className="text-slate-300 text-sm">
              Analyze and compare proposals side-by-side with scoring.
            </p>
          </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col md:flex-row gap-4 justify-center">
          <Link
            href="/register"
            className="px-8 py-3 bg-blue-600 hover:bg-blue-700 text-white font-semibold rounded-lg transition-colors"
          >
            Get Started
          </Link>
          <Link
            href="/login"
            className="px-8 py-3 bg-slate-600 hover:bg-slate-700 text-white font-semibold rounded-lg transition-colors"
          >
            Login
          </Link>
        </div>

        {/* Demo Credentials */}
        <div className="mt-12 pt-12 border-t border-slate-700">
          <p className="text-slate-400 text-sm mb-4">
            Want to try it out? Use the credentials below for a quick demo:
          </p>
          <div className="bg-slate-800 p-4 rounded-lg inline-block text-left">
            <p className="text-slate-300 text-sm">
              <strong>Requester:</strong> demo@example.com / password123
            </p>
            <p className="text-slate-300 text-sm">
              <strong>Vendor:</strong> vendor@example.com / password123
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
