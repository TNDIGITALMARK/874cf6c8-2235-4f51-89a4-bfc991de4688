'use client';

import Link from 'next/link';
import { Search, ShoppingCart, User } from 'lucide-react';
import { useState, useEffect } from 'react';
import { getCartItemCount } from '@/lib/db/cart';

/**
 * TAGOFF Header Component
 * Pixel-perfect replication of design reference
 * - Black background (#000000)
 * - White text and icons
 * - Fixed navigation with logo, menu, search, and cart
 */

export function Header() {
  const [cartCount, setCartCount] = useState(0);
  const [searchOpen, setSearchOpen] = useState(false);

  useEffect(() => {
    // Update cart count on mount and when storage changes
    const updateCount = () => setCartCount(getCartItemCount());
    updateCount();

    window.addEventListener('storage', updateCount);
    window.addEventListener('cartUpdated', updateCount);

    return () => {
      window.removeEventListener('storage', updateCount);
      window.removeEventListener('cartUpdated', updateCount);
    };
  }, []);

  return (
    <header className="fixed top-0 left-0 right-0 z-50 bg-black text-white">
      <div className="container mx-auto px-6">
        <div className="flex items-center justify-between h-[70px]">
          {/* Logo */}
          <Link href="/" className="text-2xl font-extrabold tracking-tight hover:opacity-80 transition-opacity">
            TAGOFF
          </Link>

          {/* Navigation */}
          <nav className="hidden md:flex items-center gap-8">
            <Link
              href="/category/streetwear"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              STREETWEAR
            </Link>
            <Link
              href="/category/accessories"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              ACCESSORIES
            </Link>
            <Link
              href="/sell"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              SELL
            </Link>
            <Link
              href="/about"
              className="text-sm font-medium uppercase tracking-wide hover:opacity-80 transition-opacity"
            >
              ABOUT US
            </Link>
          </nav>

          {/* Actions */}
          <div className="flex items-center gap-4">
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              className="p-2 hover:opacity-80 transition-opacity"
              aria-label="Search"
            >
              <Search size={20} strokeWidth={1.5} />
            </button>

            <Link
              href="/account"
              className="p-2 hover:opacity-80 transition-opacity hidden md:block"
              aria-label="Account"
            >
              <User size={20} strokeWidth={1.5} />
            </Link>

            <Link
              href="/cart"
              className="relative p-2 hover:opacity-80 transition-opacity"
              aria-label="Shopping Cart"
            >
              <ShoppingCart size={20} strokeWidth={1.5} />
              {cartCount > 0 && (
                <span className="absolute -top-1 -right-1 bg-[hsl(var(--accent-orange))] text-white text-xs font-bold rounded-full w-5 h-5 flex items-center justify-center">
                  {cartCount}
                </span>
              )}
            </Link>
          </div>
        </div>
      </div>

      {/* Search Bar (Expandable) */}
      {searchOpen && (
        <div className="border-t border-gray-800">
          <div className="container mx-auto px-6 py-4">
            <input
              type="search"
              placeholder="Search for products, brands..."
              className="w-full bg-gray-900 text-white px-4 py-2 rounded-md border border-gray-800 focus:border-white focus:outline-none"
              autoFocus
            />
          </div>
        </div>
      )}
    </header>
  );
}
