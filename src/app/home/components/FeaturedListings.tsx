'use client';
import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { MapPin, Star, Shield, Heart, Phone } from 'lucide-react';
import { properties } from '@/lib/mockData';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-3.5 h-3.5">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const featuredProps = properties.filter((p) => p.featured).slice(0, 6);

const typeColors: Record<string, string> = {
  'en-suite': 'bg-green-100 text-green-700',
  shared: 'bg-blue-100 text-blue-700',
  private: 'bg-purple-100 text-purple-700',
  studio: 'bg-amber-100 text-amber-700',
};

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-white" id="featured">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-2">Curated for You</p>
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900">Featured Bedspaces</h2>
            <p className="text-gray-500 mt-2 text-base">Hand-picked, verified properties near top Zambian universities</p>
          </div>
          <Link href="/room-listing-page" className="flex items-center gap-2 text-green-700 font-semibold text-sm hover:text-green-800 transition-colors flex-shrink-0">
            View all listings →
          </Link>
        </div>

        {/* Bento-style grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredProps.map((prop) => (
            <Link
              key={prop.id}
              href={`/property/${prop.id}`}
              className="group block bg-white rounded-2xl shadow-sm border border-gray-100 hover:shadow-xl hover:-translate-y-1 transition-all duration-300 overflow-hidden"
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                  src={prop.images[0].src}
                  alt={prop.images[0].alt}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                />
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium ${typeColors[prop.type] || 'bg-gray-100 text-gray-700'}`}>
                    {prop.type.charAt(0).toUpperCase() + prop.type.slice(1)}
                  </span>
                  {prop.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <Shield size={10} />
                      Verified
                    </span>
                  )}
                </div>
                <button
                  onClick={(e) => e.preventDefault()}
                  className="absolute top-3 right-3 w-8 h-8 bg-white/90 rounded-full flex items-center justify-center hover:bg-white transition-colors shadow-sm"
                >
                  <Heart size={14} className="text-gray-400 hover:text-red-500 transition-colors" />
                </button>
                {!prop.available && (
                  <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">Fully Booked</span>
                  </div>
                )}
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-base leading-snug group-hover:text-green-700 transition-colors line-clamp-1">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-700">{prop.rating}</span>
                    <span className="text-xs text-gray-400">({prop.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-1">
                  <MapPin size={13} className="text-green-600 flex-shrink-0" />
                  <span className="truncate">{prop.location}</span>
                </div>
                <div className="text-xs text-green-700 font-medium mb-3">{prop.distanceFromCampus} to {prop.campus}</div>

                <div className="flex items-center gap-1.5 mb-4">
                  {prop.amenities.slice(0, 3).map((a) => (
                    <span key={`${prop.id}-am-${a}`} className="text-xs bg-gray-100 text-gray-600 px-2 py-0.5 rounded-full">{a}</span>
                  ))}
                </div>

                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xl font-bold text-gray-900 font-mono">K{prop.price.toLocaleString()}</span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <div className="flex items-center gap-2">
                    <button
                      onClick={(e) => { e.preventDefault(); window.open(`https://wa.me/${prop.provider.whatsapp}`, '_blank'); }}
                      className="flex items-center gap-1 text-xs font-semibold text-white bg-green-600 hover:bg-green-700 px-2.5 py-1.5 rounded-lg transition-colors"
                    >
                      <WhatsAppIcon />
                      WhatsApp
                    </button>
                    <button
                      onClick={(e) => { e.preventDefault(); window.open(`tel:${prop.provider.phone}`, '_self'); }}
                      className="flex items-center gap-1 text-xs font-semibold text-green-700 border border-green-300 hover:bg-green-50 px-2.5 py-1.5 rounded-lg transition-colors"
                    >
                      <Phone size={11} />
                      Call
                    </button>
                  </div>
                </div>
              </div>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
