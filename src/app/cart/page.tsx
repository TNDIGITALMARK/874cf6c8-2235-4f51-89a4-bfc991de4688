'use client';

import { useState, useEffect } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { getCart, removeFromCart, updateQuantity, type Cart } from '@/lib/db/cart';
import { Minus, Plus, X, ShoppingBag } from 'lucide-react';

/**
 * TAGOFF Shopping Cart & Checkout Page
 * Page 3 - Streamlined cart with secure checkout
 */

export default function CartPage() {
  const [cart, setCart] = useState<Cart>({ items: [], total: 0 });
  const [isCheckout, setIsCheckout] = useState(false);

  useEffect(() => {
    setCart(getCart());
  }, []);

  const handleUpdateQuantity = (productId: string, newQuantity: number) => {
    const updatedCart = updateQuantity(productId, newQuantity);
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const handleRemoveItem = (productId: string) => {
    const updatedCart = removeFromCart(productId);
    setCart(updatedCart);
    window.dispatchEvent(new Event('cartUpdated'));
  };

  const subtotal = cart.total;
  const shipping = cart.items.length > 0 ? 10 : 0;
  const total = subtotal + shipping;

  if (cart.items.length === 0) {
    return (
      <>
        <Header />
        <main className="pt-[70px] min-h-screen">
          <div className="container mx-auto px-6 py-20 text-center">
            <ShoppingBag size={64} className="mx-auto mb-6 text-gray-300" />
            <h1 className="text-3xl font-bold mb-4">Your Cart is Empty</h1>
            <p className="text-gray-600 mb-8">Add some heat to your collection!</p>
            <Link
              href="/"
              className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
            >
              CONTINUE SHOPPING
            </Link>
          </div>
        </main>
        <Footer />
      </>
    );
  }

  return (
    <>
      <Header />

      <main className="pt-[70px] pb-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">SHOPPING CART</h1>

          <div className="grid grid-cols-1 lg:grid-cols-3 gap-12">
            {/* Cart Items */}
            <div className="lg:col-span-2 space-y-6">
              {cart.items.map(item => (
                <div key={item.product.id} className="bg-white rounded-lg shadow-sm p-6 flex gap-6">
                  {/* Product Image */}
                  <div className="relative w-32 h-32 flex-shrink-0">
                    <Image
                      src={item.product.images[0]}
                      alt={item.product.name}
                      fill
                      className="object-cover rounded-md"
                      sizes="128px"
                    />
                  </div>

                  {/* Product Info */}
                  <div className="flex-1">
                    <div className="flex justify-between mb-2">
                      <div>
                        <p className="text-xs font-semibold uppercase text-gray-600">{item.product.brand}</p>
                        <h3 className="font-semibold text-lg">{item.product.name}</h3>
                        <p className="text-sm text-gray-600">
                          Size: {item.product.size} • {item.product.condition}
                        </p>
                      </div>
                      <button
                        onClick={() => handleRemoveItem(item.product.id)}
                        className="text-gray-400 hover:text-red-600 transition-colors"
                        aria-label="Remove item"
                      >
                        <X size={20} />
                      </button>
                    </div>

                    <div className="flex items-center justify-between mt-4">
                      {/* Quantity Selector */}
                      <div className="flex items-center gap-3">
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity - 1)}
                          className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                          disabled={item.quantity <= 1}
                        >
                          <Minus size={16} />
                        </button>
                        <span className="w-8 text-center font-semibold">{item.quantity}</span>
                        <button
                          onClick={() => handleUpdateQuantity(item.product.id, item.quantity + 1)}
                          className="w-8 h-8 rounded-md border border-gray-300 flex items-center justify-center hover:bg-gray-100 transition-colors"
                        >
                          <Plus size={16} />
                        </button>
                      </div>

                      {/* Price */}
                      <p className="text-xl font-bold text-[hsl(var(--accent-orange))]">
                        €{item.product.price * item.quantity}
                      </p>
                    </div>
                  </div>
                </div>
              ))}
            </div>

            {/* Order Summary */}
            <div className="lg:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6 sticky top-24">
                <h2 className="text-xl font-bold mb-6">ORDER SUMMARY</h2>

                <div className="space-y-3 mb-6">
                  <div className="flex justify-between text-gray-600">
                    <span>Subtotal</span>
                    <span>€{subtotal}</span>
                  </div>
                  <div className="flex justify-between text-gray-600">
                    <span>Shipping</span>
                    <span>{shipping === 0 ? 'FREE' : `€${shipping}`}</span>
                  </div>
                  <div className="border-t border-gray-200 pt-3">
                    <div className="flex justify-between text-lg font-bold">
                      <span>Total</span>
                      <span>€{total}</span>
                    </div>
                  </div>
                </div>

                {!isCheckout ? (
                  <div className="space-y-3">
                    <button
                      onClick={() => setIsCheckout(true)}
                      className="w-full bg-black text-white py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
                    >
                      PROCEED TO CHECKOUT
                    </button>
                    <Link
                      href="/"
                      className="block text-center text-sm text-gray-600 hover:text-black transition-colors"
                    >
                      Continue Shopping
                    </Link>
                  </div>
                ) : (
                  <div>
                    <h3 className="font-semibold mb-4">Checkout</h3>
                    <form className="space-y-4">
                      <div>
                        <label className="block text-sm font-medium mb-2">Email</label>
                        <input
                          type="email"
                          placeholder="your@email.com"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Full Name</label>
                        <input
                          type="text"
                          placeholder="John Doe"
                          className="w-full"
                          required
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium mb-2">Address</label>
                        <input
                          type="text"
                          placeholder="123 Street Name"
                          className="w-full"
                          required
                        />
                      </div>
                      <div className="grid grid-cols-2 gap-3">
                        <div>
                          <label className="block text-sm font-medium mb-2">City</label>
                          <input
                            type="text"
                            placeholder="City"
                            className="w-full"
                            required
                          />
                        </div>
                        <div>
                          <label className="block text-sm font-medium mb-2">Postal Code</label>
                          <input
                            type="text"
                            placeholder="12345"
                            className="w-full"
                            required
                          />
                        </div>
                      </div>
                      <button
                        type="submit"
                        className="w-full bg-[hsl(var(--accent-orange))] text-white py-4 rounded-md font-semibold hover:opacity-90 transition-opacity"
                      >
                        PLACE ORDER
                      </button>
                      <button
                        type="button"
                        onClick={() => setIsCheckout(false)}
                        className="w-full text-sm text-gray-600 hover:text-black transition-colors"
                      >
                        ← Back to Cart
                      </button>
                    </form>
                  </div>
                )}

                {/* Trust Badges */}
                <div className="mt-6 pt-6 border-t border-gray-200">
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <span className="text-green-600">✓</span>
                    <span>Secure Checkout</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600 mb-2">
                    <span className="text-green-600">✓</span>
                    <span>Authenticity Guaranteed</span>
                  </div>
                  <div className="flex items-center gap-2 text-xs text-gray-600">
                    <span className="text-green-600">✓</span>
                    <span>Free Returns within 14 days</span>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
