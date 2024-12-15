import React from 'react';
import { Building, GameState } from '../../types/game';
import { AVAILABLE_BUILDINGS } from '../../utils/buildings';
import CityGrid from '../CityGrid';
import GameStats from '../GameStats';
import RandomEventModal from '../RandomEventModal';
import BuildingShop from '../BuildingShop';

interface CityScreenProps {
  gameState: GameState;
  onUpdateGameState: (newState: Partial<GameState>) => void;
  onSwitchScreen: () => void;
}

export default function CityScreen({ gameState, onUpdateGameState, onSwitchScreen }: CityScreenProps) {
  const handleBuildingSelect = (building: Omit<Building, 'id' | 'position'>) => {
    if (gameState.points >= building.cost) {
      onUpdateGameState({
        selectedBuilding: {
          ...building,
          id: Math.random().toString(36).substr(2, 9),
          position: { x: -1, y: -1 }
        }
      });
    } else {
      alert('Not enough points to purchase this building!');
    }
  };

  const handleCellClick = (x: number, y: number) => {
    if (gameState.selectedBuilding) {
      const newBuilding = {
        ...gameState.selectedBuilding,
        position: { x, y }
      };
      
      onUpdateGameState({
        buildings: [...gameState.buildings, newBuilding],
        points: gameState.points - newBuilding.cost,
        population: gameState.population + newBuilding.population,
        selectedBuilding: null
      });
    }
  };

  return (
    <div className="container mx-auto px-4 py-8">
      <GameStats
        points={gameState.points}
        streak={gameState.streak}
        population={gameState.population}
      />

      <div className="flex justify-between items-center mb-6">
        <h2 className="text-2xl font-bold text-gray-800">Your City</h2>
        <button
          onClick={onSwitchScreen}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Solve Math Problems
        </button>
      </div>

      <div className="grid lg:grid-cols-3 gap-8">
        <div className="lg:col-span-2">
          <CityGrid
            buildings={gameState.buildings}
            selectedBuilding={gameState.selectedBuilding}
            onCellClick={handleCellClick}
          />
        </div>
        <div>
          <BuildingShop
            availableBuildings={AVAILABLE_BUILDINGS}
            points={gameState.points}
            onSelectBuilding={handleBuildingSelect}
          />
        </div>
      </div>

      {gameState.activeEvent && (
        <RandomEventModal
          event={gameState.activeEvent}
          onSolve={(correct) => {
            onUpdateGameState({
              points: gameState.points + (correct ? gameState.activeEvent!.reward : gameState.activeEvent!.penalty),
              activeEvent: null
            });
          }}
        />
      )}
    </div>
  );
}