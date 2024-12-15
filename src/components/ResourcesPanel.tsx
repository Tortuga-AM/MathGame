import React from 'react';
import { Resources } from '../types/game';
import { Zap, Droplets, Heart, Coins } from 'lucide-react';

interface ResourcesPanelProps {
  resources: Resources;
  taxRate: number;
  onTaxRateChange: (rate: number) => void;
}

export default function ResourcesPanel({ resources, taxRate, onTaxRateChange }: ResourcesPanelProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">City Resources</h3>
      <div className="grid grid-cols-2 gap-4">
        <div className="flex items-center space-x-2">
          <Zap className="w-5 h-5 text-yellow-500" />
          <div>
            <p className="text-sm text-gray-500">Electricity</p>
            <p className="text-lg font-semibold">{resources.electricity}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Droplets className="w-5 h-5 text-blue-500" />
          <div>
            <p className="text-sm text-gray-500">Water</p>
            <p className="text-lg font-semibold">{resources.water}</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Heart className="w-5 h-5 text-red-500" />
          <div>
            <p className="text-sm text-gray-500">Happiness</p>
            <p className="text-lg font-semibold">{resources.happiness}%</p>
          </div>
        </div>
        <div className="flex items-center space-x-2">
          <Coins className="w-5 h-5 text-green-500" />
          <div>
            <p className="text-sm text-gray-500">Income</p>
            <p className="text-lg font-semibold">${resources.income}/day</p>
          </div>
        </div>
      </div>
      
      <div className="mt-4 pt-4 border-t">
        <label className="block text-sm font-medium text-gray-700">
          Tax Rate: {taxRate}%
        </label>
        <input
          type="range"
          min="5"
          max="20"
          value={taxRate}
          onChange={(e) => onTaxRateChange(Number(e.target.value))}
          className="w-full mt-2"
        />
        <p className="text-xs text-gray-500 mt-1">
          Higher taxes increase income but decrease happiness
        </p>
      </div>
    </div>
  );
}