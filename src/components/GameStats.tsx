import React from 'react';
import { Trophy, Users, Flame } from 'lucide-react';

interface GameStatsProps {
  points: number;
  streak: number;
  population: number;
}

export default function GameStats({ points, streak, population }: GameStatsProps) {
  return (
    <div className="grid grid-cols-3 gap-4 mb-6">
      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-3">
        <Trophy className="w-6 h-6 text-yellow-500" />
        <div>
          <p className="text-sm text-gray-500">Points</p>
          <p className="text-xl font-bold">{points}</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-3">
        <Flame className="w-6 h-6 text-orange-500" />
        <div>
          <p className="text-sm text-gray-500">Streak</p>
          <p className="text-xl font-bold">{streak} days</p>
        </div>
      </div>
      <div className="bg-white p-4 rounded-lg shadow flex items-center space-x-3">
        <Users className="w-6 h-6 text-blue-500" />
        <div>
          <p className="text-sm text-gray-500">Population</p>
          <p className="text-xl font-bold">{population}</p>
        </div>
      </div>
    </div>
  );
}