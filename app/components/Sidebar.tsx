'use client';

import Link from 'next/link';
import { useState } from 'react';

interface SidebarProps {
  activeMenu?: string;
}

export default function Sidebar({ activeMenu = 'dashboard' }: SidebarProps) {
  const [collapsed, setCollapsed] = useState(false);

  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: '⊞' },
    { id: 'reservations', label: 'Reservation Mgmt', icon: '📅', badge: 13 },
    { id: 'rooms', label: 'Room Inventory', icon: '🏠' },
    { id: 'pricing', label: 'Pricing & Rates', icon: '₱' },
    { id: 'billing', label: 'POS / Billing', icon: '💳' },
    { id: 'hr', label: 'HR Management', icon: '👥' },
  ];

  const systemItems = [
    { id: 'settings', label: 'System Settings', icon: '⚙' },
  ];

  return (
    <aside className={`${collapsed ? 'w-20' : 'w-64'} bg-gradient-to-b from-teal-900 to-teal-800 text-white h-screen fixed left-0 top-0 overflow-y-auto transition-all duration-300 shadow-lg`}>
      {/* Header */}
      <div className="p-4 border-b border-teal-700">
        <div className="flex items-center justify-between">
          {!collapsed && (
            <div>
              <h1 className="text-xl font-bold">CHTM RRS</h1>
              <p className="text-xs text-teal-200">HOTEL MANAGEMENT</p>
            </div>
          )}
          <button
            onClick={() => setCollapsed(!collapsed)}
            className="p-1 hover:bg-teal-700 rounded transition"
          >
            {collapsed ? '→' : '←'}
          </button>
        </div>
      </div>

      {/* Main Menu */}
      <div className="py-4 px-2">
        <p className={`text-xs font-semibold text-teal-300 uppercase px-2 mb-2 ${collapsed ? 'hidden' : ''}`}>
          Main
        </p>
        <nav className="space-y-2">
          {menuItems.map((item) => {
            const href = item.id === 'dashboard' ? '/dashboard' : `/dashboard/${item.id}`;
            return (
              <Link
                key={item.id}
                href={href}
                className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                  activeMenu === item.id
                    ? 'bg-teal-600 text-white'
                    : 'text-teal-100 hover:bg-teal-700'
                }`}
                title={collapsed ? item.label : ''}
              >
                <span className="text-lg">{item.icon}</span>
                {!collapsed && (
                  <>
                    <span className="flex-1">{item.label}</span>
                    {item.badge && (
                      <span className="bg-pink-500 text-white text-xs px-2 py-1 rounded-full">
                        {item.badge}
                      </span>
                    )}
                  </>
                )}
              </Link>
            );
          })}
        </nav>
      </div>

      {/* System Menu */}
      <div className="py-4 px-2 border-t border-teal-700 mt-4">
        <p className={`text-xs font-semibold text-teal-300 uppercase px-2 mb-2 ${collapsed ? 'hidden' : ''}`}>
          System
        </p>
        <nav className="space-y-2">
          {systemItems.map((item) => (
            <Link
              key={item.id}
              href={`/dashboard/${item.id}`}
              className={`flex items-center gap-3 px-3 py-2 rounded-lg transition ${
                activeMenu === item.id
                  ? 'bg-teal-600 text-white'
                  : 'text-teal-100 hover:bg-teal-700'
              }`}
              title={collapsed ? item.label : ''}
            >
              <span className="text-lg">{item.icon}</span>
              {!collapsed && <span>{item.label}</span>}
            </Link>
          ))}
        </nav>
      </div>

      {/* Footer - User Info */}
      <div className={`absolute bottom-0 left-0 right-0 bg-teal-950 border-t border-teal-700 p-3 ${collapsed ? 'text-center' : ''}`}>
        <div className="flex items-center gap-2">
          <div className="w-8 h-8 bg-teal-600 rounded-full flex items-center justify-center font-bold text-sm">
            AD
          </div>
          {!collapsed && (
            <div className="flex-1">
              <p className="text-sm font-semibold">Admin User</p>
              <p className="text-xs text-teal-300">Super Admin</p>
            </div>
          )}
        </div>
      </div>
    </aside>
  );
}
