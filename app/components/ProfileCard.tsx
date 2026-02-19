'use client';

import { useState } from 'react';
import { useRouter } from 'next/navigation';

interface ProfileCardProps {
  userName?: string;
  userEmail?: string;
  onLogout?: () => void;
}

export default function ProfileCard({ 
  userName = 'Aleczandergopez', 
  userEmail = 'aleczandergopez@gmail.com',
  onLogout 
}: ProfileCardProps) {
  const [isOpen, setIsOpen] = useState(false);
  const [isMinimized, setIsMinimized] = useState(false);
  const router = useRouter();

  const handleLogout = () => {
    if (onLogout) {
      onLogout();
    }
    // Clear any auth data and redirect to login
    localStorage.removeItem('userEmail');
    localStorage.removeItem('userName');
    setIsOpen(false);
    router.push('/login');
  };

  const getInitials = (name: string) => {
    return name
      .split(' ')
      .map((n) => n[0])
      .join('')
      .toUpperCase()
      .slice(0, 2);
  };

  if (isMinimized) {
    return (
      <button
        onClick={() => setIsMinimized(false)}
        className="relative inline-flex items-center justify-center"
        title={userName}
      >
        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold cursor-pointer hover:shadow-lg transition-shadow">
          {getInitials(userName)}
        </div>
      </button>
    );
  }

  return (
    <div className="relative">
      {/* Profile Button */}
      <button
        onClick={() => setIsOpen(!isOpen)}
        className="flex items-center gap-3 px-4 py-2 rounded-lg hover:bg-gray-100 transition relative group"
      >
        <div className="text-right">
          <p className="text-sm font-semibold text-gray-800">{userName}</p>
          <p className="text-xs text-gray-600">Verified</p>
        </div>
        <div className="w-10 h-10 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold">
          {getInitials(userName)}
        </div>
      </button>

      {/* Dropdown Menu */}
      {isOpen && (
        <div className="absolute right-0 mt-2 w-72 bg-white rounded-lg shadow-2xl border border-gray-200 z-50 overflow-hidden">
          {/* Header with minimize button */}
          <div className="flex items-center justify-between px-4 py-3 border-b border-gray-200 bg-gray-50">
            <h3 className="text-sm font-semibold text-gray-900">Account</h3>
            <button
              onClick={() => {
                setIsMinimized(true);
                setIsOpen(false);
              }}
              className="text-gray-400 hover:text-gray-600 transition"
              title="Minimize"
            >
              <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M20 12H4" />
              </svg>
            </button>
          </div>

          {/* Profile Info */}
          <div className="px-4 py-4 border-b border-gray-200">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-teal-400 to-teal-600 rounded-full flex items-center justify-center text-white font-bold text-lg">
                {getInitials(userName)}
              </div>
              <div>
                <p className="text-sm font-semibold text-gray-900">{userName}</p>
                <p className="text-xs text-gray-600">{userEmail}</p>
                <div className="flex items-center gap-1 mt-1">
                  <svg className="w-3 h-3 text-green-600" fill="currentColor" viewBox="0 0 20 20">
                    <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
                  </svg>
                  <span className="text-xs font-medium text-green-600">Verified</span>
                </div>
              </div>
            </div>
          </div>

          {/* Menu Items */}
          <div className="py-2">
            <button
              onClick={() => {
                console.log('View My Profile');
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M13 16h-1v-4h-1m1-4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z" />
              </svg>
              <span>My Profile</span>
            </button>

            <button
              onClick={() => {
                console.log('Go to Settings');
                setIsOpen(false);
              }}
              className="w-full px-4 py-3 text-left text-sm text-gray-700 hover:bg-gray-50 transition flex items-center gap-3"
            >
              <svg className="w-5 h-5 text-gray-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10.325 4.317c.426-1.756 2.924-1.756 3.35 0a1.724 1.724 0 002.573 1.066c1.543-.94 3.31.826 2.37 2.37a1.724 1.724 0 001.065 2.572c1.756.426 1.756 2.924 0 3.35a1.724 1.724 0 00-1.066 2.573c.94 1.543-.826 3.31-2.37 2.37a1.724 1.724 0 00-2.572 1.065c-.426 1.756-2.924 1.756-3.35 0a1.724 1.724 0 00-2.573-1.066c-1.543.94-3.31-.826-2.37-2.37a1.724 1.724 0 00-1.065-2.572c-1.756-.426-1.756-2.924 0-3.35a1.724 1.724 0 001.066-2.573c-.94-1.543.826-3.31 2.37-2.37.996.608 2.296.07 2.572-1.065z" />
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 12a3 3 0 11-6 0 3 3 0 016 0z" />
              </svg>
              <span>Settings</span>
            </button>

            <hr className="my-2" />

            <button
              onClick={handleLogout}
              className="w-full px-4 py-3 text-left text-sm text-red-600 hover:bg-red-50 transition flex items-center gap-3 font-medium"
            >
              <svg className="w-5 h-5 text-red-600" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h4a3 3 0 013 3v1" />
              </svg>
              <span>Logout</span>
            </button>
          </div>

          {/* Footer */}
          <div className="px-4 py-3 bg-gray-50 border-t border-gray-200">
            <p className="text-xs text-gray-600">
              <span className="font-medium">Gmail:</span> {userEmail}
            </p>
          </div>
        </div>
      )}

      {/* Click outside to close */}
      {isOpen && (
        <div
          className="fixed inset-0 z-40"
          onClick={() => setIsOpen(false)}
        />
      )}
    </div>
  );
}
