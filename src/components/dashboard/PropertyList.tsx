import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Building } from 'lucide-react';

type Property = {
  id: number;
  name: string;
  address: string;
  units: number;
  occupancy: number;
  status: 'Occupied' | 'Partially Occupied' | 'Vacant';
};

type PropertyListProps = {
  properties: Property[];
};

const PropertyList = ({ properties }: PropertyListProps) => {
  const getStatusVariant = (status: Property['status']) => {
    switch (status) {
      case 'Occupied':
        return 'success';
      case 'Partially Occupied':
        return 'warning';
      case 'Vacant':
        return 'error';
      default:
        return 'default';
    }
  };

  const getOccupancyPercentage = (occupancy: number, units: number) => {
    return Math.round((occupancy / units) * 100);
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Properties</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {properties.map((property) => (
            <div 
              key={property.id}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary mr-4">
                <Building size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{property.name}</h4>
                <p className="text-xs text-gray-500 truncate">{property.address}</p>
              </div>
              
              <div className="flex flex-col items-end">
                <Badge variant={getStatusVariant(property.status)}>
                  {property.status}
                </Badge>
                <span className="text-xs text-gray-500 mt-1">
                  {property.occupancy}/{property.units} units ({getOccupancyPercentage(property.occupancy, property.units)}%)
                </span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default PropertyList;