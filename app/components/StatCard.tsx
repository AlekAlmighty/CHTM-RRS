import React from 'react';

interface StatCardProps {
  title: string;
  value: string | number;
  icon: React.ReactNode;
  change?: string;
  changeType?: 'positive' | 'negative';
  color: 'blue' | 'pink' | 'green' | 'yellow';
  subtitle?: string;
}

const colorClasses = {
  blue: 'border-blue-400 bg-blue-50',
  pink: 'border-pink-400 bg-pink-50',
  green: 'border-green-400 bg-green-50',
  yellow: 'border-yellow-400 bg-yellow-50',
};

const iconColorClasses = {
  blue: 'text-blue-600',
  pink: 'text-pink-600',
  green: 'text-green-600',
  yellow: 'text-yellow-600',
};

export default function StatCard({
  title,
  value,
  icon,
  change,
  changeType = 'positive',
  color,
  subtitle,
}: StatCardProps) {
  return (
    <div className={`rounded-lg border-l-4 ${colorClasses[color]} p-6 shadow-md`}>
      <div className="flex items-start justify-between">
        <div>
          <p className="text-gray-600 text-sm font-medium uppercase tracking-wider">{title}</p>
          <p className="text-3xl font-bold text-gray-800 mt-2">{value}</p>
          {subtitle && <p className={`text-sm mt-1 ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
            {subtitle}
          </p>}
          {change && (
            <p className={`text-sm mt-2 font-semibold ${changeType === 'positive' ? 'text-green-600' : 'text-red-600'}`}>
              {changeType === 'positive' ? '↑' : '↓'} {change} vs yesterday
            </p>
          )}
        </div>
        <div className={`text-2xl ${iconColorClasses[color]}`}>{icon}</div>
      </div>
    </div>
  );
}
