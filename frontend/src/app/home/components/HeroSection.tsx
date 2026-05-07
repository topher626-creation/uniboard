'use client';

import React, { useState } from 'react';
import { Search, MapPin, Home, Shield, Users, Star } from 'lucide-react';
import { useRouter } from 'next/navigation';

const universities = ['UNZA', 'CBU', 'MUKUBA', 'Mulungushi', 'Kwame Nkrumah', 'UNILUS'];
const roomTypes = ['Any Type', 'Shared Room', 'Private Room', 'En-Suite', 'Studio'];
const trustBadges = [
  { icon: Shield, text: '340+ Verified Providers', key: 'trust-verified' },
  { icon: Users, text: '8,500+ Students Housed', key: 'trust-students' },
  { icon: Star, text: '4.8/5 Average Rating', key: 'trust-rating' },
];

export default function HeroSection() {
  const router = useRouter();
  const [university, setUniversity] = useState('');
  const [roomType, setRoomType] = useState('Any Type');
  const [maxPrice, setMaxPrice] = useState('');

  const handleSearch = () => {
    const params = new URLSearchParams();
    if (university) params?.set('campus', university);
    if (roomType !== 'Any Type') params?.set('type', roomType);
    if (maxPrice) params?.set('maxPrice', maxPrice);
    router?.push(`/room-listing-page?${params?.toString()}`);
  };

  return (
    <section className="relative min-h-[92vh] flex items-center justify-center overflow-hidden">
      {/* Animated gradient background */}
      <div className="absolute inset-0" style={{ background: 'linear-gradient(135deg, #0a2e1a 0%, #1B4332 45%, #2d6a4f 100%)' }} />
      {/* Decorative elements */}
      <div className="absolute top-20 right-[8%] w-80 h-80 bg-green-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-20 left-[5%] w-96 h-96 bg-amber-400/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[600px] h-[600px] bg-green-600/5 rounded-full blur-3xl pointer-events-none" />
      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-5"
        style={{
          backgroundImage: 'linear-gradient(rgba(255,255,255,0.15) 1px, transparent 1px), linear-gradient(90deg, rgba(255,255,255,0.15) 1px, transparent 1px)',
          backgroundSize: '40px 40px',
        }}
      />
      <div className="relative z-10 max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-16 w-full">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-center">
          {/* Left — Text */}
          <div className="lg:col-span-3">
            <div className="inline-flex items-center gap-2 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full px-4 py-1.5 mb-6">
              <span className="w-2 h-2 rounded-full bg-green-400 animate-pulse" />
              <span className="text-white/90 text-sm font-medium">1,240 bedspaces available right now</span>
            </div>

            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-white leading-tight mb-5">
              Find trusted student
              <br />
              <span className="text-amber-400">accommodation</span>
              <br />
              near your campus
            </h1>

            <p className="text-lg text-white/70 max-w-xl mb-8 leading-relaxed">
              Discover verified off-campus bedspaces near your university. Connect directly with trusted landlords and providers across Zambia.
            </p>

            {/* Search Card */}
            <div className="bg-white/95 backdrop-blur-md rounded-2xl p-4 shadow-2xl max-w-2xl">
              <div className="grid grid-cols-1 sm:grid-cols-3 gap-3 mb-3">
                <div className="relative">
                  <MapPin size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 pointer-events-none" />
                  <select
                    value={university}
                    onChange={(e) => setUniversity(e?.target?.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 appearance-none cursor-pointer"
                  >
                    <option value="">Select University</option>
                    {universities?.map((u) => (
                      <option key={`hero-univ-${u}`} value={u}>{u}</option>
                    ))}
                  </select>
                </div>
                <div className="relative">
                  <Home size={15} className="absolute left-3 top-1/2 -translate-y-1/2 text-green-600 pointer-events-none" />
                  <select
                    value={roomType}
                    onChange={(e) => setRoomType(e?.target?.value)}
                    className="w-full pl-9 pr-3 py-2.5 rounded-xl border border-gray-200 bg-white text-sm font-medium text-gray-700 focus:outline-none focus:ring-2 focus:ring-green-500/30 focus:border-green-500 appearance-none cursor-pointer"
                  >
                    {roomTypes?.map((rt) => (
                      <option key={`hero-rt-${rt}`} value={rt}>{rt}</option>
                    ))}
                  </select>
                </div>
                <button
                  onClick={handleSearch}
                  className="flex items-center justify-center gap-2 bg-green-700 hover:bg-green-800 text-white font-semibold py-2.5 px-4 rounded-xl transition-all duration-150 active:scale-95"
                >
                  <Search size={16} />
                  Browse Bedspaces
                </button>
              </div>
              <div className="flex flex-wrap gap-2 pt-2 border-t border-gray-100">
                <span className="text-xs text-gray-400 font-medium self-center">Popular:</span>
                {['Under K2,000/mo', 'Near UNZA', 'En-Suite', 'Female Only', 'Available Now']?.map((tag) => (
                  <button
                    key={`quick-${tag}`}
                    onClick={() => router?.push('/room-listing-page')}
                    className="text-xs bg-green-50 text-green-700 hover:bg-green-100 px-3 py-1.5 rounded-full font-medium transition-colors"
                  >
                    {tag}
                  </button>
                ))}
              </div>
            </div>

            {/* Trust badges */}
            <div className="flex flex-wrap items-center gap-5 mt-7">
              {trustBadges?.map((badge) => (
                <div key={badge?.key} className="flex items-center gap-2 text-white/75">
                  <badge.icon size={15} className="text-green-400" />
                  <span className="text-sm font-medium">{badge?.text}</span>
                </div>
              ))}
            </div>
          </div>

          {/* Right — Visual */}
          <div className="lg:col-span-2 hidden lg:flex flex-col gap-4">
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
              <div className="flex items-center gap-3 mb-3">
                <div className="w-10 h-10 rounded-full bg-green-400/20 flex items-center justify-center">
                  <Shield size={20} className="text-green-400" />
                </div>
                <div>
                  <p className="text-white font-semibold text-sm">Verified Provider</p>
                  <p className="text-white/60 text-xs">Mwale Student Residences</p>
                </div>
                <span className="ml-auto text-xs bg-green-500/20 text-green-400 border border-green-500/30 px-2 py-0.5 rounded-full">✓ Verified</span>
              </div>
              <p className="text-white/60 text-xs leading-relaxed">Northmead Student Lodge — En-Suite Rooms near UNZA</p>
              <div className="flex items-center justify-between mt-3">
                <span className="text-amber-400 font-bold text-lg">K2,800<span className="text-white/40 text-xs font-normal">/month</span></span>
                <span className="text-xs text-green-400 bg-green-500/10 px-2 py-0.5 rounded-full">3 spots left</span>
              </div>
            </div>
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-5">
              <p className="text-white/50 text-xs mb-2 uppercase tracking-wider font-semibold">Universities Covered</p>
              <div className="flex flex-wrap gap-2">
                {universities?.map((u) => (
                  <span key={`hero-badge-${u}`} className="text-xs bg-white/10 text-white/80 border border-white/20 px-2.5 py-1 rounded-full">{u}</span>
                ))}
              </div>
            </div>
            <div className="bg-amber-500/10 backdrop-blur-sm border border-amber-500/20 rounded-2xl p-4">
              <div className="flex items-center gap-2 mb-1">
                <Star size={14} className="text-amber-400 fill-amber-400" />
                <span className="text-white font-semibold text-sm">4.9 / 5</span>
              </div>
              <p className="text-white/60 text-xs">&ldquo;Found my room in 2 days. The verification badge gave me real confidence.&rdquo;</p>
              <p className="text-white/40 text-xs mt-1">— Chipo M., UNZA 2nd Year</p>
            </div>
          </div>
        </div>
      </div>
      {/* Wave */}
      <div className="absolute bottom-0 left-0 right-0">
        <svg viewBox="0 0 1440 60" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-full">
          <path d="M0 30C240 60 480 0 720 30C960 60 1200 0 1440 30V60H0V30Z" fill="#f9fafb" />
        </svg>
      </div>
    </section>
  );
}