import React from 'react';
import Topbar from '@/components/Topbar';
import Footer from '@/components/Footer';
import ListingPageClient from './components/ListingPageClient';

export default function RoomListingPage() {
  return (
    <main className="min-h-screen bg-gray-50">
      <Topbar />
      <ListingPageClient />
      <Footer />
    </main>
  );
}