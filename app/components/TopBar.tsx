'use client';

import { useEffect, useState } from 'react';
import ProfileCard from './ProfileCard';

export default function TopBar() {
  const [userEmail, setUserEmail] = useState('aleczandergopez@gmail.com');
  const [userName, setUserName] = useState('Aleczandergopez');

  useEffect(() => {
    // Get user data from localStorage (set during login)
    const storedEmail = localStorage.getItem('userEmail');
    const storedName = localStorage.getItem('userName');
    
    if (storedEmail) setUserEmail(storedEmail);
    if (storedName) setUserName(storedName);
  }, []);

  return (
    <header className="bg-white border-b border-gray-200 shadow-sm">
      <div className="px-6 py-4 flex items-center justify-between">
        {/* Left: Title */}
        <div>
          <h2 className="text-2xl font-bold text-gray-800">Admin Dashboard</h2>
          <p className="text-sm text-gray-600">CHTM-RRS Dashboard</p>
        </div>

        {/* Right: Controls */}
        <div className="flex items-center gap-4">
          {/* Real-time Sync */}
          <div className="flex items-center gap-2 bg-green-50 px-4 py-2 rounded-lg">
            <span className="w-2 h-2 bg-green-500 rounded-full animate-pulse"></span>
            <span className="text-sm text-green-700 font-medium">Real-time Sync</span>
          </div>

          {/* Notification Bell */}
          <button className="p-2 hover:bg-gray-100 rounded-lg transition relative">
            <svg className="w-6 h-6 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 17h5l-1.405-1.405A2.999 2.999 0 0018 14.998V11c0-1.657-.895-3.095-2.236-3.884M15 17H9m6 0v1a3 3 0 11-6 0v-1m6 0H9v1a3 3 0 11-6 0v-1" />
            </svg>
            <span className="absolute top-1 right-1 w-3 h-3 bg-red-500 rounded-full"></span>
          </button>

          {/* User Menu */}
          <div className="pl-4 border-l border-gray-200">
            <ProfileCard userName={userName} userEmail={userEmail} />
          </div>
        </div>
      </div>
    </header>
  );
}
