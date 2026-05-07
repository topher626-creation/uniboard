import React from 'react';
import Link from 'next/link';
import { universities } from '@/lib/mockData';

export default function UniversitySection() {
  return (
    <section className="py-14 bg-gray-50">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-8">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-2">Browse by Campus</p>
            <h2 className="text-2xl xl:text-3xl font-bold text-gray-900">Popular Universities</h2>
          </div>
          <Link href="/room-listing-page" className="text-sm font-semibold text-green-700 hover:text-green-800 transition-colors flex-shrink-0">
            View all listings →
          </Link>
        </div>
        <div className="flex flex-wrap gap-3">
          {universities?.map((uni) => (
            <Link
              key={uni?.id}
              href={`/room-listing-page?campus=${uni?.name}`}
              className="group flex items-center gap-3 bg-white border border-gray-200 hover:border-green-400 hover:shadow-md rounded-2xl px-5 py-3.5 transition-all duration-200"
            >
              <div className={`w-10 h-10 ${uni?.color} rounded-xl flex items-center justify-center font-bold text-sm flex-shrink-0`}>
                {uni?.name?.charAt(0)}
              </div>
              <div>
                <p className="font-semibold text-gray-900 text-sm group-hover:text-green-700 transition-colors">{uni?.name}</p>
                <p className="text-xs text-gray-400">{uni?.city}</p>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
