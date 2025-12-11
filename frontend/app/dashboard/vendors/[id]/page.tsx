import Link from 'next/link';

const API_URL = process.env.NEXT_PUBLIC_API_URL || 'http://localhost:3001';

export default async function VendorPage({ params }: { params: { id: string } }) {
  const { id } = await params;

  try {
    const res = await fetch(`${API_URL}/vendors/${id}`, { cache: 'no-store' });
    if (!res.ok) {
      return (
        <div className="p-6 text-red-600">Failed to fetch vendor: {res.status} {res.statusText}</div>
      );
    }

    const vendor = await res.json();

    return (
      <div className="p-6">
        <div className="mb-4">
          <Link href="/dashboard/vendors" className="text-sm text-blue-600 hover:underline">← Back to vendors</Link>
        </div>

        <h1 className="text-2xl font-bold mb-2">{vendor.name}</h1>
        <div className="mb-4">
          <div><strong>Email:</strong> {vendor.email}</div>
          {vendor.contactPerson && <div><strong>Contact:</strong> {vendor.contactPerson}</div>}
          {vendor.notes && <div className="mt-2 whitespace-pre-wrap">{vendor.notes}</div>}
        </div>

        <div>
          <h2 className="text-lg font-semibold mb-2">Proposals</h2>
          <p className="text-sm text-slate-600">This vendor has {vendor.proposals?.length ?? 0} proposal{vendor.proposals && vendor.proposals.length !== 1 ? 's' : ''}.</p>
          <div className="mt-2">
            <Link href={`/dashboard/proposals/vendor/${vendor.id}`} className="inline-block rounded-md bg-blue-600 px-3 py-1 text-sm text-white hover:bg-blue-700">Open Vendor Proposals</Link>
          </div>
        </div>
      </div>
    );
  } catch (err: any) {
    return <div className="p-6 text-red-600">Error loading vendor: {String(err)}</div>;
  }
}
