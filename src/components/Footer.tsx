import React from 'react';
import Link from 'next/link';
import AppLogo from '@/components/ui/AppLogo';
import { MapPin, Mail, Phone } from 'lucide-react';

const FacebookIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
  </svg>
);

const TwitterIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M22 4s-.7 2.1-2 3.4c1.6 10-9.4 17.3-18 11.6 2.2.1 4.4-.6 6-2C3 15.5.5 9.6 3 5c2.2 2.6 5.6 4.1 9 4-.9-4.2 4-6.6 7-3.8 1.1 0 3-1.2 3-1.2z" />
  </svg>
);

const InstagramIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <rect x="2" y="2" width="20" height="20" rx="5" ry="5" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="12" cy="12" r="4" fill="none" stroke="currentColor" strokeWidth="2" />
    <circle cx="17.5" cy="6.5" r="1" />
  </svg>
);

const LinkedinIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" fill="currentColor" viewBox="0 0 24 24">
    <path d="M16 8a6 6 0 0 1 6 6v7h-4v-7a2 2 0 0 0-2-2 2 2 0 0 0-2 2v7h-4v-7a6 6 0 0 1 6-6zM2 9h4v12H2z" />
    <circle cx="4" cy="4" r="2" />
  </svg>
);

const footerLinks = {
  students: [
    { label: 'Find Rooms', href: '/room-listing-page', key: 'footer-find-rooms' },
    { label: 'How It Works', href: '/home#how-it-works', key: 'footer-how-it-works' },
    { label: 'Student Guide', href: '#', key: 'footer-guide' },
    { label: 'Safety Tips', href: '#', key: 'footer-safety' },
  ],
  landlords: [
    { label: 'List Your Property', href: '/sign-up-login-screen', key: 'footer-list' },
    { label: 'Landlord Dashboard', href: '#', key: 'footer-landlord-dash' },
    { label: 'Pricing', href: '#', key: 'footer-pricing' },
    { label: 'Verification Process', href: '#', key: 'footer-verify' },
  ],
  company: [
    { label: 'About UniBoard', href: '/home#about', key: 'footer-about' },
    { label: 'Contact Us', href: '/home#contact', key: 'footer-contact' },
    { label: 'Privacy Policy', href: '#', key: 'footer-privacy' },
    { label: 'Terms of Service', href: '#', key: 'footer-terms' },
  ],
};

const socialLinks = [
  { icon: FacebookIcon, href: '#', key: 'social-fb', label: 'Facebook' },
  { icon: TwitterIcon, href: '#', key: 'social-tw', label: 'Twitter' },
  { icon: InstagramIcon, href: '#', key: 'social-ig', label: 'Instagram' },
  { icon: LinkedinIcon, href: '#', key: 'social-li', label: 'LinkedIn' },
];

export default function Footer() {
  return (
    <footer className="bg-gray-900 text-gray-300">
      {/* Main Footer */}
      <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-10">
          {/* Brand Column */}
          <div className="lg:col-span-2">
            <div className="flex items-center gap-2 mb-4">
              <AppLogo size={36} />
              <span className="text-white font-bold text-xl">UniBoard</span>
            </div>
            <p className="text-sm text-gray-400 leading-relaxed mb-6 max-w-xs">
              The trusted student accommodation platform connecting thousands of students
              with verified landlords near universities across the country.
            </p>
            <div className="space-y-2.5">
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <MapPin size={15} className="text-blue-400 flex-shrink-0" />
                <span>123 University Ave, Cape Town, 8001</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Mail size={15} className="text-blue-400 flex-shrink-0" />
                <span>hello@uniboard.co.za</span>
              </div>
              <div className="flex items-center gap-2.5 text-sm text-gray-400">
                <Phone size={15} className="text-blue-400 flex-shrink-0" />
                <span>+27 21 555 0192</span>
              </div>
            </div>
            {/* Social Links */}
            <div className="flex items-center gap-3 mt-6">
              {socialLinks?.map((s) => (
                <a
                  key={s?.key}
                  href={s?.href}
                  aria-label={s?.label}
                  className="w-9 h-9 rounded-lg bg-gray-800 hover:bg-blue-600 flex items-center justify-center transition-colors duration-200"
                >
                  <s.icon size={16} />
                </a>
              ))}
            </div>
          </div>

          {/* Students */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">For Students</h4>
            <ul className="space-y-2.5">
              {footerLinks?.students?.map((link) => (
                <li key={link?.key}>
                  <Link
                    href={link?.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Landlords */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">For Landlords</h4>
            <ul className="space-y-2.5">
              {footerLinks?.landlords?.map((link) => (
                <li key={link?.key}>
                  <Link
                    href={link?.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-white font-semibold text-sm mb-4">Company</h4>
            <ul className="space-y-2.5">
              {footerLinks?.company?.map((link) => (
                <li key={link?.key}>
                  <Link
                    href={link?.href}
                    className="text-sm text-gray-400 hover:text-blue-400 transition-colors"
                  >
                    {link?.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>
        </div>
      </div>
      {/* Bottom Bar */}
      <div className="border-t border-gray-800">
        <div className="max-w-screen-2xl mx-auto px-4 sm:px-6 lg:px-8 xl:px-10 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">
          <p className="text-xs text-gray-500">
            © 2026 UniBoard. All rights reserved. Built for students, by students.
          </p>
          <div className="flex items-center gap-4">
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Privacy
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Terms
            </Link>
            <Link href="#" className="text-xs text-gray-500 hover:text-gray-300 transition-colors">
              Cookies
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}