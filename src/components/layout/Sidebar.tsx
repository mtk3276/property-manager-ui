import React from 'react';
import { Link } from 'react-router-dom';
import { Home, Building, Users, Wrench, FileText, Calendar, BarChart2, MessageSquare, Settings } from 'lucide-react';
import { cn } from '../../utils/cn';

type SidebarItemProps = {
  icon: React.ReactNode;
  label: string;
  active?: boolean;
  to: string;
  onClick?: () => void;
};

const SidebarItem = ({ icon, label, active = false, to, onClick }: SidebarItemProps) => {
  return (
    <Link
      to={to}
      className={cn(
        "flex items-center w-full px-3 py-2 text-left rounded-md mb-1 transition-colors",
        active 
          ? "bg-primary/10 text-primary font-medium" 
          : "text-gray-600 hover:bg-gray-100"
      )}
      onClick={onClick}
    >
      <span className="mr-3">{icon}</span>
      <span>{label}</span>
    </Link>
  );
};

type SidebarProps = {
  activeItem: string;
  closeMobileSidebar: () => void;
};

const Sidebar = ({ activeItem, closeMobileSidebar }: SidebarProps) => {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: <Home size={18} />, path: '/dashboard' },
    { id: 'properties', label: 'Properties', icon: <Building size={18} />, path: '/properties' },
    { id: 'tenants', label: 'Tenants', icon: <Users size={18} />, path: '/tenants' },
    { id: 'maintenance', label: 'Maintenance', icon: <Wrench size={18} />, path: '/maintenance' },
    { id: 'documents', label: 'Documents', icon: <FileText size={18} />, path: '/documents' },
    { id: 'calendar', label: 'Calendar', icon: <Calendar size={18} />, path: '/calendar' },
    { id: 'reports', label: 'Reports', icon: <BarChart2 size={18} />, path: '/reports' },
    { id: 'messages', label: 'Messages', icon: <MessageSquare size={18} />, path: '/messages' },
  ];

  return (
    <div className="w-64 h-full bg-white border-r border-gray-200 py-6 px-4">
      <div className="flex items-center px-2 mb-8">
        <img src="/hauser.png" alt="Hauser Logo" className="h-7 mr-2" />
        <h1 className="text-xl font-bold">Hauser</h1>
      </div>
      
      <div className="space-y-1">
        {menuItems.map((item) => (
          <SidebarItem
            key={item.id}
            icon={item.icon}
            label={item.label}
            active={activeItem === item.id}
            to={item.path}
            onClick={closeMobileSidebar}
          />
        ))}
      </div>
      
      <div className="mt-auto pt-6 border-t border-gray-200 mt-6">
        <SidebarItem
          icon={<Settings size={18} />}
          label="Settings"
          active={activeItem === 'settings'}
          to="/settings"
          onClick={closeMobileSidebar}
        />
      </div>
    </div>
  );
};

export default Sidebar;