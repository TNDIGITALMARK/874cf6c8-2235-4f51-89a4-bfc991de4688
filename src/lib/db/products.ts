/**
 * TAGOFF - Mock Product Database
 * Premium streetwear and fashion resale marketplace
 */

export interface Product {
  id: string;
  slug: string;
  name: string;
  brand: string;
  category: 'streetwear' | 'sneakers' | 'accessories' | 'jackets';
  price: number;
  originalPrice?: number;
  images: string[];
  size: string;
  condition: 'New' | 'Like New' | 'Excellent' | 'Good' | 'Fair';
  description: string;
  authenticated: boolean;
  inStock: boolean;
  featured?: boolean;
}

export const products: Product[] = [
  {
    id: '1',
    slug: 'off-white-diagonal-hoodie',
    name: 'Diagonal Hoodie',
    brand: 'OFF-WHITE',
    category: 'streetwear',
    price: 490,
    originalPrice: 650,
    images: ['/generated/product-hoodie-1.png'],
    size: 'L',
    condition: 'Like New',
    description: 'Iconic Off-White diagonal stripe hoodie in black. Premium heavyweight cotton with signature arrows and branding. Authentic piece verified by our authentication team.',
    authenticated: true,
    inStock: true,
    featured: true,
  },
  {
    id: '2',
    slug: 'yeezy-boost-350-v2',
    name: 'Boost 350 V2',
    brand: 'YEEZY',
    category: 'sneakers',
    price: 320,
    images: ['/generated/product-sneaker-2.png'],
    size: '42',
    condition: 'New',
    description: 'Yeezy Boost 350 V2 in pristine condition. Primeknit upper with Boost cushioning. Comes with original box and tags. Never worn.',
    authenticated: true,
    inStock: true,
    featured: true,
  },
  {
    id: '3',
    slug: 'yeezy-boost-500-v2',
    name: 'Boost 500 V2',
    brand: 'YEEZY',
    category: 'sneakers',
    price: 220,
    images: ['/generated/product-sneaker-1.png'],
    size: '43',
    condition: 'Excellent',
    description: 'Yeezy Boost 500 V2 in excellent condition with minimal wear. Suede and mesh upper with adiPrene cushioning. Authentic guarantee.',
    authenticated: true,
    inStock: true,
    featured: true,
  },
  {
    id: '4',
    slug: 'puffer-jacket-black',
    name: 'Oversized Puffer Jacket',
    brand: 'YEEZY',
    category: 'jackets',
    price: 520,
    images: ['/generated/product-jacket-1.png'],
    size: 'M',
    condition: 'Like New',
    description: 'Black oversized puffer jacket with premium down filling. Modern streetwear silhouette with high-quality construction.',
    authenticated: true,
    inStock: true,
    featured: true,
  },
  {
    id: '5',
    slug: 'supreme-box-logo-hoodie',
    name: 'Box Logo Hoodie',
    brand: 'SUPREME',
    category: 'streetwear',
    price: 450,
    originalPrice: 600,
    images: ['/generated/product-hoodie-2.png'],
    size: 'L',
    condition: 'Excellent',
    description: 'Supreme Box Logo hoodie in grey. Classic design with embroidered box logo. Heavyweight cotton fleece. Authenticated.',
    authenticated: true,
    inStock: true,
  },
  {
    id: '6',
    slug: 'jordan-1-retro',
    name: 'Air Jordan 1 Retro High',
    brand: 'NIKE',
    category: 'sneakers',
    price: 280,
    images: ['/generated/product-sneaker-3.png'],
    size: '42',
    condition: 'New',
    description: 'Air Jordan 1 Retro High OG in classic black and white colorway. Premium leather construction. Deadstock condition with original packaging.',
    authenticated: true,
    inStock: true,
  },
  {
    id: '7',
    slug: 'designer-crossbody-bag',
    name: 'Designer Crossbody Bag',
    brand: 'LUXURY',
    category: 'accessories',
    price: 890,
    images: ['/generated/product-bag-1.png'],
    size: 'One Size',
    condition: 'Like New',
    description: 'Luxury crossbody bag in cognac leather. Gold hardware with adjustable strap. Minimal wear, excellent condition.',
    authenticated: true,
    inStock: true,
  },
  {
    id: '8',
    slug: 'luxury-gold-watch',
    name: 'Gold Luxury Watch',
    brand: 'LUXURY',
    category: 'accessories',
    price: 1200,
    images: ['/generated/product-watch-1.png'],
    size: 'Adjustable',
    condition: 'Excellent',
    description: 'Luxury gold-tone watch with precision movement. Timeless design with subtle branding. Complete with original box.',
    authenticated: true,
    inStock: true,
  },
];

// Helper functions
export function getAllProducts(): Product[] {
  return products;
}

export function getFeaturedProducts(): Product[] {
  return products.filter(p => p.featured);
}

export function getProductById(id: string): Product | undefined {
  return products.find(p => p.id === id);
}

export function getProductBySlug(slug: string): Product | undefined {
  return products.find(p => p.slug === slug);
}

export function getProductsByCategory(category: string): Product[] {
  return products.filter(p => p.category === category);
}

export function getProductsByBrand(brand: string): Product[] {
  return products.filter(p => p.brand.toLowerCase() === brand.toLowerCase());
}

export function searchProducts(query: string): Product[] {
  const lowerQuery = query.toLowerCase();
  return products.filter(
    p =>
      p.name.toLowerCase().includes(lowerQuery) ||
      p.brand.toLowerCase().includes(lowerQuery) ||
      p.description.toLowerCase().includes(lowerQuery)
  );
}
