'use client';

import { useState } from 'react';
import { rfpApi } from '@/lib/api';
import { useRouter } from 'next/navigation';

interface RFPFormProps {
  onSuccess?: () => void;
  isEditing?: boolean;
  initialData?: any;
}

export function RFPForm({ onSuccess, isEditing, initialData }: RFPFormProps) {
  const router = useRouter();
  const [formData, setFormData] = useState({
    title: initialData?.title || '',
    descriptionRaw: initialData?.descriptionRaw || '',
    budget: initialData?.budget || '',
    currency: initialData?.currency || 'USD',
    deliveryBy: initialData?.deliveryBy || '',
    paymentTerms: initialData?.paymentTerms || '',
  });
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);
    setError('');

    try {
      if (isEditing && initialData?.id) {
        await rfpApi.update(initialData.id, formData);
      } else {
        await rfpApi.create(formData);
      }
      onSuccess?.();
      router.push('/dashboard/rfps');
    } catch (err: any) {
      setError(err.message || 'Failed to save RFP');
    } finally {
      setLoading(false);
    }
  };

  return (
    <form onSubmit={handleSubmit} style={styles.form}>
      {error && <div style={styles.error}>{error}</div>}

      <div style={styles.formGroup}>
        <label>Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          style={styles.input}
        />
      </div>

      <div style={styles.formGroup}>
        <label>Description *</label>
        <textarea
          name="descriptionRaw"
          value={formData.descriptionRaw}
          onChange={handleChange}
          required
          rows={6}
          style={styles.textarea}
        />
      </div>

      <div style={styles.row}>
        <div style={styles.formGroup}>
          <label>Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Currency</label>
          <select name="currency" value={formData.currency} onChange={handleChange} style={styles.input}>
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      <div style={styles.row}>
        <div style={styles.formGroup}>
          <label>Delivery By</label>
          <input
            type="date"
            name="deliveryBy"
            value={formData.deliveryBy}
            onChange={handleChange}
            style={styles.input}
          />
        </div>

        <div style={styles.formGroup}>
          <label>Payment Terms</label>
          <input
            type="text"
            name="paymentTerms"
            value={formData.paymentTerms}
            onChange={handleChange}
            placeholder="e.g., Net 30"
            style={styles.input}
          />
        </div>
      </div>

      <button type="submit" disabled={loading} style={styles.button}>
        {loading ? 'Saving...' : isEditing ? 'Update RFP' : 'Create RFP'}
      </button>
    </form>
  );
}

const styles = {
  form: {
    maxWidth: '600px',
    margin: '2rem auto',
    padding: '2rem',
    border: '1px solid #ecf0f1',
    borderRadius: '8px',
  },
  error: {
    background: '#ffe0e0',
    color: '#c0392b',
    padding: '1rem',
    borderRadius: '4px',
    marginBottom: '1rem',
  },
  formGroup: {
    marginBottom: '1.5rem',
  },
  row: {
    display: 'grid',
    gridTemplateColumns: '1fr 1fr',
    gap: '1rem',
  },
  input: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #bdc3c7',
    borderRadius: '4px',
    fontSize: '1rem',
    boxSizing: 'border-box' as const,
  },
  textarea: {
    width: '100%',
    padding: '0.75rem',
    border: '1px solid #bdc3c7',
    borderRadius: '4px',
    fontSize: '1rem',
    fontFamily: 'inherit',
    boxSizing: 'border-box' as const,
  },
  button: {
    width: '100%',
    padding: '0.75rem',
    background: '#3498db',
    color: 'white',
    border: 'none',
    borderRadius: '4px',
    fontSize: '1rem',
    cursor: 'pointer',
  },
};