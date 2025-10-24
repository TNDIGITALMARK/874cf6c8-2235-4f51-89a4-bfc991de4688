import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Shield, Heart, Users, Target } from 'lucide-react';

export default function AboutPage() {
  return (
    <>
      <Header />

      <main className="pt-[70px]">
        {/* Hero */}
        <section className="py-20 bg-gradient-to-b from-gray-50 to-white">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">ABOUT TAGOFF</h1>
            <p className="text-xl text-gray-600 max-w-2xl mx-auto">
              Your trusted destination for authentic streetwear and luxury fashion resale
            </p>
          </div>
        </section>

        {/* Mission */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">OUR MISSION</h2>
              <p className="text-lg text-gray-700 leading-relaxed mb-4">
                TagOff was founded on the belief that everyone should have access to authentic premium streetwear
                and luxury fashion at fair prices. We're building a marketplace where authenticity is guaranteed,
                prices are competitive, and the buying experience is seamless.
              </p>
              <p className="text-lg text-gray-700 leading-relaxed">
                Our expert authentication team ensures every item meets our strict quality standards,
                giving you complete confidence in your purchase.
              </p>
            </div>
          </div>
        </section>

        {/* Values */}
        <section className="bg-white py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">OUR VALUES</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Shield size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Authenticity First</h3>
                <p className="text-sm text-gray-600">
                  100% verified authentic products, every time
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Heart size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Community Driven</h3>
                <p className="text-sm text-gray-600">
                  Built by streetwear lovers, for streetwear lovers
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Users size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Trust & Safety</h3>
                <p className="text-sm text-gray-600">
                  Secure transactions and buyer protection
                </p>
              </div>

              <div className="text-center">
                <div className="w-16 h-16 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-4">
                  <Target size={32} strokeWidth={1.5} />
                </div>
                <h3 className="text-lg font-bold mb-2">Fair Pricing</h3>
                <p className="text-sm text-gray-600">
                  Market-driven prices that benefit everyone
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Stats */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12 text-center">
              <div>
                <p className="text-5xl font-bold text-[hsl(var(--accent-orange))] mb-2">10,000+</p>
                <p className="text-gray-600">Products Authenticated</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[hsl(var(--accent-orange))] mb-2">5,000+</p>
                <p className="text-gray-600">Happy Customers</p>
              </div>
              <div>
                <p className="text-5xl font-bold text-[hsl(var(--accent-orange))] mb-2">100%</p>
                <p className="text-gray-600">Authenticity Guarantee</p>
              </div>
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
