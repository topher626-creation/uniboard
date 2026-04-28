import React from 'react';
import { Home, Users, CheckCircle, Star } from 'lucide-react';

const stats = [
  { key: 'stat-listings', icon: Home, value: '1,240+', label: 'Active Bedspaces', color: 'text-green-700', bg: 'bg-green-50' },
  { key: 'stat-students', icon: Users, value: '8,500+', label: 'Students Housed', color: 'text-amber-600', bg: 'bg-amber-50' },
  { key: 'stat-providers', icon: CheckCircle, value: '340+', label: 'Verified Providers', color: 'text-green-600', bg: 'bg-green-50' },
  { key: 'stat-rating', icon: Star, value: '4.8/5', label: 'Student Rating', color: 'text-amber-600', bg: 'bg-amber-50' },
];

export default function StatsBar() {
  return (
    <section className="bg-white border-b border-gray-100">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-10">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-8">
          {stats?.map((stat) => (
            <div key={stat?.key} className="flex items-center gap-4">
              <div className={`w-12 h-12 ${stat?.bg} rounded-2xl flex items-center justify-center flex-shrink-0`}>
                <stat.icon size={22} className={stat?.color} />
              </div>
              <div>
                <div className={`text-2xl xl:text-3xl font-bold font-mono ${stat?.color}`}>{stat?.value}</div>
                <div className="text-sm text-gray-500 font-medium mt-0.5">{stat?.label}</div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}