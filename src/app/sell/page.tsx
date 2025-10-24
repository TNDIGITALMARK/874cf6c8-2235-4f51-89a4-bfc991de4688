import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { Package, Shield, TrendingUp, Award, DollarSign, Clock } from 'lucide-react';

export default function SellPage() {
  return (
    <>
      <Header />

      <main className="pt-[70px]">
        {/* Hero Section */}
        <section className="bg-black text-white py-20">
          <div className="container mx-auto px-6 text-center">
            <h1 className="text-5xl font-bold mb-4">SELL YOUR STREETWEAR</h1>
            <p className="text-xl text-gray-300 mb-8">
              Turn your closet into cash. We handle everything from authentication to shipping.
            </p>
            <button className="bg-[hsl(var(--accent-orange))] text-white px-12 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">
              GET STARTED
            </button>
          </div>
        </section>

        {/* How Selling Works */}
        <section className="py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">HOW IT WORKS</h2>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Package size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">1. Send Your Items</h3>
                <p className="text-gray-600">
                  Pack your authenticated streetwear and luxury items. We provide free shipping labels.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <Shield size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">2. We Authenticate</h3>
                <p className="text-gray-600">
                  Our expert team verifies authenticity and condition. You'll get an instant evaluation.
                </p>
              </div>

              <div className="text-center">
                <div className="w-20 h-20 rounded-full bg-gray-100 flex items-center justify-center mx-auto mb-6">
                  <DollarSign size={40} strokeWidth={1.5} />
                </div>
                <h3 className="text-xl font-bold mb-3">3. Get Paid</h3>
                <p className="text-gray-600">
                  We list your items and handle all sales. You receive payment once sold.
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* Benefits */}
        <section className="bg-gray-50 py-20">
          <div className="container mx-auto px-6">
            <h2 className="text-3xl font-bold text-center mb-16">WHY SELL WITH TAGOFF</h2>
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Award className="mb-4 text-[hsl(var(--accent-orange))]" size={32} />
                <h3 className="text-lg font-bold mb-2">Expert Authentication</h3>
                <p className="text-gray-600">
                  Our team of experts ensures every item is 100% authentic
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <TrendingUp className="mb-4 text-[hsl(var(--accent-orange))]" size={32} />
                <h3 className="text-lg font-bold mb-2">Best Market Value</h3>
                <p className="text-gray-600">
                  We price your items competitively to sell fast at maximum value
                </p>
              </div>

              <div className="bg-white p-8 rounded-lg shadow-sm">
                <Clock className="mb-4 text-[hsl(var(--accent-orange))]" size={32} />
                <h3 className="text-lg font-bold mb-2">Fast Payouts</h3>
                <p className="text-gray-600">
                  Receive payment quickly once your item sells
                </p>
              </div>
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20">
          <div className="container mx-auto px-6 text-center">
            <h2 className="text-3xl font-bold mb-4">READY TO SELL?</h2>
            <p className="text-gray-600 mb-8 text-lg">
              Join thousands of sellers who trust TagOff with their premium streetwear
            </p>
            <button className="bg-black text-white px-12 py-4 rounded-md font-semibold text-lg hover:opacity-90 transition-opacity">
              START SELLING NOW
            </button>
          </div>
        </section>
      </main>

      <Footer />
    </>
  );
}
