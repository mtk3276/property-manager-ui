import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Wrench } from 'lucide-react';

type MaintenanceRequest = {
  id: number;
  title: string;
  property: string;
  unit: string;
  priority: 'Low' | 'Medium' | 'High' | 'Urgent';
  status: 'Open' | 'In Progress' | 'Completed';
  date: string;
};

type MaintenanceListProps = {
  requests: MaintenanceRequest[];
};

const MaintenanceList = ({ requests }: MaintenanceListProps) => {
  const getPriorityVariant = (priority: MaintenanceRequest['priority']) => {
    switch (priority) {
      case 'Low':
        return 'default';
      case 'Medium':
        return 'warning';
      case 'High':
        return 'error';
      case 'Urgent':
        return 'error';
      default:
        return 'default';
    }
  };

  const getStatusVariant = (status: MaintenanceRequest['status']) => {
    switch (status) {
      case 'Open':
        return 'error';
      case 'In Progress':
        return 'warning';
      case 'Completed':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Recent Maintenance Requests</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {requests.map((request) => (
            <div 
              key={request.id}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary mr-4">
                <Wrench size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate">{request.title}</h4>
                <p className="text-xs text-gray-500 truncate">
                  {request.property} • Unit {request.unit}
                </p>
              </div>
              
              <div className="flex flex-col items-end">
                <div className="flex space-x-2">
                  <Badge variant={getPriorityVariant(request.priority)}>
                    {request.priority}
                  </Badge>
                  <Badge variant={getStatusVariant(request.status)}>
                    {request.status}
                  </Badge>
                </div>
                <span className="text-xs text-gray-500 mt-1">{request.date}</span>
              </div>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default MaintenanceList;