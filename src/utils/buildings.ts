import { Building, ZoneType } from '../types/game';

export const AVAILABLE_BUILDINGS: Omit<Building, 'id' | 'position'>[] = [
  {
    type: 'house',
    name: 'House',
    cost: 20,
    population: 5,
    resources: {
      electricityConsumption: 1,
      waterConsumption: 1,
      happiness: 2,
      income: 2
    },
    zoneRequirement: 'residential'
  },
  {
    type: 'apartment',
    name: 'Apartment Complex',
    cost: 50,
    population: 20,
    resources: {
      electricityConsumption: 3,
      waterConsumption: 3,
      happiness: 1,
      income: 8
    },
    zoneRequirement: 'residential'
  },
  {
    type: 'shop',
    name: 'Shop',
    cost: 30,
    population: 0,
    resources: {
      electricityConsumption: 2,
      waterConsumption: 1,
      happiness: 3,
      income: 5
    },
    zoneRequirement: 'commercial'
  },
  {
    type: 'office',
    name: 'Office Building',
    cost: 60,
    population: 0,
    resources: {
      electricityConsumption: 4,
      waterConsumption: 2,
      happiness: 1,
      income: 12
    },
    zoneRequirement: 'commercial'
  },
  {
    type: 'factory',
    name: 'Factory',
    cost: 80,
    population: 0,
    resources: {
      electricityConsumption: 6,
      waterConsumption: 4,
      happiness: -2,
      income: 15
    },
    zoneRequirement: 'industrial'
  },
  {
    type: 'powerPlant',
    name: 'Power Plant',
    cost: 100,
    population: 0,
    resources: {
      electricityProduction: 20,
      waterConsumption: 5,
      happiness: -1,
      income: -5
    }
  },
  {
    type: 'waterTower',
    name: 'Water Tower',
    cost: 70,
    population: 0,
    resources: {
      electricityConsumption: 2,
      waterProduction: 15,
      income: -3
    }
  },
  {
    type: 'hospital',
    name: 'Hospital',
    cost: 150,
    population: 0,
    resources: {
      electricityConsumption: 5,
      waterConsumption: 4,
      happiness: 5,
      income: -8
    }
  },
  {
    type: 'school',
    name: 'School',
    cost: 50,
    population: 0,
    resources: {
      electricityConsumption: 3,
      waterConsumption: 2,
      happiness: 4,
      income: -5
    },
    unlockRequirement: 3
  },
  {
    type: 'park',
    name: 'Park',
    cost: 30,
    population: 0,
    resources: {
      waterConsumption: 1,
      happiness: 5,
      income: -2
    }
  },
  {
    type: 'library',
    name: 'Library',
    cost: 40,
    population: 0,
    resources: {
      electricityConsumption: 2,
      waterConsumption: 1,
      happiness: 3,
      income: -3
    },
    unlockRequirement: 5
  }
];