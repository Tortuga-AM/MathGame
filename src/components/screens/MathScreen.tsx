import React from 'react';
import { GameState } from '../../types/game';
import MathProblem from '../MathProblem';
import GameStats from '../GameStats';
import { generateMathProblem } from '../../utils/mathProblems';
import { generateRandomEvent } from '../../utils/events';

interface MathScreenProps {
  gameState: GameState;
  onUpdateGameState: (newState: Partial<GameState>) => void;
  onSwitchScreen: () => void;
}

export default function MathScreen({ gameState, onUpdateGameState, onSwitchScreen }: MathScreenProps) {
  const [currentProblem, setCurrentProblem] = React.useState(generateMathProblem());

  const handleAnswer = (answer: number) => {
    if (answer === currentProblem.answer) {
      const newState: Partial<GameState> = {
        points: gameState.points + 10,
        problemsSolved: gameState.problemsSolved + 1,
        dailyProblemsCompleted: gameState.dailyProblemsCompleted + 1
      };

      // Random chance for event
      if (Math.random() < 0.3) {
        newState.activeEvent = generateRandomEvent();
      }

      onUpdateGameState(newState);
      setCurrentProblem(generateMathProblem());
    } else {
      alert('Try again! That\'s not quite right.');
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
        <h2 className="text-2xl font-bold text-gray-800">Math Problems</h2>
        <button
          onClick={onSwitchScreen}
          className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
        >
          Return to City
        </button>
      </div>

      <div className="max-w-2xl mx-auto">
        <MathProblem
          question={currentProblem.question}
          onAnswer={handleAnswer}
        />
        
        <div className="mt-4 bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold text-gray-700 mb-2">Daily Progress</h3>
          <div className="flex justify-between items-center">
            <div className="space-y-1">
              {Array(5).fill(null).map((_, i) => (
                <div
                  key={i}
                  className={`w-12 h-2 rounded ${
                    i < gameState.dailyProblemsCompleted
                      ? 'bg-green-500'
                      : 'bg-gray-200'
                  }`}
                />
              ))}
            </div>
            <span className="text-sm text-gray-600">
              {gameState.dailyProblemsCompleted}/5 problems solved
            </span>
          </div>
        </div>
      </div>
    </div>
  );
}