import { NextResponse } from 'next/server';
import { getAllProducts, searchProducts, getProductsByCategory, getProductsByBrand } from '@/lib/db/products';

export async function GET(request: Request) {
  const { searchParams } = new URL(request.url);
  const query = searchParams.get('q');
  const category = searchParams.get('category');
  const brand = searchParams.get('brand');

  let products = getAllProducts();

  if (query) {
    products = searchProducts(query);
  } else if (category) {
    products = getProductsByCategory(category);
  } else if (brand) {
    products = getProductsByBrand(brand);
  }

  return NextResponse.json(products);
}
