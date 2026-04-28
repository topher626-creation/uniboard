import React from 'react';
import Link from 'next/link';
import AppImage from '@/components/ui/AppImage';
import { MapPin, Star, Shield, Wifi, Car, Coffee, ArrowRight } from 'lucide-react';

const featuredProperties = [
{
  id: 'prop-001',
  title: 'The Varsity Loft — En-Suite Rooms',
  location: 'Observatory, Cape Town',
  university: '0.8 km to UCT',
  price: 4200,
  roomType: 'En-Suite',
  rating: 4.9,
  reviewCount: 47,
  verified: true,
  available: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_18ba03398-1771488812434.png",
  imageAlt: 'Modern en-suite student room with white walls and desk near window',
  amenities: ['wifi', 'laundry', 'kitchen'],
  landlord: 'Sipho Dlamini'
},
{
  id: 'prop-002',
  title: 'Braamfontein Student House',
  location: 'Braamfontein, Johannesburg',
  university: '1.2 km to Wits',
  price: 2800,
  roomType: 'Single Room',
  rating: 4.7,
  reviewCount: 31,
  verified: true,
  available: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1068df229-1772203557350.png",
  imageAlt: 'Cozy single student room with wooden floors and natural light',
  amenities: ['wifi', 'kitchen', 'security'],
  landlord: 'Thandi Mokoena'
},
{
  id: 'prop-003',
  title: 'Hatfield Studio Apartments',
  location: 'Hatfield, Pretoria',
  university: '0.5 km to UP',
  price: 5500,
  roomType: 'Studio',
  rating: 4.8,
  reviewCount: 28,
  verified: true,
  available: false,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10d6bb2b9-1773665075955.png",
  imageAlt: 'Compact studio apartment with kitchenette and modern furniture',
  amenities: ['wifi', 'parking', 'gym'],
  landlord: 'Rikus van der Berg'
},
{
  id: 'prop-004',
  title: 'Mowbray Shared Residence',
  location: 'Mowbray, Cape Town',
  university: '1.5 km to UCT',
  price: 2100,
  roomType: 'Shared Room',
  rating: 4.5,
  reviewCount: 62,
  verified: true,
  available: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_12c936ae9-1772145093120.png",
  imageAlt: 'Shared student room with two beds and organized storage space',
  amenities: ['wifi', 'laundry', 'kitchen'],
  landlord: 'Amara Osei'
},
{
  id: 'prop-005',
  title: 'Greyville Heights — Furnished Rooms',
  location: 'Greyville, Durban',
  university: '0.9 km to UKZN',
  price: 3100,
  roomType: 'En-Suite',
  rating: 4.6,
  reviewCount: 19,
  verified: false,
  available: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_1b650c633-1772202771336.png",
  imageAlt: 'Furnished en-suite room with study area and private bathroom',
  amenities: ['wifi', 'security', 'kitchen'],
  landlord: 'Priya Naidoo'
},
{
  id: 'prop-006',
  title: 'Stellenbosch Central Cottage',
  location: 'Central, Stellenbosch',
  university: '0.3 km to SU',
  price: 3800,
  roomType: 'Single Room',
  rating: 4.9,
  reviewCount: 54,
  verified: true,
  available: true,
  image: "https://img.rocket.new/generatedImages/rocket_gen_img_10b41dcd4-1772204106362.png",
  imageAlt: 'Charming single room in cottage with warm lighting and wooden desk',
  amenities: ['wifi', 'parking', 'garden'],
  landlord: 'Liezel Joubert'
}];


const amenityIcons: Record<string, React.FC<{size: number;}>> = {
  wifi: Wifi,
  parking: Car,
  kitchen: Coffee
};

const roomTypeBadge: Record<string, string> = {
  'En-Suite': 'badge-blue',
  'Single Room': 'badge-violet',
  'Shared Room': 'badge-amber',
  Studio: 'badge-green'
};

export default function FeaturedListings() {
  return (
    <section className="py-20 bg-gray-50" id="featured">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between gap-4 mb-10">
          <div>
            <p className="section-label mb-2">Curated for You</p>
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900">
              Featured Listings
            </h2>
            <p className="text-gray-500 mt-2 text-base">
              Hand-picked, verified properties near top universities
            </p>
          </div>
          <Link
            href="/room-listing-page"
            className="flex items-center gap-2 text-blue-600 font-semibold text-sm hover:gap-3 transition-all duration-200 flex-shrink-0">

            View all listings
            <ArrowRight size={16} />
          </Link>
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3 gap-6">
          {featuredProperties.map((prop) =>
          <Link
            key={prop.id}
            href="/room-listing-page"
            className="card-base card-hover group block overflow-hidden">

              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <AppImage
                src={prop.image}
                alt={prop.imageAlt}
                fill
                className="object-cover group-hover:scale-105 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw" />

                {/* Overlay badges */}
                <div className="absolute top-3 left-3 flex gap-2">
                  <span className={`badge ${roomTypeBadge[prop.roomType] || 'badge-blue'} shadow-sm`}>
                    {prop.roomType}
                  </span>
                  {prop.verified &&
                <span className="badge badge-green shadow-sm">
                      <Shield size={10} />
                      Verified
                    </span>
                }
                </div>
                {/* Availability */}
                {!prop.available &&
              <div className="absolute inset-0 bg-black/50 flex items-center justify-center">
                    <span className="bg-red-500 text-white text-sm font-bold px-4 py-1.5 rounded-full">
                      Fully Booked
                    </span>
                  </div>
              }
              </div>

              {/* Content */}
              <div className="p-5">
                <div className="flex items-start justify-between gap-2 mb-2">
                  <h3 className="font-semibold text-gray-900 text-base leading-snug group-hover:text-blue-600 transition-colors line-clamp-1">
                    {prop.title}
                  </h3>
                  <div className="flex items-center gap-1 flex-shrink-0">
                    <Star size={13} className="text-amber-400 fill-amber-400" />
                    <span className="text-sm font-semibold text-gray-700">{prop.rating}</span>
                    <span className="text-xs text-gray-400">({prop.reviewCount})</span>
                  </div>
                </div>

                <div className="flex items-center gap-1.5 text-gray-500 text-sm mb-3">
                  <MapPin size={13} className="text-blue-500 flex-shrink-0" />
                  <span className="truncate">{prop.location}</span>
                  <span className="text-gray-300">·</span>
                  <span className="text-blue-600 font-medium text-xs flex-shrink-0">{prop.university}</span>
                </div>

                {/* Amenities */}
                <div className="flex items-center gap-2 mb-4">
                  {prop.amenities.slice(0, 3).map((amenity) => {
                  const IconComp = amenityIcons[amenity];
                  return IconComp ?
                  <div
                    key={`${prop.id}-amenity-${amenity}`}
                    className="w-7 h-7 bg-gray-100 rounded-lg flex items-center justify-center"
                    title={amenity}>

                        <IconComp size={13} />
                      </div> :
                  null;
                })}
                </div>

                {/* Price + CTA */}
                <div className="flex items-center justify-between">
                  <div>
                    <span className="price-display text-xl font-bold text-gray-900">
                      R{prop.price.toLocaleString()}
                    </span>
                    <span className="text-gray-400 text-sm">/month</span>
                  </div>
                  <button className="text-xs font-semibold text-blue-600 bg-blue-50 hover:bg-blue-100 px-3 py-1.5 rounded-lg transition-colors">
                    View Details
                  </button>
                </div>
              </div>
            </Link>
          )}
        </div>
      </div>
    </section>);

}