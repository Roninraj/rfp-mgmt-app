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
    <form onSubmit={handleSubmit} className="max-w-md mx-auto mt-8 p-6 border rounded-lg shadow-lg bg-white">
      {error && <div className="bg-red-100 text-red-700 p-3 rounded mb-4">{error}</div>}

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Title *</label>
        <input
          type="text"
          name="title"
          value={formData.title}
          onChange={handleChange}
          required
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="mb-4">
        <label className="block text-gray-700 text-sm font-bold mb-2">Description *</label>
        <textarea
          name="descriptionRaw"
          value={formData.descriptionRaw}
          onChange={handleChange}
          required
          rows={6}
          className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
        />
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-4">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Budget</label>
          <input
            type="number"
            name="budget"
            value={formData.budget}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Currency</label>
          <select name="currency" value={formData.currency} onChange={handleChange} className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline">
            <option>USD</option>
            <option>INR</option>
            <option>EUR</option>
          </select>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-6">
        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Delivery By</label>
          <input
            type="date"
            name="deliveryBy"
            value={formData.deliveryBy}
            onChange={handleChange}
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>

        <div className="mb-4">
          <label className="block text-gray-700 text-sm font-bold mb-2">Payment Terms</label>
          <input
            type="text"
            name="paymentTerms"
            value={formData.paymentTerms}
            onChange={handleChange}
            placeholder="e.g., Net 30"
            className="shadow appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:shadow-outline"
          />
        </div>
      </div>

      <button type="submit" disabled={loading} className="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline">
        {loading ? 'Saving...' : isEditing ? 'Update RFP' : 'Create RFP'}
      </button>
    </form>
  );
}