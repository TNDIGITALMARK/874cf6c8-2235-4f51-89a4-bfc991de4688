# TagOff - Premium Streetwear Resale Marketplace

A modern, full-stack e-commerce platform for authentic streetwear and luxury fashion resale, built with Next.js 15, TypeScript, and Tailwind CSS.

## Project Overview

**TagOff** is a pixel-perfect implementation of a premium streetwear marketplace featuring:

- 🎨 **Modern Design System** - Clean, minimalist UI with Inter font and monochromatic color scheme
- 🛍️ **Full E-commerce Features** - Product browsing, detailed views, shopping cart, and checkout
- ✅ **Authentication Badges** - Trust signals for verified authentic products
- 📱 **Mobile-First & Responsive** - Optimized for all screen sizes
- ⚡ **Fast & SEO-Friendly** - Server-side rendering with Next.js App Router

## Tech Stack

- **Framework**: Next.js 15.5.2 (App Router)
- **Language**: TypeScript 5
- **Styling**: Tailwind CSS v4
- **UI Components**: Radix UI primitives
- **Icons**: Lucide React
- **State Management**: React hooks + localStorage
- **Image Generation**: AI-powered product images

## Features Implemented

### Core Pages (3-Page MVP)
1. **Homepage** (`/`) - Hero section with featured products, new arrivals grid, "How It Works" section, category navigation
2. **Product Detail** (`/product/[slug]`) - Image gallery, authentication badges, add to cart, related products
3. **Shopping Cart & Checkout** (`/cart`) - Cart management, quantity updates, secure checkout flow

### Additional Pages
- **Shop All** (`/shop`) - Full product catalog
- **Category Pages** (`/category/[category]`) - Filtered product views
- **Sell Page** (`/sell`) - Seller onboarding and process explanation
- **About Page** (`/about`) - Brand story and mission
- **Account Page** (`/account`) - User profile management

### Components
- **Header** - Fixed navigation with search, cart counter, and menu
- **Footer** - Three-column layout with links, social media, and payment icons
- **ProductCard** - Reusable product display with hover effects
- **Responsive Layout** - Mobile-first design with breakpoints

### Backend
- **API Routes** - RESTful endpoints for products
- **Mock Database** - In-memory product catalog with 8 premium items
- **Cart Management** - Client-side cart with localStorage persistence

## Design System

### Colors
- **Black** (`#000000`) - Primary brand color for headers, buttons, text
- **White** (`#FFFFFF`) - Backgrounds and text on dark
- **Accent Blue** (`#0066FF`) - Hero borders and links
- **Accent Orange** (`#FF6B35`) - Prices and CTAs
- **Gray Scale** - Neutral palette for UI elements

### Typography
- **Font Family**: Inter (Google Fonts)
- **Weights**: 400 (Regular), 500 (Medium), 600 (Semibold), 700 (Bold), 800 (Extra Bold)
- **Hierarchy**: H1 (36px) → H6 (16px) with proper line-height and spacing

### Spacing & Layout
- **Container**: Max-width 1400px with 24px padding
- **Grid**: Responsive 1-4 column product grids
- **Border Radius**: 6px for cards, buttons, inputs
- **Shadows**: Subtle elevation (0 2px 8px rgba(0,0,0,0.08))

## Product Catalog

8 premium streetwear items across 4 categories:

**Streetwear**
- Off-White Diagonal Hoodie (€490)
- Supreme Box Logo Hoodie (€450)

**Sneakers**
- Yeezy Boost 350 V2 (€320)
- Yeezy Boost 500 V2 (€220)
- Air Jordan 1 Retro High (€280)

**Jackets**
- Yeezy Oversized Puffer Jacket (€520)

**Accessories**
- Luxury Crossbody Bag (€890)
- Gold Luxury Watch (€1,200)

All products include:
- Professional product photography (AI-generated)
- Authentication verification badges
- Detailed condition descriptions
- Multiple size options
- Inventory management

## Getting Started

```bash
# Install dependencies (already installed via symlink)
npm install

# Run development server
npm run dev

# Build for production
npm run build

# Start production server
npm start
```

The application runs on **port 4006** by default.

## Project Structure

```
src/
├── app/                    # Next.js App Router pages
│   ├── page.tsx           # Homepage
│   ├── cart/              # Shopping cart & checkout
│   ├── product/[slug]/    # Product detail pages
│   ├── category/[category]/ # Category pages
│   ├── shop/              # All products
│   ├── sell/              # Seller onboarding
│   ├── about/             # About page
│   ├── account/           # User account
│   ├── api/               # API routes
│   └── globals.css        # Global styles & design system
├── components/            # React components
│   ├── Header.tsx         # Site header
│   ├── Footer.tsx         # Site footer
│   └── ProductCard.tsx    # Product display card
├── lib/
│   └── db/                # Mock database
│       ├── products.ts    # Product catalog
│       └── cart.ts        # Cart management
└── public/
    └── generated/         # AI-generated product images
```

## Key Implementation Details

### State Management
- **Cart**: localStorage-based persistence with custom events for cross-component updates
- **Product Data**: Static mock database with helper functions for filtering/search

### Image Handling
- **Next.js Image Component**: Optimized images with responsive sizes
- **AI-Generated Assets**: 8 professional product photos created with Banana Nano MCP
- **Aspect Ratios**: Perfect 1:1 squares for product images

### Responsive Design
- **Breakpoints**: sm (640px), md (768px), lg (1024px), xl (1280px)
- **Mobile Navigation**: Collapsible menu for small screens
- **Grid Layouts**: 1-col mobile → 4-col desktop for product grids

### Performance
- **SSR**: Server-side rendering for SEO and fast initial load
- **Code Splitting**: Automatic route-based splitting
- **Image Optimization**: WebP with fallbacks, lazy loading

## Design Reference Fidelity

This implementation achieves **pixel-perfect replication** of the provided design reference:

✅ Exact color values extracted and applied
✅ Inter font family with correct weights
✅ Precise spacing and layout measurements
✅ Matching shadow and border-radius values
✅ Identical component styling (buttons, cards, forms)
✅ Hero section with blue border (3px #0066FF)
✅ Orange pricing (#FF6B35)
✅ Black header with white text
✅ Product cards with authentication badges

## Future Enhancements

Potential features for scaling beyond MVP:
- User authentication and accounts
- Wishlist functionality
- Product reviews and ratings
- Advanced search and filtering
- Seller dashboard
- Order tracking
- Payment gateway integration (Stripe, PayPal)
- Email notifications
- Real-time inventory updates
- Multi-language support

## Browser Support

- Chrome/Edge (latest)
- Firefox (latest)
- Safari (latest)
- Mobile browsers (iOS Safari, Chrome Mobile)

## License

Private project - All rights reserved

---

**Built with precision and attention to detail** ✨
