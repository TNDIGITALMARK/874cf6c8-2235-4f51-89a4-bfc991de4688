import { use } from 'react';
import Link from 'next/link';
import { Header } from '@/components/Header';
import { Footer } from '@/components/Footer';
import { ProductCard } from '@/components/ProductCard';
import { getProductsByCategory } from '@/lib/db/products';
import { notFound } from 'next/navigation';

export default function CategoryPage({ params }: { params: Promise<{ category: string }> }) {
  const { category } = use(params);
  const products = getProductsByCategory(category);

  if (products.length === 0) {
    notFound();
  }

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
            <span className="text-black capitalize">{category}</span>
          </div>

          {/* Category Header */}
          <h1 className="text-4xl font-bold mb-2 capitalize">{category}</h1>
          <p className="text-gray-600 mb-8">
            {products.length} {products.length === 1 ? 'product' : 'products'} found
          </p>

          {/* Products Grid */}
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
