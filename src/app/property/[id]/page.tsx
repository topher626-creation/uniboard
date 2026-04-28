'use client';

import React, { useState } from 'react';
import { notFound } from 'next/navigation';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';
import AppImage from '@/components/ui/AppImage';
import { properties } from '@/lib/mockData';
import { useAuth } from '@/lib/authContext';
import { MapPin, Star, Shield, Heart, Phone, ChevronLeft, ChevronRight, Wifi, Droplets, Lock, Zap, Car, Utensils, Users, CheckCircle } from 'lucide-react';
import Link from 'next/link';

const WhatsAppIcon = () => (
  <svg viewBox="0 0 24 24" fill="currentColor" className="w-4 h-4">
    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z" />
  </svg>
);

const amenityIcons: Record<string, React.FC<{ size: number; className?: string }>> = {
  WiFi: Wifi,
  Water: Droplets,
  Security: Lock,
  Electricity: Zap,
  Parking: Car,
  Kitchen: Utensils,
};

export default function PropertyDetailPage({ params }: { params: { id: string } }) {
  const property = properties.find((p) => p.id === params.id);
  const { isAuthenticated } = useAuth();
  const [activeImage, setActiveImage] = useState(0);
  const [saved, setSaved] = useState(false);

  if (!property) return notFound();

  const genderLabel = { male: 'Male Only', female: 'Female Only', mixed: 'Mixed / Any Gender' };
  const typeLabel = { shared: 'Shared Room', private: 'Private Room', 'en-suite': 'En-Suite', studio: 'Studio' };

  return (
    <main className="min-h-screen bg-gray-50">
      <Topbar />

      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 pt-24 pb-16">
        {/* Breadcrumb */}
        <div className="flex items-center gap-2 text-sm text-gray-400 mb-6">
          <Link href="/home" className="hover:text-green-700 transition-colors">Home</Link>
          <span>/</span>
          <Link href="/room-listing-page" className="hover:text-green-700 transition-colors">Listings</Link>
          <span>/</span>
          <span className="text-gray-700 truncate">{property.title}</span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Left — Main Content */}
          <div className="lg:col-span-2 space-y-6">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl overflow-hidden border border-gray-100 shadow-sm">
              <div className="relative h-72 sm:h-96">
                <AppImage
                  src={property.images[activeImage]?.src || property.images[0].src}
                  alt={property.images[activeImage]?.alt || property.images[0].alt}
                  fill
                  className="object-cover"
                  sizes="(max-width: 1024px) 100vw, 66vw"
                />
                {property.images.length > 1 && (
                  <>
                    <button onClick={() => setActiveImage((prev) => (prev - 1 + property.images.length) % property.images.length)} className="absolute left-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                      <ChevronLeft size={18} />
                    </button>
                    <button onClick={() => setActiveImage((prev) => (prev + 1) % property.images.length)} className="absolute right-3 top-1/2 -translate-y-1/2 w-9 h-9 bg-white/90 rounded-full flex items-center justify-center shadow-md hover:bg-white transition-colors">
                      <ChevronRight size={18} />
                    </button>
                  </>
                )}
                <div className="absolute top-3 left-3 flex gap-2">
                  {property.verified && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                      <Shield size={10} />
                      Verified Listing
                    </span>
                  )}
                  {!property.available && (
                    <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-red-100 text-red-700">Fully Booked</span>
                  )}
                </div>
              </div>
              {property.images.length > 1 && (
                <div className="flex gap-2 p-3 overflow-x-auto">
                  {property.images.map((img, idx) => (
                    <button key={`thumb-${idx}`} onClick={() => setActiveImage(idx)} className={`relative w-16 h-16 rounded-xl overflow-hidden flex-shrink-0 border-2 transition-all ${activeImage === idx ? 'border-green-600' : 'border-transparent'}`}>
                      <AppImage src={img.src} alt={img.alt} fill className="object-cover" sizes="64px" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Title & Info */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <div className="flex items-start justify-between gap-4 mb-3">
                <h1 className="text-2xl font-bold text-gray-900 leading-tight">{property.title}</h1>
                <button onClick={() => setSaved(!saved)} className="w-10 h-10 rounded-full border border-gray-200 flex items-center justify-center hover:border-red-300 transition-colors flex-shrink-0">
                  <Heart size={18} className={saved ? 'text-red-500 fill-red-500' : 'text-gray-400'} />
                </button>
              </div>
              <div className="flex flex-wrap items-center gap-3 mb-4">
                <div className="flex items-center gap-1.5 text-gray-500 text-sm">
                  <MapPin size={14} className="text-green-600" />
                  {property.location}
                </div>
                <span className="text-gray-300">·</span>
                <span className="text-green-700 text-sm font-medium">{property.distanceFromCampus} to {property.campus}</span>
                <span className="text-gray-300">·</span>
                <div className="flex items-center gap-1">
                  <Star size={13} className="text-amber-400 fill-amber-400" />
                  <span className="text-sm font-semibold text-gray-700">{property.rating}</span>
                  <span className="text-xs text-gray-400">({property.reviewCount} reviews)</span>
                </div>
              </div>
              <div className="flex flex-wrap gap-2">
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-green-100 text-green-700">{typeLabel[property.type]}</span>
                <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-blue-100 text-blue-700">
                  <Users size={10} />
                  {genderLabel[property.genderPreference]}
                </span>
                {property.available ? (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-emerald-100 text-emerald-700">
                    <CheckCircle size={10} />
                    {property.availableSpots} spots available
                  </span>
                ) : (
                  <span className="inline-flex items-center gap-1 px-3 py-1 rounded-full text-xs font-medium bg-red-100 text-red-700">Fully Booked</span>
                )}
              </div>
            </div>

            {/* Description */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-3">About This Bedspace</h2>
              <p className="text-gray-600 text-sm leading-relaxed">{property.description}</p>
            </div>

            {/* Amenities */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4">Amenities</h2>
              <div className="grid grid-cols-2 sm:grid-cols-3 gap-3">
                {property.amenities.map((amenity) => {
                  const IconComp = amenityIcons[amenity];
                  return (
                    <div key={`amenity-${amenity}`} className="flex items-center gap-2.5 bg-gray-50 rounded-xl px-3 py-2.5">
                      {IconComp ? <IconComp size={16} className="text-green-600" /> : <CheckCircle size={16} className="text-green-600" />}
                      <span className="text-sm font-medium text-gray-700">{amenity}</span>
                    </div>
                  );
                })}
              </div>
            </div>

            {/* Reviews */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6">
              <h2 className="font-bold text-gray-900 text-lg mb-4">Student Reviews</h2>
              {property.reviews.length > 0 ? (
                <div className="space-y-4">
                  {property.reviews.map((review) => (
                    <div key={review.id} className="border-b border-gray-100 pb-4 last:border-0 last:pb-0">
                      <div className="flex items-center gap-3 mb-2">
                        <div className="relative w-9 h-9 rounded-full overflow-hidden flex-shrink-0">
                          <AppImage src={review.authorAvatar} alt={`${review.authorName} profile`} fill className="object-cover" sizes="36px" />
                        </div>
                        <div>
                          <div className="flex items-center gap-2">
                            <p className="font-semibold text-gray-900 text-sm">{review.authorName}</p>
                            {review.verifiedStay && (
                              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                                <Shield size={9} />
                                Verified Stay
                              </span>
                            )}
                          </div>
                          <div className="flex gap-0.5">
                            {Array.from({ length: 5 }).map((_, i) => (
                              <Star key={`rev-star-${i}`} size={11} className={i < review.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'} />
                            ))}
                          </div>
                        </div>
                        <span className="ml-auto text-xs text-gray-400">{review.date}</span>
                      </div>
                      <p className="text-gray-600 text-sm leading-relaxed">{review.comment}</p>
                    </div>
                  ))}
                </div>
              ) : (
                <p className="text-gray-400 text-sm">No reviews yet. Be the first to review after your stay.</p>
              )}
            </div>
          </div>

          {/* Right — Sidebar */}
          <div className="space-y-4">
            {/* Price Card */}
            <div className="bg-white rounded-2xl border border-gray-100 shadow-sm p-6 sticky top-20">
              <div className="mb-4">
                <span className="text-3xl font-bold text-gray-900 font-mono">K{property.price.toLocaleString()}</span>
                <span className="text-gray-400 text-sm">/month</span>
              </div>

              {isAuthenticated ? (
                <div className="space-y-3">
                  <a
                    href={`https://wa.me/${property.provider.whatsapp}?text=Hi, I found your listing on UniBoard: ${property.title}. Is it still available?`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="flex items-center justify-center gap-2 w-full bg-green-600 hover:bg-green-700 text-white font-semibold py-3 rounded-xl transition-all duration-150 active:scale-95"
                  >
                    <WhatsAppIcon />
                    WhatsApp Provider
                  </a>
                  <a
                    href={`tel:${property.provider.phone}`}
                    className="flex items-center justify-center gap-2 w-full border-2 border-green-600 text-green-700 hover:bg-green-50 font-semibold py-3 rounded-xl transition-all duration-150"
                  >
                    <Phone size={16} />
                    Call Provider
                  </a>
                </div>
              ) : (
                <div className="space-y-3">
                  <div className="bg-amber-50 border border-amber-200 rounded-xl p-3 text-center">
                    <p className="text-amber-800 text-sm font-medium mb-1">Login to contact provider</p>
                    <p className="text-amber-600 text-xs">Create a free account to see full contact details</p>
                  </div>
                  <Link href="/sign-up-login-screen" className="flex items-center justify-center gap-2 w-full bg-green-700 hover:bg-green-800 text-white font-semibold py-3 rounded-xl transition-all duration-150">
                    Login to Contact
                  </Link>
                </div>
              )}

              <div className="mt-5 pt-5 border-t border-gray-100">
                <h3 className="font-semibold text-gray-900 text-sm mb-3">Provider</h3>
                <div className="flex items-center gap-3">
                  <div className="relative w-10 h-10 rounded-xl overflow-hidden flex-shrink-0">
                    <AppImage src={property.provider.avatar} alt={`${property.provider.name} provider photo`} fill className="object-cover" sizes="40px" />
                  </div>
                  <div>
                    <div className="flex items-center gap-1.5">
                      <p className="font-semibold text-gray-900 text-sm">{property.provider.name}</p>
                      {property.provider.verified && <Shield size={12} className="text-green-600" />}
                    </div>
                    <p className="text-xs text-gray-500">{property.provider.compoundName}</p>
                  </div>
                </div>
                {property.provider.verified && (
                  <div className="mt-3 flex items-center gap-2 bg-green-50 rounded-xl px-3 py-2">
                    <Shield size={14} className="text-green-600 flex-shrink-0" />
                    <p className="text-xs text-green-700 font-medium">Verified Provider — documents checked by UniBoard</p>
                  </div>
                )}
              </div>
            </div>
          </div>
        </div>
      </div>

      <Footer />
    </main>
  );
}
