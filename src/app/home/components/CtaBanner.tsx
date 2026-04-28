import React from 'react';
import Link from 'next/link';
import { ArrowRight, Home, Building2 } from 'lucide-react';

export default function CtaBanner() {
  return (
    <section className="py-20 bg-white" id="about">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="relative overflow-hidden rounded-3xl hero-gradient p-10 lg:p-16">
          {/* Decorative blobs */}
          <div className="absolute top-0 right-0 w-80 h-80 bg-violet-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-64 h-64 bg-blue-400/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 items-center">
            {/* Students CTA */}
            <div>
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <Home size={14} className="text-blue-200" />
                <span className="text-white/90 text-sm font-medium">For Students</span>
              </div>
              <h2 className="text-3xl xl:text-4xl font-bold text-white mb-4 leading-tight">
                Your perfect room is
                <br />
                one search away
              </h2>
              <p className="text-white/70 text-base mb-7 leading-relaxed">
                Join 8,500+ students who found their home through UniBoard. Create a free
                account and start searching verified listings near your campus today.
              </p>
              <Link
                href="/sign-up-login-screen"
                className="inline-flex items-center gap-2 bg-white text-blue-700 font-bold px-6 py-3 rounded-xl hover:bg-blue-50 active:scale-95 transition-all duration-150 shadow-lg"
              >
                Find My Room
                <ArrowRight size={17} />
              </Link>
            </div>

            {/* Landlords CTA */}
            <div className="bg-white/10 backdrop-blur-sm border border-white/20 rounded-2xl p-8">
              <div className="inline-flex items-center gap-2 bg-white/15 border border-white/20 rounded-full px-4 py-1.5 mb-5">
                <Building2 size={14} className="text-violet-200" />
                <span className="text-white/90 text-sm font-medium">For Landlords</span>
              </div>
              <h3 className="text-2xl font-bold text-white mb-3">
                List your property for free
              </h3>
              <p className="text-white/70 text-sm mb-6 leading-relaxed">
                Reach thousands of verified students actively looking for accommodation near
                universities. Get your property filled faster with zero listing fees.
              </p>
              <ul className="space-y-2.5 mb-7">
                {[
                  'Free property listing',
                  'Verified student inquiries only',
                  'Dashboard to manage bookings',
                  'Dedicated landlord support',
                ]?.map((item) => (
                  <li key={`landlord-benefit-${item}`} className="flex items-center gap-2.5 text-white/80 text-sm">
                    <div className="w-5 h-5 bg-green-400/20 rounded-full flex items-center justify-center flex-shrink-0">
                      <div className="w-2 h-2 bg-green-400 rounded-full" />
                    </div>
                    {item}
                  </li>
                ))}
              </ul>
              <Link
                href="/sign-up-login-screen"
                className="inline-flex items-center gap-2 bg-violet-600 hover:bg-violet-700 text-white font-semibold px-6 py-3 rounded-xl active:scale-95 transition-all duration-150"
              >
                List My Property
                <ArrowRight size={17} />
              </Link>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}