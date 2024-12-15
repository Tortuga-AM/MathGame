import React, { useState } from 'react';

interface MathProblemProps {
  question: string;
  onAnswer: (answer: number) => void;
}

export default function MathProblem({ question, onAnswer }: MathProblemProps) {
  const [userAnswer, setUserAnswer] = useState('');

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    onAnswer(Number(userAnswer));
    setUserAnswer('');
  };

  return (
    <div className="bg-white p-6 rounded-lg shadow-lg">
      <h3 className="text-xl font-bold text-gray-800 mb-4">Solve to Build!</h3>
      <p className="text-2xl font-semibold text-gray-700 mb-6">{question}</p>
      <form onSubmit={handleSubmit} className="space-y-4">
        <input
          type="number"
          value={userAnswer}
          onChange={(e) => setUserAnswer(e.target.value)}
          className="w-full px-4 py-2 border border-gray-300 rounded-md focus:ring-2 focus:ring-blue-500 focus:border-blue-500"
          placeholder="Enter your answer"
          step="any"
          required
        />
        <button
          type="submit"
          className="w-full bg-blue-600 text-white py-2 px-4 rounded-md hover:bg-blue-700 transition-colors"
        >
          Submit Answer
        </button>
      </form>
    </div>
  );
}