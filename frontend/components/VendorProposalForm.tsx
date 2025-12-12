'use client';

import { useState } from 'react';
import { proposalApi } from '@/lib/api';

interface VendorProposalFormProps {
  rfpId: number;
  onCreated: () => void;
}

export function VendorProposalForm({ rfpId, onCreated }: VendorProposalFormProps) {
  const [formData, setFormData] = useState({
    totalPrice: '',
    currency: 'USD',
    deliveryDays: '',
    warrantyMonths: '',
    paymentTermsText: '',
  });
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState('');

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLSelectElement | HTMLTextAreaElement>) => {
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
      await proposalApi.create(rfpId, {
        totalPrice: Number(formData.totalPrice),
        currency: formData.currency,
        deliveryDays: Number(formData.deliveryDays),
        warrantyMonths: formData.warrantyMonths ? Number(formData.warrantyMonths) : undefined,
        paymentTermsText: formData.paymentTermsText,
      });
      
      // Reset form
      setFormData({
        totalPrice: '',
        currency: 'USD',
        deliveryDays: '',
        warrantyMonths: '',
        paymentTermsText: '',
      });
      
      onCreated();
    } catch (err: any) {
      console.error('Proposal submit error', err);
      setError(err.message || 'Failed to submit proposal');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-md mt-6 border border-gray-200">
      <h3 className="text-xl font-semibold mb-4 text-gray-800">Submit a Proposal</h3>
      
      {error && (
        <div className="bg-red-100 text-red-700 p-3 rounded mb-4 text-sm">
          {error}
        </div>
      )}

      <form onSubmit={handleSubmit} className="space-y-4">
        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Total Price *</label>
            <input
              type="number"
              name="totalPrice"
              value={formData.totalPrice}
              onChange={handleChange}
              required
              min="0"
              step="0.01"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Currency</label>
            <select
              name="currency"
              value={formData.currency}
              onChange={handleChange}
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            >
              <option value="USD">USD ($)</option>
              <option value="EUR">EUR (€)</option>
              <option value="INR">INR (₹)</option>
            </select>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Delivery Days *</label>
            <input
              type="number"
              name="deliveryDays"
              value={formData.deliveryDays}
              onChange={handleChange}
              required
              min="0"
              placeholder="e.g. 15"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>

          <div>
            <label className="block text-gray-700 text-sm font-bold mb-2">Warranty (Months)</label>
            <input
              type="number"
              name="warrantyMonths"
              value={formData.warrantyMonths}
              onChange={handleChange}
              min="0"
              placeholder="e.g. 12"
              className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
          </div>
        </div>

        <div>
          <label className="block text-gray-700 text-sm font-bold mb-2">Payment Terms</label>
          <textarea
            name="paymentTermsText"
            value={formData.paymentTermsText}
            onChange={handleChange}
            rows={3}
            placeholder="e.g. 50% advance, 50% on delivery"
            className="shadow-sm appearance-none border rounded w-full py-2 px-3 text-gray-700 leading-tight focus:outline-none focus:ring-2 focus:ring-blue-500"
          />
        </div>

        <div className="flex justify-end">
          <button
            type="submit"
            disabled={loading}
            className={`font-bold py-2 px-6 rounded focus:outline-none focus:shadow-outline transition duration-150 ease-in-out ${
              loading
                ? 'bg-gray-400 cursor-not-allowed text-gray-800'
                : 'bg-blue-600 hover:bg-blue-700 text-white'
            }`}
          >
            {loading ? 'Submitting...' : 'Submit Proposal'}
          </button>
        </div>
      </form>
    </div>
  );
}
