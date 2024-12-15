import { Building } from '../types/game';
import {
  Building2,
  Home,
  School,
  Trees,
  Library,
  Factory,
  Building as B1,
  ShoppingBag,
  Office,
  Hospital,
  Zap,
  Droplets,
} from 'lucide-react';

interface BuildingIconProps {
  type: Building['type'];
}

export function BuildingIcon({ type }: BuildingIconProps) {
  switch (type) {
    case 'cityHall':
      return <Building2 className="w-6 h-6 text-purple-600" />;
    case 'house':
      return <Home className="w-6 h-6 text-blue-500" />;
    case 'apartment':
      return <B1 className="w-6 h-6 text-blue-600" />;
    case 'school':
      return <School className="w-6 h-6 text-red-500" />;
    case 'park':
      return <Trees className="w-6 h-6 text-green-500" />;
    case 'library':
      return <Library className="w-6 h-6 text-yellow-600" />;
    case 'shop':
      return <ShoppingBag className="w-6 h-6 text-pink-500" />;
    case 'office':
      return <Office className="w-6 h-6 text-gray-600" />;
    case 'factory':
      return <Factory className="w-6 h-6 text-orange-500" />;
    case 'hospital':
      return <Hospital className="w-6 h-6 text-red-600" />;
    case 'powerPlant':
      return <Zap className="w-6 h-6 text-yellow-500" />;
    case 'waterTower':
      return <Droplets className="w-6 h-6 text-blue-500" />;
    default:
      return null;
  }
}
