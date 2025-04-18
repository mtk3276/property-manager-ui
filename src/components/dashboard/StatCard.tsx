import React from 'react';
import { Card, CardContent } from '../ui/Card';
import { cn } from '../../utils/cn';

type StatCardProps = {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: {
    value: string;
    positive: boolean;
  };
  className?: string;
};

const StatCard = ({ title, value, icon, change, className }: StatCardProps) => {
  return (
    <Card className={cn("flex flex-col h-32", className)}>
      <CardContent className="flex flex-col justify-between h-full">
        <div className="flex items-center justify-between">
          <h3 className="text-sm font-medium text-gray-500">{title}</h3>
          <div className="p-2 rounded-full bg-primary/10 text-primary">
            {icon}
          </div>
        </div>
        
        <div>
          <div className="text-2xl font-semibold">{value}</div>
          {change && (
            <div className={cn(
              "text-xs flex items-center mt-1",
              change.positive ? "text-success" : "text-error"
            )}>
              <span>
                {change.positive ? '↑' : '↓'} {change.value}
              </span>
              <span className="ml-1 text-gray-500">vs last month</span>
            </div>
          )}
        </div>
      </CardContent>
    </Card>
  );
};

export default StatCard;