'use client';

import React, { useState } from 'react';

import { Search, MapPin, Home, Star, Shield, Zap } from 'lucide-react';
import { useRouter } from 'next/navigation';

const roomTypes = ['Any Type', 'Single Room', 'Shared Room', 'En-Suite', 'Studio', 'Apartment'];
const locations = [
  'Cape Town (UCT)',
  'Cape Town (CPUT)',
  'Johannesburg (Wits)',
  'Johannesburg (UJ)',
  'Pretoria (UP)',
  'Durban (UKZN)',
  'Stellenbosch (SU)',
];

const trustBadges = [
  { icon: Shield, text: '2,400+ Verified Listings', key: 'trust-verified' },
  { icon: Star, text: '4.8/5 Student Rating', key: 'trust-rating' },
  { icon: Zap, text: 'Instant Booking Available', key: 'trust-instant' },
];

export default function HeroSection() {
  const router = useRouter();
  const [location, setLocation] = useState('');
  const [roomType, setRoomType] = useState('Any Type');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (location) params?.set('location', location);
    if (roomType !== 'Any Type') params?.set('type', roomType);
    if (maxPrice) params?.set('maxPrice', maxPrice);
    router?.push(`/room-listing-page?${params?.toString()}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Background Gradient */}
      <div className="absolute inset-0 hero-gradient" />
      {/* Decorative Blobs */}
      <div className="absolute top-20 right-[10%] w-72 h-72 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />
      {/* Grid Pattern Overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage:
            'linear-gradient(rgba(255,255,255,0.1) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.1) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-16 w-full">
        <div className="max-w-4xl mx-auto text-center">
          {/* Eyebrow */}
          <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
            <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse-slow" />
            <span className="text-white/90 text-sm font-medium">
              1,240 rooms available right now
            </span>
          </div>

          {/* Headline */}
          <h1 className="text-4xl sm:text-5xl lg:text-6xl xl:text-7xl font-bold text-white leading-tight mb-6">
            Find Your Perfect
            <br />
            <span className="bg-gradient-to-r from-blue-200 to-violet-200 bg-clip-text text-transparent">
              Student Home
            </span>
          </h1>

          <p className="text-lg sm:text-xl text-white/75 max-w-2xl mx-auto mb-10 leading-relaxed">
            Search verified boarding houses, hostels, and rental rooms near your university.
            Compare prices, read reviews, and book with confidence.
          </p>

          {/* Search Card */}
          <div className="glass-card p-3 sm:p-4 max-w-3xl mx-auto mb-8">
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-3">
              {/* Location */}
              <div className="relative">
                <MapPin
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
                />
                <select
                  value={location}
                  onChange={(e) => setLocation(e?.target?.value)}
                  className="input-base pl-9 appearance-none cursor-pointer text-gray-700"
                >
                  <option value="">Select University</option>
                  {locations?.map((loc) => (
                    <option key={`loc-${loc}`} value={loc}>
                      {loc}
                    </option>
                  ))}
                </select>
              </div>

              {/* Room Type */}
              <div className="relative">
                <Home
                  size={16}
                  className="absolute left-3 top-1/2 -translate-y-1/2 text-blue-500 pointer-events-none"
                />
                <select
                  value={roomType}
                  onChange={(e) => setRoomType(e?.target?.value)}
                  className="input-base pl-9 appearance-none cursor-pointer text-gray-700"
                >
                  {roomTypes?.map((rt) => (
                    <option key={`rt-${rt}`} value={rt}>
                      {rt}
                    </option>
                  ))}
                </select>
              </div>

              {/* Search Button */}
              <button
                onClick={handleSearch}
                className="btn-primary flex items-center justify-center gap-2 w-full"
              >
                <Search size={17} />
                Search Rooms
              </button>
            </div>

            {/* Quick Filters */}
            <div className="flex flex-wrap gap-2 mt-3 pt-3 border-t border-gray-100">
              <span className="text-xs text-gray-500 font-medium self-center">Popular:</span>
              {['Under R3,500/mo', 'UCT Area', 'Furnished', 'En-Suite', 'Available Now']?.map(
                (tag) => (
                  <button
                    key={`quick-${tag}`}
                    onClick={() => router?.push('/room-listing-page')}
                    className="text-xs bg-blue-50 text-blue-700 hover:bg-blue-100 px-3 py-1.5 rounded-full font-medium transition-colors"
                  >
                    {tag}
                  </button>
                )
              )}
            </div>
          </div>

          {/* Trust Badges */}
          <div className="flex flex-wrap items-center justify-center gap-6">
            {trustBadges?.map((badge) => (
              <div key={badge?.key} className="flex items-center gap-2 text-white/80">
                <badge.icon size={16} className="text-blue-300" />
                <span className="text-sm font-medium">{badge?.text}</span>
              </div>
            ))}
          </div>
        </div>
      </div>
      {/* Wave Divider */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 80" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path
            d="M0 40C240 80 480 0 720 40C960 80 1200 0 1440 40V80H0V40Z"
            fill="#f9fafb"
          />
        </svg>
      </div>
    </section>
  );
}