import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { getAllProducts } from '@/lib/db/products';

export default function ShopPage() {
  const products = getAllProducts();

  return (
    <>
      <Header />

      <main className="pt-[70px] pb-20">
        <div className="container mx-auto px-6 py-12">
          <div className="mb-8">
            <h1 className="text-4xl font-bold mb-2">SHOP ALL</h1>
            <p className="text-gray-600">
              {products.length} premium streetwear pieces available
            </p>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
            {products.map(product => (
              <ProductCard key={product.id} product={product} />
            ))}
          </div>
        </div>
      </main>

      <Footer />
    </>
  );
}
