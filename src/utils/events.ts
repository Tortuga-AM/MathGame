import { RandomEvent } from '../types/game';
import { generateMathProblem } from './mathProblems';

const EVENT_TEMPLATES = [
  {
    title: 'Storm Warning!',
    description: 'A storm is approaching! Solve this math problem to prepare emergency services.',
    reward: 20,
    penalty: -10
  },
  {
    title: 'Population Boom',
    description: 'New families want to move in! Solve this problem to accommodate them.',
    reward: 15,
    penalty: -5
  },
  {
    title: 'Budget Crisis',
    description: 'The city needs to balance its budget! Help by solving this financial problem.',
    reward: 25,
    penalty: -15
  }
];

export const generateRandomEvent = (): RandomEvent => {
  const template = EVENT_TEMPLATES[Math.floor(Math.random() * EVENT_TEMPLATES.length)];
  return {
    id: Math.random().toString(36).substr(2, 9),
    ...template,
    mathProblem: generateMathProblem()
  };
};