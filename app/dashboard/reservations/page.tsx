"use client";

import React, { useState } from "react";
import Sidebar from '@/app/components/Sidebar';
import TopBar from '@/app/components/TopBar';

export default function ReservationManagement() {
  const [activeTab, setActiveTab] = useState('reservations');

  const reservations = [
    { id: 1, guest: 'Guest#5', date: '02-27-2026', time: '10:34 AM' },
    { id: 2, guest: 'Guest#6', date: '03-15-2026', time: '05:14 PM' },
  ];

  const checkIns = [
    { id: 1, guest: 'Guest#4', date: '02-10-2026', time: '11:34 AM' },
    { id: 2, guest: 'Guest#3', date: '02-09-2026', time: '05:14 AM' },
  ];

  const checkOuts = [
    { id: 1, guest: 'Room#1', date: '02-13-2026', time: '01:34 AM' },
    { id: 2, guest: 'Room#2', date: '02-09-2026', time: '03:14 AM' },
  ];

  const roomManagement = [
    { id: 1, guest: 'Room#1', date: '02-15-2026', time: '8AM-10PM' },
    { id: 2, guest: 'Room#2', date: '02-14-2026', time: '12PM-2PM' },
  ];

  const tabs = [
    { id: 'reservations', label: 'Reservations' },
    { id: 'checkins', label: 'Check-Ins' },
    { id: 'checkouts', label: 'Check-outs' },
    { id: 'rooms', label: 'Room Management' },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeMenu="reservations" />

      <main className="flex-1 ml-64 p-8">
        <TopBar />

        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Reservation Management</h1>

          <div className="bg-white rounded-xl border-2 border-gray-300 shadow-md overflow-hidden">
            {/* Tabs */}
            <div className="flex border-b-2 border-gray-300 bg-gray-100">
              {tabs.map((tab) => (
                <button
                  key={tab.id}
                  onClick={() => setActiveTab(tab.id)}
                  className={`flex-1 px-6 py-4 font-semibold text-center transition ${
                    activeTab === tab.id
                      ? 'text-teal-600 border-b-4 border-teal-600 bg-white'
                      : 'text-gray-900 hover:bg-gray-50'
                  }`}
                >
                  {tab.label}
                </button>
              ))}
            </div>

            {/* Table Content */}
            <div className="p-6 bg-gray-50">
              <div className="bg-white rounded-lg border-2 border-gray-300 overflow-hidden">
                {/* Table Header */}
                <div className={`grid gap-4 p-4 bg-gray-100 border-b-2 border-gray-300 font-semibold text-gray-900 ${
                  activeTab === 'reservations' ? 'grid-cols-4' : 'grid-cols-3'
                }`}>
                  <div>
                    {activeTab === 'checkouts' ? 'Guest' : activeTab === 'rooms' ? 'Rooms' : 'Guest'}
                  </div>
                  <div>Date</div>
                  <div>{activeTab === 'checkouts' ? 'Time' : 'Clean-up Time'}</div>
                  {activeTab === 'reservations' && <div>Actions</div>}
                </div>

                {/* Table Rows */}
                <div className="divide-y-2 divide-gray-300">
                  {(activeTab === 'reservations'
                    ? reservations
                    : activeTab === 'checkins'
                    ? checkIns
                    : activeTab === 'checkouts'
                    ? checkOuts
                    : roomManagement
                  ).map((item) => (
                    <div
                      key={item.id}
                      className={`grid gap-4 p-4 items-center hover:bg-gray-50 transition ${
                        activeTab === 'reservations' ? 'grid-cols-4' : 'grid-cols-3'
                      }`}
                    >
                      <div className="px-4 py-3 bg-gray-50 rounded-lg border-2 border-gray-300 text-gray-900 font-medium">
                        {item.guest}
                      </div>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg border-2 border-gray-300 text-gray-900 font-medium">
                        {item.date}
                      </div>
                      <div className="px-4 py-3 bg-gray-50 rounded-lg border-2 border-gray-300 text-gray-900 font-medium">
                        {item.time}
                      </div>
                      {activeTab === 'reservations' && (
                        <div className="flex gap-2 justify-center">
                          <button className="px-4 py-2 bg-green-500 text-white font-semibold rounded-lg hover:bg-green-600 transition">
                            Accept
                          </button>
                          <button className="px-4 py-2 bg-red-500 text-white font-semibold rounded-lg hover:bg-red-600 transition">
                            Decline
                          </button>
                        </div>
                      )}
                    </div>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
