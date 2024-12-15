import React from 'react';
import { ZoneType } from '../types/game';

interface ZoningToolsProps {
  selectedZone: ZoneType | null;
  onZoneSelect: (zone: ZoneType | null) => void;
}

export default function ZoningTools({ selectedZone, onZoneSelect }: ZoningToolsProps) {
  const zones: { type: ZoneType; name: string; color: string }[] = [
    { type: 'residential', name: 'Residential', color: 'bg-green-500' },
    { type: 'commercial', name: 'Commercial', color: 'bg-blue-500' },
    { type: 'industrial', name: 'Industrial', color: 'bg-yellow-500' }
  ];

  return (
    <div className="bg-white rounded-lg shadow-lg p-4 mb-6">
      <h3 className="text-lg font-bold text-gray-800 mb-4">Zoning Tools</h3>
      <div className="flex space-x-2">
        {zones.map((zone) => (
          <button
            key={zone.type}
            onClick={() => onZoneSelect(selectedZone === zone.type ? null : zone.type)}
            className={`
              flex-1 px-3 py-2 rounded-md text-sm font-medium
              ${selectedZone === zone.type
                ? `${zone.color} text-white`
                : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
              }
            `}
          >
            {zone.name}
          </button>
        ))}
      </div>
    </div>
  );
}