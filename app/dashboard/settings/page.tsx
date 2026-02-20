"use client";

import React, { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import TopBar from '@/app/components/TopBar';

export default function SystemSettings() {
  const [activeTab, setActiveTab] = useState('notifications');
  const [twoFactorEnabled, setTwoFactorEnabled] = useState(true);
  const [loginAlertEnabled, setLoginAlertEnabled] = useState(true);
  
  type NotificationKey = 'checkIns' | 'checkOuts' | 'reservations' | 'ratings';
  type AppearanceKey = 'darkMode';

  interface NotificationsState {
    checkIns: boolean;
    checkOuts: boolean;
    reservations: boolean;
    ratings: boolean;
  }

  interface AppearanceState {
    darkMode: boolean;
  }

  const [notifications, setNotifications] = useState<NotificationsState>({
    checkIns: true,
    checkOuts: true,
    reservations: true,
    ratings: true,
  });

  const [appearance, setAppearance] = useState<AppearanceState>({
    darkMode: true,
  });
  

  const tabs = [
    { id: 'admin', label: 'Admin Settings', icon: '⚙️' },
    { id: 'appearance', label: 'Appearance', icon: '🎨' },
    { id: 'notifications', label: 'Notifications', icon: '🔔' },
  ];

  const toggleNotification = (key: NotificationKey) => {
    setNotifications((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const toggleAppearance = (key: AppearanceKey) => {
    setAppearance((prev) => ({ ...prev, [key]: !prev[key] }));
  };

  const notifItems: { key: NotificationKey; label: string }[] = [
    { key: 'checkIns', label: 'Check-Ins' },
    { key: 'checkOuts', label: 'Check-outs' },
    { key: 'reservations', label: 'Reservations' },
    { key: 'ratings', label: 'Ratings' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeMenu="settings" />

      <main className="flex-1 ml-64 p-6">
        <TopBar />

        <div className="p-6">
          <div className="flex justify-between items-center mb-6">
            <h1 className="text-3xl font-bold text-gray-900">Settings</h1>
            <button className="px-6 py-2 bg-orange-500 text-white rounded-lg font-semibold hover:bg-orange-600">
              Save Changes
            </button>
          </div>

          {/* Tabs */}
          <div className="bg-white rounded-lg shadow-md">
            <div className="flex border-b border-gray-200 overflow-x-auto">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex items-center gap-2 px-6 py-4 font-medium whitespace-nowrap transition ${
                    activeTab === tab.id
                      ? 'border-b-2 border-orange-500 text-orange-500'
                      : 'text-gray-600 hover:text-gray-900'
                  }`}
                >
                  <span>{tab.icon}</span>
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Notifications Tab */}
            {activeTab === 'notifications' && (
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Notification</h3>
                  <p className="text-sm text-gray-600 mb-6">Control notifications that admin receives</p>

                  <div className="space-y-4">
                    {notifItems.map((item) => (
                      <div key={item.key} className="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                        <label className="font-medium text-gray-900 cursor-pointer">{item.label}</label>
                        <button
                          onClick={() => toggleNotification(item.key)}
                          className={`relative w-14 h-8 flex items-center rounded-full transition ${
                            notifications[item.key] ? 'bg-green-500' : 'bg-gray-300'
                          }`}
                        >
                          <div className={`w-6 h-6 bg-white rounded-full transition transform ${notifications[item.key] ? 'translate-x-7' : 'translate-x-1'}`} />
                        </button>
                      </div>
                    ))}
                  </div>
                </div>
              </div>
            )}

            {/* Appearance Tab */}
            {activeTab === 'appearance' && (
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">System</h3>
                  <p className="text-sm text-gray-600 mb-6">Changes the theme of the system</p>

                  <div className="space-y-4">
                    <div className="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition">
                      <label className="font-medium text-gray-900 cursor-pointer">Dark Mode</label>
                      <button
                        onClick={() => toggleAppearance('darkMode')}
                        className={`relative w-14 h-8 flex items-center rounded-full transition ${
                          appearance.darkMode ? 'bg-green-500' : 'bg-gray-300'
                        }`}
                      >
                        <div className={`w-6 h-6 bg-white rounded-full transition transform ${appearance.darkMode ? 'translate-x-7' : 'translate-x-1'}`} />
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}

            {/* Admin Settings Tab */}
            {activeTab === 'admin' && (
              <div className="p-8">
                <div className="mb-8">
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-sm text-gray-600 mb-6">Keep your account secure with extra authentication and alerts.</p>

                  {/* Login Alert Notification */}
                  <div className="flex items-center justify-between p-4 border-2 border-gray-300 rounded-lg bg-gray-50 hover:bg-gray-100 transition mb-6">
                    <div>
                      <p className="font-medium text-gray-900">Login Alert Notification</p>
                      <p className="text-sm text-gray-600">Get notified when your account is accessed from a new device</p>
                    </div>
                    <button
                      onClick={() => setLoginAlertEnabled(!loginAlertEnabled)}
                      className={`relative w-14 h-8 flex items-center rounded-full transition flex-shrink-0 ml-4 ${
                        loginAlertEnabled ? 'bg-green-500' : 'bg-gray-300'
                      }`}
                    >
                      <div className={`w-6 h-6 bg-white rounded-full transition transform ${loginAlertEnabled ? 'translate-x-7' : 'translate-x-1'}`} />
                    </button>
                  </div>
                </div>

                <hr className="my-8" />

                {/* Password Management */}
                <div>
                  <h3 className="text-lg font-semibold text-gray-900 mb-2">Security</h3>
                  <p className="text-sm text-gray-600 mb-6">Password Management</p>

                  <div className="p-4 border-2 border-gray-300 rounded-lg bg-gray-50">
                    <label className="block text-sm font-medium text-gray-700 mb-3">Old Password</label>
                    <div className="flex gap-3">
                      <input
                        type="password"
                        placeholder="••••••••"
                        className="flex-1 px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-green-500"
                      />
                      <button className="px-6 py-2 bg-green-500 text-white rounded-lg font-semibold hover:bg-green-600 transition">
                        Save
                      </button>
                    </div>
                  </div>
                </div>
              </div>
            )}
          </div>
        </div>
      </main>
    </div>
  );
}