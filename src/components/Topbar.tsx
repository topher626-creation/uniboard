'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { Menu, X, LogIn } from 'lucide-react';

const navLinks = [
  { label: 'Find Rooms', href: '/room-listing-page', key: 'nav-find-rooms' },
  { label: 'How It Works', href: '/home#how-it-works', key: 'nav-how-it-works' },
  { label: 'About', href: '/home#about', key: 'nav-about' },
  { label: 'Contact', href: '/home#contact', key: 'nav-contact' },
];

export default function Topbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 20);
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-300 ${
        scrolled
          ? 'bg-white/95 backdrop-blur-md shadow-sm border-b border-gray-100'
          : 'bg-transparent'
      }`}
    >
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10">
        <div className="flex items-center justify-between h-16">
          {/* Logo */}
          <Link href="/home" className="flex items-center gap-2 flex-shrink-0">
            <AppLogo size={36} />
            <span
              className={`font-bold text-xl tracking-tight transition-colors duration-300 ${
                scrolled ? 'text-gray-900' : 'text-white'
              }`}
            >
              UniBoard
            </span>
          </Link>

          {/* Desktop Nav */}
          <nav className="hidden md:flex items-center gap-1">
            {navLinks?.map((link) => (
              <Link
                key={link?.key}
                href={link?.href}
                className={`px-4 py-2 rounded-lg text-sm font-medium transition-all duration-150 hover:bg-white/10 ${
                  scrolled
                    ? 'text-gray-600 hover:text-blue-600 hover:bg-blue-50' :'text-white/90 hover:text-white'
                }`}
              >
                {link?.label}
              </Link>
            ))}
          </nav>

          {/* Desktop Actions */}
          <div className="hidden md:flex items-center gap-3">
            <Link
              href="/sign-up-login-screen"
              className={`text-sm font-semibold px-4 py-2 rounded-xl transition-all duration-150 ${
                scrolled
                  ? 'text-gray-700 hover:text-blue-600 hover:bg-blue-50' :'text-white/90 hover:text-white hover:bg-white/10'
              }`}
            >
              Log In
            </Link>
            <Link
              href="/sign-up-login-screen"
              className="btn-primary text-sm flex items-center gap-1.5"
            >
              <LogIn size={15} />
              Get Started
            </Link>
          </div>

          {/* Mobile Hamburger */}
          <button
            onClick={() => setMobileOpen(!mobileOpen)}
            className={`md:hidden p-2 rounded-lg transition-colors ${
              scrolled
                ? 'text-gray-700 hover:bg-gray-100' :'text-white hover:bg-white/10'
            }`}
            aria-label="Toggle mobile menu"
          >
            {mobileOpen ? <X size={22} /> : <Menu size={22} />}
          </button>
        </div>
      </div>
      {/* Mobile Drawer */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 shadow-lg animate-fade-in">
          <div className="px-4 py-4 space-y-1">
            {navLinks?.map((link) => (
              <Link
                key={`mobile-${link?.key}`}
                href={link?.href}
                onClick={() => setMobileOpen(false)}
                className="block px-4 py-3 rounded-xl text-sm font-medium text-gray-700 hover:bg-blue-50 hover:text-blue-600 transition-colors"
              >
                {link?.label}
              </Link>
            ))}
            <div className="pt-3 border-t border-gray-100 flex flex-col gap-2">
              <Link
                href="/sign-up-login-screen"
                onClick={() => setMobileOpen(false)}
                className="block text-center px-4 py-2.5 rounded-xl text-sm font-semibold text-gray-700 border border-gray-200 hover:bg-gray-50 transition-colors"
              >
                Log In
              </Link>
              <Link
                href="/sign-up-login-screen"
                onClick={() => setMobileOpen(false)}
                className="block text-center btn-primary text-sm"
              >
                Get Started Free
              </Link>
            </div>
          </div>
        </div>
      )}
    </header>
  );
}