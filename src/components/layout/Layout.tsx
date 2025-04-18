import React, { useState } from 'react';
import { useLocation } from 'react-router-dom';
import Sidebar from './Sidebar';
import Header from './Header';

type LayoutProps = {
  children: React.ReactNode;
};

const Layout = ({ children }: LayoutProps) => {
  const location = useLocation();
  const activeItem = location.pathname === '/' ? 'dashboard' : location.pathname.substring(1);
  const [isMobileSidebarOpen, setIsMobileSidebarOpen] = useState(false);

  return (
    <div className="flex h-screen bg-gray-50">
      {/* Mobile sidebar */}
      <div 
        className={`fixed inset-0 z-40 md:hidden ${isMobileSidebarOpen ? 'block' : 'hidden'}`}
      >
        <div className="absolute inset-0 bg-gray-600 opacity-75" onClick={() => setIsMobileSidebarOpen(false)}></div>
        <div className="relative z-10 h-full w-72 bg-white">
          <Sidebar activeItem={activeItem} closeMobileSidebar={() => setIsMobileSidebarOpen(false)} />
        </div>
      </div>

      {/* Desktop sidebar */}
      <div className="hidden md:flex md:flex-shrink-0">
        <Sidebar activeItem={activeItem} closeMobileSidebar={() => {}} />
      </div>

      {/* Main content */}
      <div className="flex flex-1 flex-col overflow-hidden">
        <Header />
        
        <button 
          className="md:hidden p-4 text-gray-500"
          onClick={() => setIsMobileSidebarOpen(true)}
        >
          Menu
        </button>
        
        <main className="flex-1 overflow-y-auto p-6">
          {children}
        </main>
      </div>
    </div>
  );
};

export default Layout;