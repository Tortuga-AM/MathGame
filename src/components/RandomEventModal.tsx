import React, { useState } from 'react';
import { RandomEvent } from '../types/game';

interface RandomEventModalProps {
  event: RandomEvent;
  onSolve: (correct: boolean) => void;
}

export default function RandomEventModal({ event, onSolve }: RandomEventModalProps) {
  const [answer, setAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    const correct = Number(answer) === event.mathProblem.answer;
    onSolve(correct);
  };

  return (
    <div className="fixed inset-0 bg-black bg-opacity-50 flex items-center justify-center p-4">
      <div className="bg-white rounded-lg shadow-xl max-w-md w-full p-6">
        <h3 className="text-2xl font-bold text-gray-800 mb-2">{event.title}</h3>
        <p className="text-gray-600 mb-4">{event.description}</p>
        
        <div className="bg-blue-50 p-4 rounded-lg mb-4">
          <p className="text-sm text-blue-800">
            Solve correctly: +{event.reward} points<br />
            Solve incorrectly: {event.penalty} points
          </p>
        </div>

        <div className="mb-4">
          <p className="text-lg font-semibold">{event.mathProblem.question}</p>
        </div>

        <form onSubmit={handleSubmit} className="space-y-4">
          <input
            type="number"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
            className="w-full px-4 py-2 border rounded-md"
            placeholder="Enter your answer"
            step="any"
            required
          />
          <button
            type="submit"
            className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700"
          >
            Submit Answer
          </button>
        </form>
      </div>
    </div>
  );
}