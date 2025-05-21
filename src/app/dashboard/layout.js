'use client';

import { useState } from 'react';
import Link from 'next/link';
import Sidebar from '../components/Sidebar';
import Header from '../components/Header';
import { usePathname } from 'next/navigation';

export default function DashboardLayout({ children }) {
  const [isSidebarOpen, setIsSidebarOpen] = useState(true);
const pathname=usePathname();
  const toggleSidebar = () => {
    setIsSidebarOpen(prev => !prev);
  };

  return (
    <div className="h-screen flex flex-col">
      {/* Header */}
      <div className="fixed top-0 left-0 w-full h-20 bg-white z-10">
        <Header toggleSidebar={toggleSidebar} />
       
      </div>

      {/* Main Section */}
      <div className="flex flex-1 mt-5">
        {/* Sidebar */}
        <div
          className={`fixed md:top-16 left-0 h-full w-[80%] md:w-[20%] md:mt-5 px-3 transition-all duration-500 transform bg-[#F7F7FC] z-50 ${
            isSidebarOpen ? 'md:translate-x-0 -translate-x-full' : 'translate-x-0 md:-translate-x-full'
          }`}
        >
          <Sidebar toggleSidebar={toggleSidebar} />
       
        </div>

        {/* Content Area */}
        <div
          className={`flex-1 transition-all duration-500 p-6 bg-[#F7F7FC] mt-10 ${
            isSidebarOpen ? 'md:ml-[20%]' : 'ml-0'
          }`}
        >
          
          <div className="mt-4 text-xl font-semibold hidden md:block">
            <Link href="/dashboard" className="text-gray-700">
              Dashboard
            </Link>
       
            <span className="text-[#6E7191] font-sm text-xl"> / {pathname.replace('/dashboard', '').replace('/', '') || 'Dashboard'}</span>
          </div>

          {children}
        </div>
      </div>
    </div>
  );
}