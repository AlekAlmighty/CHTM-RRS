"use client";

import React from 'react';
import Sidebar from '@/app/components/Sidebar';
import TopBar from '@/app/components/TopBar';

export default function RoomsInventory() {
  const rooms = [
    {
      id: '101',
      title: 'Room 101',
      description:
        'Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam, ut aliquam massa nisl suspendisse in orci enim.',
      price: 500000,
      img: 'https://via.placeholder.com/800x450?text=Room+101',
    },
    {
      id: '102',
      title: 'Room 102',
      description:
        'Etiam pharetra erat sed fermentum feugiat velit mauris egestas quam, ut aliquam massa nisl suspendisse in orci enim.',
      price: 1500000,
      img: 'https://via.placeholder.com/800x450?text=Room+102',
    },
  ];

  return (
    <div className="flex min-h-screen bg-gray-50">
      <Sidebar activeMenu="rooms" />

      <main className="flex-1 ml-64 p-8">
        <TopBar />

        <div className="p-6">
          <h1 className="text-4xl font-bold text-gray-900 mb-6">Room Inventory</h1>

          <div className="bg-white rounded-xl p-6 border border-gray-200">
            <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
              {rooms.map((r) => (
                <div key={r.id} className="relative bg-white rounded-lg border border-gray-200 shadow-sm overflow-hidden">
                  <div className="rounded-lg overflow-hidden border-b border-gray-200">
                    <div className="h-56 bg-center bg-cover rounded-t-lg border-b border-gray-200" style={{ backgroundImage: `url(${r.img})` }} role="img" aria-label={r.title} />
                    <div className="p-4 bg-gray-100 rounded-b-lg">
                      <h3 className="text-lg font-semibold text-teal-600 mb-2">{r.title}</h3>
                      <p className="text-sm text-gray-800 mb-4">{r.description}</p>
                      <div className="text-lg font-bold text-gray-900">${r.price.toLocaleString()}<span className="text-teal-600 text-sm">/night</span></div>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </main>
    </div>
  );
}
