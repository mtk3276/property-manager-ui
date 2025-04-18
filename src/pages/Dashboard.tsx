import React from 'react';
import { Building, Wrench, DollarSign, Users } from 'lucide-react';
import StatCard from '../components/dashboard/StatCard';
import PropertyList from '../components/dashboard/PropertyList';
import MaintenanceList from '../components/dashboard/MaintenanceList';
import RecentPayments from '../components/dashboard/RecentPayments';
import UpcomingTasks from '../components/dashboard/UpcomingTasks';
import { properties, maintenanceRequests, payments, tasks, stats } from '../data/mockData';

const Dashboard = () => {
  return (
    <div className="space-y-6">
      <div>
        <h1 className="text-2xl font-bold text-gray-900">Welcome back!</h1>
        <p className="text-gray-500">Here's what's happening with your properties today.</p>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
        <StatCard 
          title="Total Properties" 
          value={stats[0].value}
          icon={<Building size={18} />} 
          change={stats[0].change}
        />
        <StatCard 
          title="Total Units" 
          value={stats[1].value} 
          icon={<Building size={18} />}
          change={stats[1].change}
        />
        <StatCard 
          title="Occupancy Rate" 
          value={stats[2].value} 
          icon={<Users size={18} />}
          change={stats[2].change}
        />
        <StatCard 
          title="Monthly Revenue" 
          value={stats[3].value} 
          icon={<DollarSign size={18} />}
          change={stats[3].change}
        />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <PropertyList properties={properties} />
        <MaintenanceList requests={maintenanceRequests} />
      </div>
      
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <RecentPayments payments={payments} />
        <UpcomingTasks tasks={tasks} />
      </div>
    </div>
  );
};

export default Dashboard;