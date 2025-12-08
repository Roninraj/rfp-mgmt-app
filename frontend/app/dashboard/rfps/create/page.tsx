'use client';

import { AuthGuard } from '@/components/AuthGuard';
import { RFPForm } from '@/components/RFPForm';

export default function CreateRFPPage() {
  return (
    <AuthGuard>
      <div style={styles.container}>
        <h1>Create New RFP</h1>
        <RFPForm />
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
};