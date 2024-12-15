import React from 'react';
import { Building, Cell, ZoneType } from '../types/game';
import { BuildingIcon } from './BuildingIcon';

interface CityGridProps {
  grid: Cell[][];
  selectedBuilding: Building | null;
  selectedZone: ZoneType | null;
  onCellClick: (x: number, y: number) => void;
}

export default function CityGrid({ grid, selectedBuilding, selectedZone, onCellClick }: CityGridProps) {
  const getZoneColor = (zone: ZoneType) => {
    switch (zone) {
      case 'residential': return 'bg-green-200';
      case 'commercial': return 'bg-blue-200';
      case 'industrial': return 'bg-yellow-200';
      default: return '';
    }
  };

  const getTerrainColor = (terrain: Cell['terrain']) => {
    switch (terrain) {
      case 'grass': return 'bg-green-100';
      case 'water': return 'bg-blue-100';
      case 'forest': return 'bg-green-300';
      default: return '';
    }
  };

  return (
    <div className="grid grid-cols-10 gap-1 p-4 bg-gradient-to-b from-sky-100 to-sky-50 rounded-lg">
      {grid.map((row, y) =>
        row.map((cell, x) => {
          const isOccupied = !!cell.building;
          const zoneColor = getZoneColor(cell.zone);
          const terrainColor = getTerrainColor(cell.terrain);

          return (
            <div
              key={`${x}-${y}`}
              onClick={() => !isOccupied && onCellClick(x, y)}
              className={`
                aspect-square flex flex-col items-center justify-center p-2
                ${isOccupied ? 'bg-white' : `${terrainColor} ${zoneColor} hover:brightness-90 cursor-pointer`}
                rounded-lg shadow-sm hover:shadow transition-all
                ${cell.terrain === 'water' ? 'cursor-not-allowed' : ''}
              `}
            >
              {cell.building && (
                <>
                  <BuildingIcon type={cell.building.type} />
                  <span className="mt-1 text-xs font-medium text-gray-600 truncate">
                    {cell.building.name}
                  </span>
                </>
              )}
            </div>
          );
        })
      )}
    </div>
  );
}