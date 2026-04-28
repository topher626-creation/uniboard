import React from 'react';
import AppImage from '@/components/ui/AppImage';
import { Star, Shield } from 'lucide-react';

const testimonials = [
{
  id: 'review-001',
  name: 'Chipo Mwanza',
  university: 'University of Zambia, 2nd Year',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1686e3ef2-1772811405606.png",
  avatarAlt: 'Young Zambian woman smiling in university courtyard',
  rating: 5,
  text: 'I was panicking three weeks before semester started — no accommodation and no idea where to look. UniBoard had listings sorted by distance to UNZA and I found a verified en-suite within two days. The landlord responded within an hour. Absolutely lifesaving.',
  property: 'Northmead Student Lodge, Lusaka',
  highlight: 'Found a room in 2 days',
  verifiedStay: true
},
{
  id: 'review-002',
  name: 'Mulenga Kapata',
  university: 'Copperbelt University, 3rd Year',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1ece17484-1763301747443.png",
  avatarAlt: 'Young Zambian man smiling outdoors near campus',
  rating: 5,
  text: "The verification badge made all the difference. I'd been scammed before on another platform, so seeing that UniBoard physically verifies providers gave me real confidence. The room photos were accurate and the price matched exactly what was advertised.",
  property: 'Riverside Shared Rooms, Kitwe',
  highlight: 'No scams, fully transparent',
  verifiedStay: true
},
{
  id: 'review-003',
  name: 'Thandiwe Mwale',
  university: 'Mulungushi University, 1st Year',
  avatar: "https://img.rocket.new/generatedImages/rocket_gen_img_1f2617586-1763301756396.png",
  avatarAlt: 'Young Zambian woman smiling in campus setting',
  rating: 4,
  text: "Moving from Livingstone to Kabwe for my first year was terrifying. UniBoard's campus distance filter helped me find a hostel 300m from Mulungushi's main gate. The booking process was smooth and I had confirmation before my parents even finished worrying.",
  property: 'Mulungushi View Hostel, Kabwe',
  highlight: '300m from campus',
  verifiedStay: true
}];


export default function Testimonials() {
  return (
    <section className="py-20 bg-white" id="testimonials">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="text-center max-w-2xl mx-auto mb-12">
          <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-2">Student Stories</p>
          <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">What Zambian Students Are Saying</h2>
          <p className="text-gray-500 text-base">Real experiences from students who found their home through UniBoard</p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {testimonials?.map((review) =>
          <div key={review?.id} className="bg-white rounded-2xl shadow-sm border border-gray-100 p-6 flex flex-col gap-4 hover:shadow-md transition-all duration-200">
              <div className="flex gap-1">
                {Array.from({ length: 5 })?.map((_, i) =>
              <Star key={`${review?.id}-star-${i}`} size={15} className={i < review?.rating ? 'text-amber-400 fill-amber-400' : 'text-gray-200 fill-gray-200'} />
              )}
              </div>

              <div className="flex items-center gap-2">
                <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full text-xs font-medium bg-green-100 text-green-700">
                  {review?.highlight}
                </span>
                {review?.verifiedStay &&
              <span className="inline-flex items-center gap-1 px-2 py-0.5 rounded-full text-xs font-medium bg-blue-50 text-blue-600">
                    <Shield size={9} />
                    Verified Stay
                  </span>
              }
              </div>

              <p className="text-gray-600 text-sm leading-relaxed flex-1">&ldquo;{review?.text}&rdquo;</p>
              <p className="text-xs text-green-700 font-medium">{review?.property}</p>

              <div className="flex items-center gap-3 pt-3 border-t border-gray-100">
                <div className="relative w-10 h-10 rounded-full overflow-hidden flex-shrink-0">
                  <AppImage src={review?.avatar} alt={review?.avatarAlt} fill className="object-cover" sizes="40px" />
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