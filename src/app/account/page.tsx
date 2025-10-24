import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { User, Package, Heart, Settings } from 'lucide-react';

export default function AccountPage() {
  return (
    <>
      <Header />

      <main className="pt-[70px] pb-20">
        <div className="container mx-auto px-6 py-12">
          <h1 className="text-3xl font-bold mb-8">MY ACCOUNT</h1>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {/* Account Navigation */}
            <div className="md:col-span-1">
              <div className="bg-white rounded-lg shadow-sm p-6">
                <div className="flex items-center gap-3 mb-6 pb-6 border-b border-gray-200">
                  <div className="w-12 h-12 rounded-full bg-gray-200 flex items-center justify-center">
                    <User size={24} />
                  </div>
                  <div>
                    <p className="font-semibold">John Doe</p>
                    <p className="text-sm text-gray-600">john@example.com</p>
                  </div>
                </div>

                <nav className="space-y-2">
                  <button className="w-full text-left px-4 py-3 rounded-md bg-gray-100 font-medium">
                    Profile
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                    Orders
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                    Wishlist
                  </button>
                  <button className="w-full text-left px-4 py-3 rounded-md hover:bg-gray-50 transition-colors">
                    Settings
                  </button>
                </nav>
              </div>
            </div>

            {/* Account Content */}
            <div className="md:col-span-2 space-y-6">
              {/* Profile Info */}
              <div className="bg-white rounded-lg shadow-sm p-6">
                <h2 className="text-xl font-bold mb-4">Profile Information</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium mb-2">Full Name</label>
                    <input
                      type="text"
                      defaultValue="John Doe"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Email</label>
                    <input
                      type="email"
                      defaultValue="john@example.com"
                      className="w-full"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium mb-2">Phone</label>
                    <input
                      type="tel"
                      defaultValue="+1 234 567 8900"
                      className="w-full"
                    />
                  </div>
                  <button className="bg-black text-white px-6 py-2 rounded-md font-semibold hover:opacity-90 transition-opacity">
                    SAVE CHANGES
                  </button>
                </div>
              </div>

              {/* Quick Stats */}
              <div className="grid grid-cols-3 gap-4">
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <Package className="mx-auto mb-2 text-gray-600" size={24} />
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-gray-600">Orders</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <Heart className="mx-auto mb-2 text-gray-600" size={24} />
                  <p className="text-2xl font-bold">0</p>
                  <p className="text-sm text-gray-600">Wishlist</p>
                </div>
                <div className="bg-white rounded-lg shadow-sm p-6 text-center">
                  <Settings className="mx-auto mb-2 text-gray-600" size={24} />
                  <p className="text-2xl font-bold">Active</p>
                  <p className="text-sm text-gray-600">Status</p>
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
