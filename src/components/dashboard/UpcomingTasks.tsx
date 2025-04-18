import React from 'react';
import { Card, CardHeader, CardTitle, CardContent } from '../ui/Card';
import Badge from '../ui/Badge';
import { Calendar, CheckCircle } from 'lucide-react';

type Task = {
  id: number;
  title: string;
  date: string;
  type: 'Lease Renewal' | 'Inspection' | 'Maintenance' | 'Payment Collection';
  completed: boolean;
};

type UpcomingTasksProps = {
  tasks: Task[];
};

const UpcomingTasks = ({ tasks }: UpcomingTasksProps) => {
  const getTypeVariant = (type: Task['type']) => {
    switch (type) {
      case 'Lease Renewal':
        return 'primary';
      case 'Inspection':
        return 'secondary';
      case 'Maintenance':
        return 'warning';
      case 'Payment Collection':
        return 'success';
      default:
        return 'default';
    }
  };

  return (
    <Card>
      <CardHeader>
        <CardTitle>Upcoming Tasks</CardTitle>
      </CardHeader>
      <CardContent>
        <div className="space-y-4">
          {tasks.map((task) => (
            <div
              key={task.id}
              className="flex items-center p-3 rounded-lg hover:bg-gray-50 transition-colors"
            >
              <div className="w-10 h-10 rounded-md bg-primary/10 flex items-center justify-center text-primary mr-4">
                <Calendar size={20} />
              </div>
              
              <div className="flex-1 min-w-0">
                <h4 className="text-sm font-medium text-gray-900 truncate flex items-center">
                  {task.title}
                  {task.completed && (
                    <CheckCircle size={16} className="ml-2 text-success" />
                  )}
                </h4>
                <p className="text-xs text-gray-500">{task.date}</p>
              </div>
              
              <Badge variant={getTypeVariant(task.type)}>
                {task.type}
              </Badge>
            </div>
          ))}
        </div>
      </CardContent>
    </Card>
  );
};

export default UpcomingTasks;