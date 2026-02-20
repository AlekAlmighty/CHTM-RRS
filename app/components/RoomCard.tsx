import React from 'react';

interface RoomCardProps {
  roomNumber: string;
  type: string;
  status: 'available' | 'occupied';
  floor: string;
  roomCategory: string;
  capacity: number;
  bedType: string;
  ratePerNight: number;
  lastCleaned: string;
  amenities: string[];
  onEdit?: () => void;
  onDetails?: () => void;
  onBook?: () => void;
}

export default function RoomCard({
  roomNumber,
  type,
  status,
  floor,
  roomCategory,
  capacity,
  bedType,
  ratePerNight,
  lastCleaned,
  amenities,
  onEdit,
  onDetails,
  onBook,
}: RoomCardProps) {
  const isAvailable = status === 'available';

  return (
    <div className="bg-white rounded-lg shadow-md overflow-hidden border border-gray-200 hover:shadow-lg transition">
      {/* Header */}
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-start justify-between mb-4">
          <div>
            <h3 className="text-2xl font-bold text-gray-800">Room {roomNumber}</h3>
            <p className="text-gray-600 text-sm">{floor} • {roomCategory}</p>
          </div>
          <span className={`px-3 py-1 rounded-full text-xs font-semibold ${
            isAvailable 
              ? 'bg-green-100 text-green-700' 
              : 'bg-pink-100 text-pink-700'
          }`}>
            {isAvailable ? '✓ Available' : 'Occupied'}
          </span>
        </div>
      </div>

      {/* Content */}
      <div className="p-6 space-y-4">
        <div className="grid grid-cols-2 gap-4">
          <div>
            <p className="text-gray-600 uppercase text-xs font-semibold">Capacity</p>
            <p className="text-lg font-bold text-gray-800">{capacity} Guests</p>
          </div>
          <div>
            <p className="text-gray-600 uppercase text-xs font-semibold">Bed Type</p>
            <p className="text-lg font-bold text-gray-800">{bedType}</p>
          </div>
          <div>
            <p className="text-gray-600 uppercase text-xs font-semibold">Last Cleaned</p>
            <p className="text-sm text-gray-800">{lastCleaned}</p>
          </div>
          <div>
            <p className="text-gray-600 uppercase text-xs font-semibold">Rate/Night</p>
            <p className="text-lg font-bold text-gray-800">₱ {ratePerNight.toLocaleString()}</p>
          </div>
        </div>

        {/* Amenities */}
        <div>
          <p className="text-gray-600 uppercase text-xs font-semibold mb-2">Amenities</p>
          <div className="flex flex-wrap gap-2">
            {amenities.map((amenity) => (
              <span key={amenity} className="bg-gray-200 text-gray-700 text-xs px-2 py-1 rounded">
                {amenity}
              </span>
            ))}
          </div>
        </div>
      </div>

      {/* Actions */}
      <div className="bg-gray-50 px-6 py-4 flex gap-3">
        <button
          onClick={onEdit}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm font-medium"
        >
          ✎ Edit
        </button>
        <button
          onClick={onDetails}
          className="flex-1 px-4 py-2 border border-gray-300 text-gray-700 rounded-lg hover:bg-gray-100 transition text-sm font-medium"
        >
          ◎ Details
        </button>
        {isAvailable && (
          <button
            onClick={onBook}
            className="flex-1 px-4 py-2 bg-teal-700 text-white rounded-lg hover:bg-teal-800 transition text-sm font-medium"
          >
            ✓ Book Now
          </button>
        )}
      </div>
    </div>
  );
}
