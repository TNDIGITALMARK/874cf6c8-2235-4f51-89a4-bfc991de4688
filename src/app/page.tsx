import Image from 'next/image';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { getAllProducts, getFeaturedProducts } from '@/lib/db/products';
import { Package, Shield, TrendingUp, Award } from 'lucide-react';

/**
 * TAGOFF Homepage
 * Pixel-perfect replication of design reference
 * Page 1 - Homepage and Product Discovery
 */

export default function HomePage() {
  const featuredProducts = getFeaturedProducts();
  const allProducts = getAllProducts();

  return (
    <>
      <Header />

      {/* Main Content - Add top margin to account for fixed header */}
      <main className="pt-[70px]">
        {/* Hero Section - Blue Border with Featured Products */}
        <section className="container mx-auto px-6 py-12">
          <div className="border-[3px] border-[hsl(var(--accent-blue))] rounded-lg bg-white p-8 md:p-12">
            <div className="flex flex-col md:flex-row items-center gap-8">
              {/* Hero Text */}
              <div className="flex-1">
                <h1 className="text-3xl md:text-4xl font-bold mb-2">
                  CURATED HEAT.<br />
                  UNBEITABLE PRICES
                </h1>
                <p className="text-gray-600 mb-6">
                  Authentic streetwear, sneakers, and accessories from the world's top brands.
                </p>
                <Link
                  href="/shop"
                  className="inline-block bg-black text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
                >
                  SHOP NOW
                </Link>
              </div>

              {/* Featured Products Preview */}
              <div className="flex-1">
                <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                  {featuredProducts.slice(0, 4).map((product) => (
                    <Link key={product.id} href={`/product/${product.slug}`} className="group">
                      <div className="relative aspect-square bg-gray-50 rounded-md overflow-hidden">
                        <Image
                          src={product.images[0]}
                          alt={product.name}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform"
                          sizes="(max-width: 768px) 50vw, 20vw"
                        />
                      </div>
                    </Link>
                  ))}
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* New Arrivals Section */}
        <section className="container mx-auto px-6 py-8">
          <h2 className="text-2xl font-bold mb-6">NEW ARRIVALS</h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {allProducts.slice(0, 8).map((product) => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>

          <div className="text-center mt-8">
            <Link
              href="/shop"
              className="inline-block border-2 border-black text-black px-8 py-3 rounded-md font-semibold hover:bg-black hover:text-white transition-colors"
            >
              VIEW ALL PRODUCTS
            </Link>
          </div>
        </section>

        {/* How It Works Section */}
        <section className="bg-white py-16">
          <div className="container mx-auto px-6">
            <h2 className="text-2xl font-bold text-center mb-12">HOW IT WORKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center">
              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Package size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">1. CONSIGN</h3>
                <p className="text-sm text-gray-600">
                  Send us your authentic streetwear and luxury items
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">2. AUTHENTICATE</h3>
                <p className="text-sm text-gray-600">
                  Our experts verify authenticity and quality
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <TrendingUp size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">3. SELL</h3>
                <p className="text-sm text-gray-600">
                  We list and sell your items at the best price
                </p>
              </div>

              <div className="flex flex-col items-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mb-4">
                  <Award size={32} strokeWidth={1.5} />
                </div>
                <h3 className="font-semibold mb-2">4. GET PAID</h3>
                <p className="text-sm text-gray-600">
                  Receive payment once your item sells
                </p>
              </div>
            </div>

            <div className="text-center mt-8">
              <Link
                href="/sell"
                className="inline-block bg-[hsl(var(--accent-orange))] text-white px-8 py-3 rounded-md font-semibold hover:opacity-90 transition-opacity"
              >
                SELL ON TAGOFF
              </Link>
            </div>
          </div>
        </section>

        {/* Categories Section */}
        <section className="container mx-auto px-6 py-16">
          <h2 className="text-2xl font-bold mb-6">SHOP BY CATEGORY</h2>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
            <Link
              href="/category/streetwear"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/generated/product-hoodie-1.png"
                alt="Streetwear"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white font-bold text-lg">STREETWEAR</h3>
              </div>
            </Link>

            <Link
              href="/category/sneakers"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/generated/product-sneaker-3.png"
                alt="Sneakers"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white font-bold text-lg">SNEAKERS</h3>
              </div>
            </Link>

            <Link
              href="/category/jackets"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/generated/product-jacket-1.png"
                alt="Jackets"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white font-bold text-lg">JACKETS</h3>
              </div>
            </Link>

            <Link
              href="/category/accessories"
              className="group relative aspect-square rounded-lg overflow-hidden"
            >
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10" />
              <Image
                src="/generated/product-bag-1.png"
                alt="Accessories"
                fill
                className="object-cover group-hover:scale-105 transition-transform"
                sizes="(max-width: 768px) 50vw, 25vw"
              />
              <div className="absolute bottom-4 left-4 z-20">
                <h3 className="text-white font-bold text-lg">ACCESSORIES</h3>
              </div>
            </Link>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}