'use client';

import { useState } from 'react';
import Sidebar from '@/app/components/Sidebar';
import TopBar from '@/app/components/TopBar';
import StatCard from '@/app/components/StatCard';
import RoomCard from '@/app/components/RoomCard';

export default function Dashboard() {
  const [filter, setFilter] = useState<'all' | 'available' | 'occupied'>('available');
  const handleRoomEdit = (roomId: string) => {
    console.log(`Edit room ${roomId}`);
  };

  const handleRoomDetails = (roomId: string) => {
    console.log(`View details for room ${roomId}`);
  };

  const handleRoomBook = (roomId: string) => {
    console.log(`Book room ${roomId}`);
  };

  return (
    <div className="flex min-h-screen bg-gray-50">
      {/* Sidebar */}
      <Sidebar activeMenu="dashboard" />

      {/* Main Content */}
      <main className="flex-1 ml-64">
        {/* Top Bar */}
        <TopBar />

        {/* Dashboard Content */}
        <div className="p-6">
          {/* Stats Section */}
          <div className="grid grid-cols-1 md:grid-cols-4 gap-6 mb-8">
            <StatCard
              title="Total Rooms"
              value="48"
              change="+4 added this month"
              color="blue"
              icon="🏠"
            />
            <StatCard
              title="Occupied"
              value="31"
              subtitle="64.6% occupancy rate"
              color="pink"
              icon="👤"
            />
            <StatCard
              title="Available"
              value="17"
              subtitle="Ready for check-in"
              color="green"
              icon="✓"
            />
            <StatCard
              title="Daily Revenue"
              value="₱84,250"
              change="12.4% vs yesterday"
              changeType="positive"
              color="yellow"
              icon="₱"
            />
          </div>

          {/* Room Status Overview */}
          <div className="mb-8">
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-2xl font-bold text-gray-800">Room Status Overview</h3>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={() => setFilter('all')}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition ${filter === 'all' ? 'bg-white border border-gray-200 text-gray-800 shadow' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      All
                    </button>

                    <button
                      onClick={() => setFilter('available')}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition ${filter === 'available' ? 'bg-green-50 text-green-700 border border-green-100' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Available
                    </button>

                    <button
                      onClick={() => setFilter('occupied')}
                      className={`px-4 py-2 text-sm font-medium rounded-full transition ${filter === 'occupied' ? 'bg-pink-50 text-pink-700 border border-pink-100' : 'text-gray-600 hover:bg-gray-50'}`}
                    >
                      Occupied
                    </button>

                    <button className="px-3 py-2 text-sm font-medium text-gray-700 hover:bg-gray-100 rounded-lg transition flex items-center gap-2">
                      <svg className="w-4 h-4 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M3 4a1 1 0 011-1h16a1 1 0 011 1v2a1 1 0 01-.293.707L15 13.414V19a1 1 0 01-.553.894l-4 2A1 1 0 019 21v-7.586L3.293 6.707A1 1 0 013 6V4z" />
                      </svg>
                      Filter
                    </button>
                  </div>
            </div>

            {/* Subtitle */}
            <p className="text-sm text-gray-600 mb-6">
              Ground Floor - Block A · Last synced 2 min ago
            </p>

            {/* Room Cards */}
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
              {(() => {
                // sample rooms data
                const rooms = [
                  {
                    id: '101',
                    roomNumber: '101',
                    type: 'Standard Room',
                    status: 'available' as const,
                    floor: 'Ground Floor',
                    roomCategory: 'Standard Room',
                    capacity: 2,
                    bedType: 'Queen Bed',
                    ratePerNight: 2500,
                    lastCleaned: 'Today 9:00 AM',
                    amenities: ['WiFi', 'AC', 'TV', 'Minibar'],
                  },
                  {
                    id: '102',
                    roomNumber: '102',
                    type: 'Deluxe Room',
                    status: 'occupied' as const,
                    floor: 'Ground Floor',
                    roomCategory: 'Deluxe Room',
                    capacity: 3,
                    bedType: 'King Bed',
                    ratePerNight: 3800,
                    lastCleaned: 'Today 8:45 AM',
                    amenities: ['WiFi', 'AC', 'TV', 'Jacuzzi', 'Balcony'],
                  },
                ];

                const filtered = rooms.filter((r) => {
                  if (filter === 'all') return true;
                  return r.status === filter;
                });

                if (filtered.length === 0) {
                  return (
                    <div className="col-span-1 lg:col-span-2 text-center text-gray-500 py-12">
                      No rooms match the selected filter.
                    </div>
                  );
                }

                return filtered.map((r) => (
                  <RoomCard
                    key={r.id}
                    roomNumber={r.roomNumber}
                    type={r.type}
                    status={r.status}
                    floor={r.floor}
                    roomCategory={r.roomCategory}
                    capacity={r.capacity}
                    bedType={r.bedType}
                    ratePerNight={r.ratePerNight}
                    lastCleaned={r.lastCleaned}
                    amenities={r.amenities}
                    onEdit={() => handleRoomEdit(r.id)}
                    onDetails={() => handleRoomDetails(r.id)}
                    onBook={() => handleRoomBook(r.id)}
                  />
                ));
              })()}
            </div>

            {/* Add New Room Button */}
            <div className="mt-6 flex gap-3">
              <button className="px-6 py-3 bg-teal-700 text-white rounded-lg font-semibold hover:bg-teal-800 transition">
                + Add New Room
              </button>
              <button className="px-6 py-3 text-gray-700 border border-gray-300 rounded-lg font-semibold hover:bg-gray-50 transition">
                or import from CSV / Property Sheet
              </button>
            </div>
          </div>

          {/* Pending Actions & Quick Stats */}
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
            {/* Pending Actions */}
            <div className="lg:col-span-2 bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Pending Actions</h3>
              <div className="space-y-3">
                <div className="flex items-start gap-4 p-3 bg-blue-50 rounded-lg border-l-4 border-blue-500">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">New Booking Sync</p>
                    <p className="text-sm text-gray-600">3 new bookings from OTA channel pending import</p>
                    <p className="text-xs text-gray-500 mt-1">2 min ago</p>
                  </div>
                  <button className="px-3 py-1 bg-blue-500 text-white text-xs font-semibold rounded hover:bg-blue-600">
                    Auto-sync
                  </button>
                </div>
                <div className="flex items-start gap-4 p-3 bg-pink-50 rounded-lg border-l-4 border-pink-500">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Legal Document Review</p>
                    <p className="text-sm text-gray-600">Revised guest waiver policy needs approval</p>
                    <p className="text-xs text-gray-500 mt-1">1 hr ago</p>
                  </div>
                  <span className="px-2 py-1 bg-pink-500 text-white text-xs font-semibold rounded">
                    Urgent
                  </span>
                </div>
                <div className="flex items-start gap-4 p-3 bg-orange-50 rounded-lg border-l-4 border-orange-500">
                  <div className="flex-1">
                    <p className="font-semibold text-gray-800">Maintenance Request</p>
                    <p className="text-sm text-gray-600">Room 105 AC unit flagged for service</p>
                    <p className="text-xs text-gray-500 mt-1">5 hrs ago</p>
                  </div>
                  <span className="px-2 py-1 bg-orange-500 text-white text-xs font-semibold rounded">
                    Review
                  </span>
                </div>
              </div>
            </div>

            {/* Quick Stats */}
            <div className="bg-white rounded-lg shadow-md p-6">
              <h3 className="text-lg font-bold text-gray-800 mb-4">Quick Stats</h3>
              <div className="space-y-4">
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-700">Check-ins Today</p>
                    <p className="text-2xl font-bold text-gray-800">7</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-700">Check-outs Today</p>
                    <p className="text-2xl font-bold text-gray-800">4</p>
                  </div>
                </div>
                <div>
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-700">In Maintenance</p>
                    <p className="text-2xl font-bold text-gray-800">2</p>
                  </div>
                </div>
                <div className="border-t border-gray-200 pt-4">
                  <div className="flex justify-between mb-2">
                    <p className="text-sm font-semibold text-gray-700">Occupancy Rate</p>
                    <p className="text-2xl font-bold text-teal-600">64.6%</p>
                  </div>
                  <div className="w-full bg-gray-200 rounded-full h-2">
                    <div
                      className="bg-gradient-to-r from-green-400 to-teal-600 h-2 rounded-full"
                      style={{ width: '64.6%' }}
                    ></div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
