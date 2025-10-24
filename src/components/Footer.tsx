import Link from 'next/link';
import { Instagram, Twitter, Facebook } from 'lucide-react';

/**
 * TAGOFF Footer Component
 * Pixel-perfect replication of design reference
 * - Black background (#000000)
 * - White text
 * - Three-column layout: branding, links, contact info
 * - Social media and payment icons
 */

export function Footer() {
  return (
    <footer className="bg-black text-white mt-20">
      <div className="container mx-auto px-6 py-12">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {/* Brand Section */}
          <div>
            <h3 className="text-2xl font-extrabold mb-4">TAGOFF</h3>
            <p className="text-sm text-gray-400 mb-6">
              Premium streetwear and fashion resale marketplace. Authentic pieces, unbeatable prices.
            </p>
            <div className="flex gap-4">
              <Link href="https://instagram.com" target="_blank" className="hover:opacity-80 transition-opacity">
                <Instagram size={20} strokeWidth={1.5} />
              </Link>
              <Link href="https://twitter.com" target="_blank" className="hover:opacity-80 transition-opacity">
                <Twitter size={20} strokeWidth={1.5} />
              </Link>
              <Link href="https://facebook.com" target="_blank" className="hover:opacity-80 transition-opacity">
                <Facebook size={20} strokeWidth={1.5} />
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4">Quick Links</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <Link href="/about" className="hover:text-white transition-colors">
                  About Us
                </Link>
              </li>
              <li>
                <Link href="/how-it-works" className="hover:text-white transition-colors">
                  How It Works
                </Link>
              </li>
              <li>
                <Link href="/sell" className="hover:text-white transition-colors">
                  Sell With Us
                </Link>
              </li>
              <li>
                <Link href="/authentication" className="hover:text-white transition-colors">
                  Authentication
                </Link>
              </li>
              <li>
                <Link href="/faq" className="hover:text-white transition-colors">
                  FAQ
                </Link>
              </li>
            </ul>
          </div>

          {/* Contact & Support */}
          <div>
            <h4 className="text-sm font-semibold uppercase mb-4">Contact</h4>
            <ul className="space-y-2 text-sm text-gray-400">
              <li>
                <a href="mailto:support@tagoff.com" className="hover:text-white transition-colors">
                  support@tagoff.com
                </a>
              </li>
              <li>
                <Link href="/shipping" className="hover:text-white transition-colors">
                  Shipping & Returns
                </Link>
              </li>
              <li>
                <Link href="/terms" className="hover:text-white transition-colors">
                  Terms & Conditions
                </Link>
              </li>
              <li>
                <Link href="/privacy" className="hover:text-white transition-colors">
                  Privacy Policy
                </Link>
              </li>
            </ul>
            <div className="mt-6">
              <p className="text-xs text-gray-500 mb-2">We Accept</p>
              <div className="flex gap-2">
                <div className="bg-gray-800 rounded px-2 py-1 text-xs">VISA</div>
                <div className="bg-gray-800 rounded px-2 py-1 text-xs">MC</div>
                <div className="bg-gray-800 rounded px-2 py-1 text-xs">AMEX</div>
                <div className="bg-gray-800 rounded px-2 py-1 text-xs">PayPal</div>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="border-t border-gray-800 mt-12 pt-6 text-center text-sm text-gray-500">
          <p>&copy; {new Date().getFullYear()} TagOff. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
}
