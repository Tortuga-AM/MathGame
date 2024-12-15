import React, { useState } from 'react';
import { GameState, Screen } from './types/game';
import CityScreen from './components/screens/CityScreen';
import MathScreen from './components/screens/MathScreen';

function App() {
  const [currentScreen, setCurrentScreen] = useState<Screen>('city');
  const [gameState, setGameState] = useState<GameState>({
    points: 0,
    streak: 0,
    buildings: [],
    population: 0,
    problemsSolved: 0,
    dailyProblemsCompleted: 0,
    activeEvent: null,
    selectedBuilding: null
  });

  const handleUpdateGameState = (newState: Partial<GameState>) => {
    setGameState(prev => ({ ...prev, ...newState }));
  };

  return (
    <div className="min-h-screen bg-gradient-to-b from-blue-50 to-blue-100">
      <header className="text-center py-8">
        <h1 className="text-4xl font-bold text-gray-800 mb-2">MathCity Builder</h1>
        <p className="text-gray-600">Build your city by solving math problems!</p>
      </header>

      {currentScreen === 'city' ? (
        <CityScreen
          gameState={gameState}
          onUpdateGameState={handleUpdateGameState}
          onSwitchScreen={() => setCurrentScreen('math')}
        />
      ) : (
        <MathScreen
          gameState={gameState}
          onUpdateGameState={handleUpdateGameState}
          onSwitchScreen={() => setCurrentScreen('city')}
        />
      )}
    </div>
  );
}

export default App;