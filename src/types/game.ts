export interface Position {
  x: number;
  y: number;
}

export interface Resources {
  electricity: number;
  water: number;
  happiness: number;
  income: number;
}

export type ZoneType = 'residential' | 'commercial' | 'industrial' | 'none';
export type TerrainType = 'grass' | 'water' | 'forest';

export interface Cell {
  zone: ZoneType;
  terrain: TerrainType;
  building?: Building;
}

export interface Building {
  id: string;
  type: 'cityHall' | 'house' | 'apartment' | 'school' | 'park' | 'library' | 
        'powerPlant' | 'waterTower' | 'shop' | 'office' | 'factory' | 'hospital';
  name: string;
  cost: number;
  population: number;
  position: Position;
  resources: {
    electricityProduction?: number;
    electricityConsumption?: number;
    waterProduction?: number;
    waterConsumption?: number;
    happiness?: number;
    income?: number;
  };
  unlockRequirement?: number;
  zoneRequirement?: ZoneType;
}

export interface MathProblem {
  question: string;
  answer: number;
  difficulty: 'easy' | 'medium' | 'hard';
  points: number;
}

export interface RandomEvent {
  id: string;
  title: string;
  description: string;
  mathProblem: MathProblem;
  reward: number;
  penalty: number;
}

export interface GameState {
  points: number;
  streak: number;
  buildings: Building[];
  population: number;
  problemsSolved: number;
  dailyProblemsCompleted: number;
  activeEvent: RandomEvent | null;
  selectedBuilding: Building | null;
  selectedZone: ZoneType | null;
  resources: Resources;
  grid: Cell[][];
  taxRate: number;
}

export type Screen = 'city' | 'math';