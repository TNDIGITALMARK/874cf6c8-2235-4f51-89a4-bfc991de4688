import Link from 'next/link';
import Image from 'next/image';
import { Product } from '@/lib/db/products';

/**
 * TAGOFF ProductCard Component
 * Pixel-perfect replication of design reference
 * - White background with subtle shadow
 * - Square product image (1:1 aspect ratio)
 * - Brand name in uppercase
 * - Product name in medium weight
 * - Orange price (#FF6B35)
 * - Clean spacing and typography
 */

interface ProductCardProps {
  product: Product;
}

export function ProductCard({ product }: ProductCardProps) {
  return (
    <Link href={`/product/${product.slug}`} className="group block">
      <div className="bg-white rounded-md overflow-hidden shadow-sm hover:shadow-md transition-shadow">
        {/* Product Image */}
        <div className="relative aspect-square bg-gray-100">
          <Image
            src={product.images[0]}
            alt={product.name}
            fill
            className="object-cover"
            sizes="(max-width: 768px) 100vw, (max-width: 1200px) 33vw, 25vw"
          />
          {product.authenticated && (
            <div className="absolute top-2 right-2 bg-black text-white text-xs font-semibold px-2 py-1 rounded">
              ✓ VERIFIED
            </div>
          )}
        </div>

        {/* Product Info */}
        <div className="p-4">
          <p className="text-xs font-semibold uppercase tracking-wide text-gray-600 mb-1">
            {product.brand}
          </p>
          <h3 className="text-sm font-medium text-black mb-2 line-clamp-1 group-hover:text-[hsl(var(--accent-blue))] transition-colors">
            {product.name}
          </h3>
          <div className="flex items-baseline gap-2">
            <p className="text-lg font-bold text-[hsl(var(--accent-orange))]">
              €{product.price}
            </p>
            {product.originalPrice && (
              <p className="text-sm text-gray-400 line-through">
                €{product.originalPrice}
              </p>
            )}
          </div>
          <p className="text-xs text-gray-500 mt-1">
            Size: {product.size} • {product.condition}
          </p>
        </div>
      </div>
    </Link>
  );
}
