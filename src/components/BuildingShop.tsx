import React from 'react';
import { Building } from '../types/game';
import { BuildingIcon } from './BuildingIcon';

interface BuildingShopProps {
  availableBuildings: Omit<Building, 'id' | 'position'>[];
  points: number;
  onSelectBuilding: (building: Omit<Building, 'id' | 'position'>) => void;
}

export default function BuildingShop({ availableBuildings, points, onSelectBuilding }: BuildingShopProps) {
  return (
    <div className="bg-white rounded-lg shadow-lg p-4">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Building Shop</h3>
      <div className="space-y-4">
        {availableBuildings.map((building) => (
          <button
            key={building.type}
            onClick={() => onSelectBuilding(building)}
            disabled={points < building.cost}
            className={`w-full p-4 rounded-lg border-2 flex items-center space-x-4 ${
              points >= building.cost
                ? 'border-blue-500 hover:bg-blue-50'
                : 'border-gray-200 opacity-50 cursor-not-allowed'
            }`}
          >
            <BuildingIcon type={building.type} />
            <div className="flex-1 text-left">
              <h4 className="font-semibold">{building.name}</h4>
              <p className="text-sm text-gray-600">Cost: {building.cost} points</p>
              {building.population > 0 && (
                <p className="text-sm text-gray-600">+{building.population} population</p>
              )}
            </div>
          </button>
        ))}
      </div>
    </div>
  );
}