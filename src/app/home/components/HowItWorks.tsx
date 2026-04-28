import React from 'react';
import { Search, FileCheck, MessageCircle, Key } from 'lucide-react';

const steps = [
  {
    key: 'step-search',
    number: '01',
    icon: Search,
    title: 'Search & Filter',
    description:
      'Enter your university, preferred room type, and budget. Our smart filters surface only the listings that match your needs — no scrolling through irrelevant results.',
    color: 'bg-blue-600',
    lightBg: 'bg-blue-50',
    textColor: 'text-blue-600',
  },
  {
    key: 'step-compare',
    number: '02',
    icon: FileCheck,
    title: 'Compare & Verify',
    description:
      'View detailed listings with real photos, floor plans, and student reviews. Check the verified badge to ensure the property has passed our landlord verification process.',
    color: 'bg-violet-600',
    lightBg: 'bg-violet-50',
    textColor: 'text-violet-600',
  },
  {
    key: 'step-contact',
    number: '03',
    icon: MessageCircle,
    title: 'Contact Landlord',
    description:
      'Message landlords directly through UniBoard. Ask questions, schedule viewings, and negotiate terms — all in one place with a full message history.',
    color: 'bg-emerald-600',
    lightBg: 'bg-emerald-50',
    textColor: 'text-emerald-600',
  },
  {
    key: 'step-move',
    number: '04',
    icon: Key,
    title: 'Book & Move In',
    description:
      'Confirm your booking, sign your lease digitally, and pay your deposit securely. Your new student home is ready when you are.',
    color: 'bg-amber-600',
    lightBg: 'bg-amber-50',
    textColor: 'text-amber-600',
  },
];

export default function HowItWorks() {
  return (
    <section className="py-20 bg-white" id="how-it-works">
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14">
          <p className="section-label mb-2">Simple Process</p>
          <h2 className="text-3xl xl:text-4xl font-bold text-gray-900 mb-4">
            How UniBoard Works
          </h2>
          <p className="text-gray-500 text-base leading-relaxed">
            From search to move-in in four straightforward steps. Most students find and
            confirm a room within 48 hours.
          </p>
        </div>

        {/* Steps Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 xl:gap-8">
          {steps?.map((step, idx) => (
            <div key={step?.key} className="relative">
              {/* Connector Line */}
              {idx < steps?.length - 1 && (
                <div className="hidden lg:block absolute top-10 left-[calc(100%+0px)] w-full h-px border-t-2 border-dashed border-gray-200 z-0" style={{ width: 'calc(100% - 4rem)', left: 'calc(100% - 0.5rem)' }} />
              )}

              <div className="relative z-10 bg-gray-50 rounded-2xl p-6 hover:shadow-md transition-shadow duration-200 h-full">
                {/* Step Number */}
                <div className="flex items-center justify-between mb-5">
                  <div className={`w-12 h-12 ${step?.color} rounded-2xl flex items-center justify-center shadow-sm`}>
                    <step.icon size={22} className="text-white" />
                  </div>
                  <span className="text-4xl font-black text-gray-100 price-display">{step?.number}</span>
                </div>

                <h3 className="font-bold text-gray-900 text-lg mb-3">{step?.title}</h3>
                <p className="text-gray-500 text-sm leading-relaxed">{step?.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}