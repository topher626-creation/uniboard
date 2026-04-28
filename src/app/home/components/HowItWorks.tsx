import React from 'react';
import { Search, FileCheck, MessageCircle, Key } from 'lucide-react';

const steps = [
  {
    key: 'step-search',
    icon: Search,
    title: 'Search & Filter',
    description: 'Enter your university, preferred room type, and budget. Filter by campus, location, price, and gender preference.',
    color: 'bg-green-700',
    accent: 'text-green-700',
    lightBg: 'bg-green-50',
    tag: 'Step 1',
  },
  {
    key: 'step-compare',
    icon: FileCheck,
    title: 'Compare & Verify',
    description: 'View detailed listings with real photos and student reviews. Check the verified badge to confirm the provider has passed our verification.',
    color: 'bg-amber-500',
    accent: 'text-amber-600',
    lightBg: 'bg-amber-50',
    tag: 'Step 2',
  },
  {
    key: 'step-contact',
    icon: MessageCircle,
    title: 'Contact Provider',
    description: 'Reach out directly via WhatsApp or phone call. Ask questions, schedule viewings, and negotiate terms with confidence.',
    color: 'bg-green-600',
    accent: 'text-green-600',
    lightBg: 'bg-green-50',
    tag: 'Step 3',
  },
  {
    key: 'step-move',
    icon: Key,
    title: 'Book & Move In',
    description: 'Confirm your booking and move into your new student home. Leave a review to help future students make informed decisions.',
    color: 'bg-amber-600',
    accent: 'text-amber-600',
    lightBg: 'bg-amber-50',
    tag: 'Step 4',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="grid grid-cols-1 lg:grid-cols-5 gap-12 items-start">
          {/* Left heading */}
          <div className="lg:col-span-2">
            <p className="text-xs font-semibold tracking-widest uppercase text-green-700 mb-3">Simple Process</p>
            <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">How UniBoard Works</h2>
            <p className="text-gray-500 text-base leading-relaxed mb-6">
              From search to move-in in four straightforward steps. Most students find and confirm a bedspace within 48 hours.
            </p>
            <div className="bg-green-50 border border-green-200 rounded-2xl p-5">
              <p className="text-green-800 font-semibold text-sm mb-1">🇿🇲 Built for Zambia</p>
              <p className="text-green-700 text-sm leading-relaxed">UniBoard is designed specifically for Zambian students and universities. All providers are locally verified.</p>
            </div>
          </div>

          {/* Right steps — asymmetric layout */}
          <div className="lg:col-span-3 grid grid-cols-1 sm:grid-cols-2 gap-4">
            {steps?.map((step, idx) => (
              <div
                key={step?.key}
                className={`rounded-2xl p-6 ${idx === 0 ? 'sm:col-span-2 flex items-start gap-5' : ''} ${step?.lightBg} border border-transparent hover:border-green-200 transition-all duration-200`}
              >
                <div className={`w-12 h-12 ${step?.color} rounded-2xl flex items-center justify-center flex-shrink-0 shadow-sm`}>
                  <step.icon size={22} className="text-white" />
                </div>
                <div className={idx === 0 ? '' : 'mt-4'}>
                  <span className={`text-xs font-bold uppercase tracking-wider ${step?.accent} mb-1 block`}>{step?.tag}</span>
                  <h3 className="font-bold text-gray-900 text-lg mb-2">{step?.title}</h3>
                  <p className="text-gray-600 text-sm leading-relaxed">{step?.description}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}