import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { Star, Quote } from 'lucide-react';

const testimonials = [
{
  id: 'review-001',
  name: 'Nomvula Khumalo',
  university: 'University of Cape Town, 2nd Year',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_10a397da6-1772094815227.png",
  avatarAlt: 'Young woman with natural hair smiling in university courtyard',
  rating: 5,
  text: "I was panicking three weeks before the semester started — no accommodation and no idea where to look. UniBoard had listings sorted by distance to UCT and I found a verified en-suite within two days. The landlord responded within an hour. Absolutely lifesaving.",
  property: 'The Varsity Loft, Observatory',
  highlight: 'Found a room in 2 days'
},
{
  id: 'review-002',
  name: 'Kagiso Sithole',
  university: 'University of the Witwatersrand, 3rd Year',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_15323d9ba-1772556075899.png",
  avatarAlt: 'Young man in casual shirt with warm smile outdoors',
  rating: 5,
  text: "The verification badge made all the difference. I'd been scammed before on another platform, so seeing that UniBoard physically verifies landlords gave me real confidence. The room photos were accurate and the price matched exactly what was advertised.",
  property: 'Braamfontein Student House',
  highlight: 'No scams, fully transparent'
},
{
  id: 'review-003',
  name: 'Aisha Patel',
  university: 'University of Pretoria, 1st Year',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1e5336137-1771896332044.png",
  avatarAlt: 'Young woman with dark hair smiling in campus setting',
  rating: 4,
  text: "Moving from Durban to Pretoria for my first year was terrifying. UniBoard's campus distance filter helped me find a studio 500m from UP's main gate. The booking process was smooth and I had confirmation before my parents even finished worrying.",
  property: 'Hatfield Studio Apartments',
  highlight: '500m from campus'
}];


export default function Testimonials() {
  return (
    <section className="py-20 bg-gray-50" id="testimonials">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="section-label mb-2">Student Stories</p>
          <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
            What Students Are Saying
          </h2>
          <p className="text-gray-500 text-base">
            Real experiences from students who found their home through UniBoard
          </p>
        </div>

        {/* Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((review) =>
          <div
            key={review?.id}
            className="card-base p-6 flex flex-col gap-4 relative">

              {/* Quote Icon */}
              <div className="absolute top-5 right-5 text-blue-100">
                <Quote size={32} className="fill-blue-100 text-blue-100" />
              </div>

              {/* Stars */}
              <div className="flex gap-1">
                {Array.from({ length: 5 })?.map((_, i) =>
              <Star
                key={`${review?.id}-star-${i}`}
                size={15}
                className={
                i < review?.rating ?
                'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'
                } />

              )}
              </div>

              {/* Highlight Badge */}
              <span className="badge badge-blue w-fit">{review?.highlight}</span>

              {/* Quote */}
              <p className="text-gray-600 text-sm leading-relaxed flex-1">
                &ldquo;{review?.text}&rdquo;
              </p>

              {/* Property */}
              <p className="text-xs text-blue-600 font-medium">{review?.property}</p>

              {/* Author */}
              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage
                  src={review?.avatar}
                  alt={review?.avatarAlt}
                  fill
                  className="object-cover"
                  sizes="40px" />

                </div>
                <div>
                  <p className="font-semibold text-gray-900 text-sm">{review?.name}</p>
                  <p className="text-xs text-gray-400">{review?.university}</p>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>);

}