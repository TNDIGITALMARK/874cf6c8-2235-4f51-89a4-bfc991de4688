'use client';

import { use, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { getProductBySlug, getAllProducts } from '@/lib/db/products';
import { addToCart } from '@/lib/db/cart';
import { Shield, Truck, RotateCcw, Heart } from 'lucide-react';
import { notFound } from 'next/navigation';

/**
 * TAGOFF Product Detail Page
 * Page 2 - Product Detail with Authentication Badges
 */

export default function ProductDetailPage({ params }: { params: Promise<{ slug: string }> }) {
  const { slug } = use(params);
  const product = getProductBySlug(slug);
  const [selectedImage, setSelectedImage] = useState(0);
  const [addedToCart, setAddedToCart] = useState(false);

  if (!product) {
    notFound();
  }

  const relatedProducts = getAllProducts()
    .filter(p => p.category === product.category && p.id !== product.id)
    .slice(0, 4);

  const handleAddToCart = () => {
    addToCart(product);
    setAddedToCart(true);
    window.dispatchEvent(new Event('cartUpdated'));
    setTimeout(() => setAddedToCart(false), 2000);
  };

  return (
    <>
      <Header />

      <main className="pt-[70px] pb-20">
        <div className="container mx-auto px-6 py-12">
          {/* Breadcrumb */}
          <div className="text-sm text-gray-600 mb-8">
            <Link href="/" className="hover:text-black">
              Home
            </Link>
            {' / '}
            <Link href={`/category/${product.category}`} className="hover:text-black">
              {product.category}
            </Link>
            {' / '}
            <span className="text-black">{product.name}</span>
          </div>

          {/* Product Detail Grid */}
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-12">
            {/* Image Gallery */}
            <div>
              <div className="relative aspect-square bg-white rounded-lg overflow-hidden mb-4 shadow-md">
                <Image
                  src={product.images[selectedImage]}
                  alt={product.name}
                  fill
                  className="object-cover"
                  priority
                  sizes="(max-width: 1024px) 100vw, 50vw"
                />
                {product.authenticated && (
                  <div className="absolute top-4 right-4 bg-black text-white px-4 py-2 rounded-md font-semibold flex items-center gap-2">
                    <Shield size={16} />
                    AUTHENTICATED
                  </div>
                )}
              </div>

              {/* Thumbnail Gallery */}
              {product.images.length > 1 && (
                <div className="grid grid-cols-4 gap-4">
                  {product.images.map((image, index) => (
                    <button
                      key={index}
                      onClick={() => setSelectedImage(index)}
                      className={`relative aspect-square rounded-md overflow-hidden border-2 ${
                        selectedImage === index ? 'border-black' : 'border-gray-200'
                      }`}
                    >
                      <Image src={image} alt={`${product.name} view ${index + 1}`} fill className="object-cover" />
                    </button>
                  ))}
                </div>
              )}
            </div>

            {/* Product Info */}
            <div>
              <p className="text-sm font-semibold uppercase tracking-wide text-gray-600 mb-2">
                {product.brand}
              </p>
              <h1 className="text-3xl font-bold mb-4">{product.name}</h1>

              <div className="flex items-baseline gap-4 mb-6">
                <p className="text-4xl font-bold text-[hsl(var(--accent-orange))]">€{product.price}</p>
                {product.originalPrice && (
                  <p className="text-xl text-gray-400 line-through">€{product.originalPrice}</p>
                )}
              </div>

              {/* Product Details */}
              <div className="bg-gray-50 rounded-lg p-6 mb-6 space-y-3">
                <div className="flex justify-between">
                  <span className="text-gray-600">Size:</span>
                  <span className="font-semibold">{product.size}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Condition:</span>
                  <span className="font-semibold">{product.condition}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Category:</span>
                  <span className="font-semibold capitalize">{product.category}</span>
                </div>
                <div className="flex justify-between">
                  <span className="text-gray-600">Availability:</span>
                  <span className={`font-semibold ${product.inStock ? 'text-green-600' : 'text-red-600'}`}>
                    {product.inStock ? 'In Stock' : 'Sold Out'}
                  </span>
                </div>
              </div>

              {/* Add to Cart Button */}
              <div className="space-y-4 mb-8">
                <button
                  onClick={handleAddToCart}
                  disabled={!product.inStock || addedToCart}
                  className="w-full bg-black text-white py-4 rounded-md font-semibold hover:opacity-90 transition-opacity disabled:opacity-50 disabled:cursor-not-allowed"
                >
                  {addedToCart ? '✓ ADDED TO CART' : product.inStock ? 'ADD TO CART' : 'SOLD OUT'}
                </button>

                <button className="w-full border-2 border-black text-black py-4 rounded-md font-semibold hover:bg-black hover:text-white transition-colors flex items-center justify-center gap-2">
                  <Heart size={20} />
                  ADD TO WISHLIST
                </button>
              </div>

              {/* Description */}
              <div className="mb-8">
                <h2 className="text-lg font-semibold mb-3">Description</h2>
                <p className="text-gray-700 leading-relaxed">{product.description}</p>
              </div>

              {/* Trust Badges */}
              <div className="grid grid-cols-3 gap-4 py-6 border-t border-gray-200">
                <div className="text-center">
                  <Shield className="mx-auto mb-2 text-gray-700" size={24} />
                  <p className="text-xs font-medium">Authenticity Guaranteed</p>
                </div>
                <div className="text-center">
                  <Truck className="mx-auto mb-2 text-gray-700" size={24} />
                  <p className="text-xs font-medium">Free Shipping</p>
                </div>
                <div className="text-center">
                  <RotateCcw className="mx-auto mb-2 text-gray-700" size={24} />
                  <p className="text-xs font-medium">Easy Returns</p>
                </div>
              </div>
            </div>
          </div>

          {/* Related Products */}
          {relatedProducts.length > 0 && (
            <div className="mt-20">
              <h2 className="text-2xl font-bold mb-6">YOU MAY ALSO LIKE</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
                {relatedProducts.map(relatedProduct => (
                  <ProductCard key={relatedProduct.id} product={relatedProduct} />
                ))}
              </div>
            </div>
          )}
        </div>
      </main>

      <Footer />
    </>
  );
}
