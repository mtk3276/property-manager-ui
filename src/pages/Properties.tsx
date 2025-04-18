import React, { useState } from 'react';
import { Card, CardContent } from '../components/ui/Card';
import Button from '../components/ui/Button';
import Badge from '../components/ui/Badge';
import { Plus, Search, Filter, Building, MapPin, ChevronDown, LayoutGrid, List } from 'lucide-react';
import { properties } from '../data/mockData';

const Properties = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [viewMode, setViewMode] = useState<'list' | 'grid'>('list');
  
  const filteredProperties = properties.filter(property => 
    property.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
    property.address.toLowerCase().includes(searchTerm.toLowerCase())
  );

  const getStatusVariant = (status: typeof properties[0]['status']) => {
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

  return (
    <div className="space-y-6">
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-gray-900">Properties</h1>
          <p className="text-gray-500">Manage your property portfolio</p>
        </div>
        <Button className="flex items-center gap-2">
          <Plus size={16} />
          <span>Add Property</span>
        </Button>
      </div>
      
      <div className="flex flex-col sm:flex-row gap-4">
        <div className="relative flex-1">
          <div className="absolute inset-y-0 left-0 pl-3 flex items-center pointer-events-none">
            <Search size={18} className="text-gray-400" />
          </div>
          <input
            type="text"
            className="block w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-primary focus:border-primary"
            placeholder="Search properties..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
          />
        </div>
        <div className="flex gap-2">
          <div className="flex border border-gray-300 rounded-md overflow-hidden">
            <button 
              className={`p-2 ${viewMode === 'list' ? 'bg-gray-100 text-primary' : 'bg-white text-gray-500'}`}
              onClick={() => setViewMode('list')}
              title="List view"
            >
              <List size={20} />
            </button>
            <button 
              className={`p-2 ${viewMode === 'grid' ? 'bg-gray-100 text-primary' : 'bg-white text-gray-500'}`}
              onClick={() => setViewMode('grid')}
              title="Grid view"
            >
              <LayoutGrid size={20} />
            </button>
          </div>
          <Button variant="outline" className="flex items-center gap-2">
            <Filter size={16} />
            <span>Filter</span>
          </Button>
        </div>
      </div>
      
      {viewMode === 'list' ? (
        <div className="bg-white rounded-lg shadow-sm border border-gray-200">
          <div className="hidden md:flex px-6 py-3 text-sm font-medium text-gray-500 border-b border-gray-200">
            <div className="flex-1">
              <button className="flex items-center">
                Property <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="w-32 text-center">
              <button className="flex items-center">
                Status <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="w-48 text-center">
              <button className="flex items-center">
                Occupancy <ChevronDown size={14} className="ml-1" />
              </button>
            </div>
            <div className="w-32"></div>
          </div>
        
          <div className="divide-y divide-gray-200">
            {filteredProperties.map((property) => (
              <div key={property.id} className="hover:bg-gray-50 transition-colors">
                <div className="flex flex-col md:flex-row md:items-center p-4">
                  <div className="flex-1">
                    <div>
                      <h3 className="text-lg font-medium text-gray-900">{property.name}</h3>
                      <div className="flex items-center text-gray-600 text-sm">
                        <MapPin size={14} className="mr-1" />
                        <span>{property.address}</span>
                      </div>
                    </div>
                  </div>
                  
                  <div className="mt-2 md:mt-0 md:w-32 md:text-center">
                    <Badge variant={getStatusVariant(property.status)}>
                      {property.status}
                    </Badge>
                  </div>
                  
                  <div className="mt-2 md:mt-0 md:w-48 md:text-center flex md:block items-center justify-between">
                    <div className="flex items-center text-sm text-gray-500 mr-4 md:mr-0 md:justify-center md:mb-1">
                      <Building size={16} className="mr-1" />
                      <span>{property.units} Units</span>
                    </div>
                    <div className="text-sm font-medium">
                      {Math.round((property.occupancy / property.units) * 100)}% Occupied
                    </div>
                  </div>
                  
                  <div className="flex justify-end mt-3 md:mt-0 md:w-32">
                    <Button size="sm" variant="outline" className="mr-2">Details</Button>
                    <Button size="sm">Manage</Button>
                  </div>
                </div>
              </div>
            ))}
            
            {filteredProperties.length === 0 && (
              <div className="py-12 text-center text-gray-500">
                No properties match your search criteria
              </div>
            )}
          </div>
        </div>
      ) : (
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {filteredProperties.map((property) => (
            <Card key={property.id} className="overflow-hidden transition-all hover:shadow-lg">
              <CardContent className="p-4">
                <div className="flex justify-between items-start mb-2">
                  <h3 className="text-lg font-semibold">{property.name}</h3>
                  <Badge variant={getStatusVariant(property.status)}>
                    {property.status}
                  </Badge>
                </div>
                <p className="text-gray-600 text-sm mb-4">{property.address}</p>
                
                <div className="flex items-center justify-between text-sm text-gray-500">
                  <div className="flex items-center">
                    <Building size={16} className="mr-1" />
                    <span>{property.units} Units</span>
                  </div>
                  <div>
                    <span className="font-medium">
                      {Math.round((property.occupancy / property.units) * 100)}% Occupied
                    </span>
                  </div>
                </div>
                
                <div className="mt-4 pt-4 border-t border-gray-100 flex justify-end">
                  <Button size="sm" variant="outline" className="mr-2">Details</Button>
                  <Button size="sm">Manage</Button>
                </div>
              </CardContent>
            </Card>
          ))}

          {filteredProperties.length === 0 && (
            <div className="col-span-full py-12 text-center text-gray-500">
              No properties match your search criteria
            </div>
          )}
        </div>
      )}
    </div>
  );
};

export default Properties;