'use client';

import { useAuthStore } from '@/lib/store';
import { useRouter } from 'next/navigation';
import Link from 'next/link';
import { AuthGuard } from '@/components/AuthGuard';

function DashboardContent() {
  const router = useRouter();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    router.push('/login');
  };

  return (
    <div className="min-h-screen bg-slate-500">
      {/* Header 
      <header className="bg-white shadow">
        <div className="max-w-7xl mx-auto px-4 py-6 flex justify-between items-center">
          <h1 className="text-3xl font-bold text-slate-900">RFP Management System</h1>
          <div className="flex items-center gap-4">
            <div className="text-right">
              <p className="text-sm font-medium text-slate-900">{user?.name}</p>
              <p className="text-xs text-slate-500">{user?.role}</p>
            </div>
            <button
              onClick={handleLogout}
              className="px-4 py-2 bg-red-600 hover:bg-red-700 text-white rounded-lg transition-colors"
            >
              Logout
            </button>
          </div>
        </div>
      </header>*/}

      {/* Main Content */}
      <main className="max-w-7xl mx-auto px-4 py-8">
        <div className="grid md:grid-cols-3 gap-6 mb-12">
          {/* User Card */}
          <div className=" bg-slate-300 p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Welcome! 👋</h2>
            <div className="space-y-3">
              <div>
                <p className="text-sm text-slate-500">Name</p>
                <p className="text-slate-900 font-medium">{user?.name}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Email</p>
                <p className="text-slate-900 font-medium">{user?.email}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">Role</p>
                <p className="text-slate-900 font-medium capitalize">{user?.role}</p>
              </div>
              <div>
                <p className="text-sm text-slate-500">User ID</p>
                <p className="text-slate-900 font-medium">#{user?.id}</p>
              </div>
            </div>
          </div>

          {/* Quick Actions */}
          <div className=" bg-slate-300 p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Quick Actions</h2>
            <div className="space-y-3">
              {user?.role === 'requester' && (
                <>
                  <Link
                    href="/dashboard/rfps"
                    className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors"
                  >
                    📋 View RFPs
                  </Link>
                  <Link
                    href="/dashboard/rfps/create"
                    className="block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-center transition-colors"
                  >
                    ➕ Create RFP
                  </Link>
                </>
              )}
              {user?.role === 'vendor' && (
                <>
                  <Link
                    href="/dashboard/proposals"
                    className="block px-4 py-2 bg-blue-600 hover:bg-blue-700 text-white rounded-lg text-center transition-colors"
                  >
                    📄 My Proposals
                  </Link>
                  <Link
                    href="/dashboard/rfps"
                    className="block px-4 py-2 bg-green-600 hover:bg-green-700 text-white rounded-lg text-center transition-colors"
                  >
                    🔍 Browse RFPs
                  </Link>
                </>
              )}
              <Link
                href="/dashboard/vendors"
                className="block px-4 py-2 bg-purple-600 hover:bg-purple-700 text-white rounded-lg text-center transition-colors"
              >
                🏢 Vendors
              </Link>
            </div>
          </div>

          {/* Stats */}
          <div className="bg-white p-6 rounded-lg shadow-md border border-slate-200">
            <h2 className="text-lg font-semibold text-slate-900 mb-4">Stats</h2>
            <div className="space-y-4">
              <div className="bg-blue-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-blue-600">0</p>
                <p className="text-sm text-slate-600">
                  {user?.role === 'requester' ? 'RFPs Created' : 'Proposals Sent'}
                </p>
              </div>
              <div className="bg-green-50 p-4 rounded-lg">
                <p className="text-3xl font-bold text-green-600">0</p>
                <p className="text-sm text-slate-600">
                  {user?.role === 'requester' ? 'Responses Received' : 'Active'}
                </p>
              </div>
            </div>
          </div>
        </div>

        {/* Features Section */}
        <div className="bg-white p-8 rounded-lg shadow-md border border-slate-200">
          <h2 className="text-2xl font-bold text-slate-900 mb-6">Features Available</h2>

          {user?.role === 'requester' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">📋 Create RFP</h3>
                <p className="text-slate-600 text-sm">
                  Post a new Request for Proposal with detailed requirements, budget, and timeline.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">📊 Manage RFPs</h3>
                <p className="text-slate-600 text-sm">
                  View, edit, and track all your RFPs in one place.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">📈 Compare Proposals</h3>
                <p className="text-slate-600 text-sm">
                  Analyze vendor proposals with scoring system and detailed comparison.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">💬 Vendor Communication</h3>
                <p className="text-slate-600 text-sm">
                  Manage vendor database and track communications.
                </p>
              </div>
            </div>
          )}

          {user?.role === 'vendor' && (
            <div className="grid md:grid-cols-2 gap-6">
              <div className="border-l-4 border-blue-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">🔍 Browse RFPs</h3>
                <p className="text-slate-600 text-sm">
                  View all available RFPs matching your business capabilities.
                </p>
              </div>
              <div className="border-l-4 border-green-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">📄 Submit Proposals</h3>
                <p className="text-slate-600 text-sm">
                  Create detailed proposals with pricing, timeline, and capabilities.
                </p>
              </div>
              <div className="border-l-4 border-purple-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">📋 Track Proposals</h3>
                <p className="text-slate-600 text-sm">
                  Monitor status of all submitted proposals in real-time.
                </p>
              </div>
              <div className="border-l-4 border-orange-600 pl-4">
                <h3 className="text-lg font-semibold text-slate-900 mb-2">⭐ Build Reputation</h3>
                <p className="text-slate-600 text-sm">
                  Increase visibility with ratings and review from successful bids.
                </p>
              </div>
            </div>
          )}
        </div>
      </main>
    </div>
  );
}

export default function Dashboard() {
  return (
    <AuthGuard>
      <DashboardContent />
    </AuthGuard>
  );
}
