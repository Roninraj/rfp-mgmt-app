import type { Metadata } from 'next';
import { Navbar } from '@/components/Navbar';
import './globals.css';

export const metadata: Metadata = {
  title: 'RFP Management System',
  description: 'Request for Proposal Management Platform',
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en">
      <body>
        <Navbar />
        <main className="min-h-screen bg-slate-50">
          {children}
        </main>
      </body>
    </html>
  );
}
