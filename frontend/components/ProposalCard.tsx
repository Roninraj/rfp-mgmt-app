"use client";

import React, { useState } from 'react';
import { Proposal } from '@/lib/types';
import { formatCurrency, formatDate } from '@/lib/utils';

interface ProposalCardProps {
  proposal: Proposal;
  rfpId?: number;
  isRequesterOwner?: boolean;
  selected?: boolean;
  onSelect?: (proposalId: number) => void;
  onUnselect?: () => void;
}

export function ProposalCard({ proposal, rfpId, isRequesterOwner, selected, onSelect, onUnselect }: ProposalCardProps) {
  const score = proposal.score;
  const [loading, setLoading] = useState(false);

  return (
    <div className={`border rounded-lg p-6 mb-4 shadow-sm bg-white ${selected ? 'ring-2 ring-green-500 border-green-500' : 'border-gray-200'}`}>
      <div className="flex justify-between items-center mb-4">
        <h3 className="text-lg font-bold text-gray-800">{proposal.vendor.name}</h3>
        <div className="flex items-center gap-2">
          {selected && (
            <span className="bg-green-600 text-white px-2 py-1 rounded text-xs font-semibold uppercase tracking-wide">
              Selected
            </span>
          )}
          <span className="bg-gray-100 text-gray-600 px-3 py-1 rounded text-sm font-medium">
            {proposal.status || 'Submitted'}
          </span>
        </div>
      </div>

      <div className="flex flex-col gap-3">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <span className="block text-sm text-gray-500">Price</span>
            <span className="font-semibold text-gray-900">{formatCurrency(proposal.totalPrice, proposal.currency)}</span>
          </div>
          <div>
            <span className="block text-sm text-gray-500">Delivery</span>
            <span className="font-semibold text-gray-900">{proposal.deliveryDays} days</span>
          </div>
        </div>

        {proposal.warrantyMonths && (
          <div>
             <span className="block text-sm text-gray-500">Warranty</span>
             <span className="font-semibold text-gray-900">{proposal.warrantyMonths} months</span>
          </div>
        )}

        {isRequesterOwner && score && (
          <div className="bg-gray-50 p-4 rounded mt-2">
            <h4 className="text-sm font-bold text-gray-700 mb-2 uppercase tracking-wide">AI Score Analysis</h4>
            <div className="grid grid-cols-3 gap-2 mb-3 text-sm">
              <div>
                <span className="text-gray-500">Price</span>
                <div className="font-medium">{(score.priceScore * 100).toFixed(0)}%</div>
              </div>
              <div>
                <span className="text-gray-500">Delivery</span>
                <div className="font-medium">{(score.deliveryScore * 100).toFixed(0)}%</div>
              </div>
              <div>
                <span className="text-gray-500">Warranty</span>
                <div className="font-medium">{(score.warrantyScore * 100).toFixed(0)}%</div>
              </div>
            </div>
            <div className="flex justify-between items-center border-t pt-2 border-gray-200">
              <span className="font-bold text-gray-700">Overall Score</span>
              <span className={`text-lg font-bold ${score.overallScore > 0.8 ? 'text-green-600' : score.overallScore > 0.5 ? 'text-yellow-600' : 'text-red-600'}`}>
                {(score.overallScore * 100).toFixed(1)}%
              </span>
            </div>
            {score.explanation && (
              <div className="mt-3 text-sm text-gray-700 border-t border-gray-100 pt-3">
                <p className="font-semibold mb-1">AI Explanation:</p>
                <p>{score.explanation}</p>
              </div>
            )}
          </div>
        )}

        {isRequesterOwner && !selected && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={async () => {
                if (!onSelect) return;
                try {
                  setLoading(true);
                  await onSelect(proposal.id);
                } catch (err) {
                  console.error('Select action failed', err);
                } finally {
                  setLoading(false);
                }
              }}
              aria-label={`Select proposal ${proposal.id}`}
              disabled={loading}
              className={`px-4 py-2 rounded text-sm font-semibold text-white transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-blue-500 ${
                loading ? 'bg-gray-400 cursor-wait' : 'bg-blue-600 hover:bg-blue-700'
              }`}
            >
              {loading ? 'Selecting...' : 'Select Proposal'}
            </button>
          </div>
        )}

        {isRequesterOwner && selected && (
          <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
            <button
              onClick={async () => {
                if (!onUnselect) return;
                try {
                  setLoading(true);
                  await onUnselect();
                } catch (err) {
                  console.error('Unselect action failed', err);
                } finally {
                  setLoading(false);
                }
              }}
              disabled={loading}
              className={`px-4 py-2 rounded text-sm font-semibold text-red-600 border border-red-200 hover:bg-red-50 transition-colors focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-red-500 ${
                loading ? 'opacity-50 cursor-wait' : ''
              }`}
            >
              {loading ? 'Processing...' : 'Unselect Proposal'}
            </button>
          </div>
        )}
      </div>
    </div>
  );
}