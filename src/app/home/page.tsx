import React from 'react';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';
import HeroSection from './components/HeroSection';
import StatsBar from './components/StatsBar';
import FeaturedListings from './components/FeaturedListings';
import HowItWorks from './components/HowItWorks';
import Testimonials from './components/Testimonials';
import CtaBanner from './components/CtaBanner';

export default function HomePage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Topbar />
      <HeroSection />
      <StatsBar />
      <FeaturedListings />
      <HowItWorks />
      <Testimonials />
      <CtaBanner />
      <Footer />
    </main>
  );
}