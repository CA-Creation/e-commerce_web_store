export const products = [
  // Sneakers Collection (keeping the existing 20 sneakers)
  {
    id: 1,
    name: "Air Max Classic",
    price: 129.99,
    category: "Sneakers",
    image: "https://images.unsplash.com/photo-1597045566677-8cf032ed6634?w=500",
    description: "Iconic design with maximum comfort and air cushioning",
    sizes: ["7", "8", "9", "10", "11", "12"]
  },
  // ... (previous 19 sneakers remain unchanged)
  {
    id: 20,
    name: "Metro Flex",
    price: 144.99,
    category: "Sneakers",
    image: "https://images.unsplash.com/photo-1600185365926-3a2ce3cdb9eb?w=500",
    description: "Flexible urban style for everyday comfort",
    sizes: ["8", "9", "10", "11"]
  },

  // T-Shirts Collection
  {
    id: 21,
    name: "Essential Cotton Tee",
    price: 24.99,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1521572163474-6864f9cf17ab?w=500",
    description: "Classic cotton t-shirt for everyday comfort",
    sizes: ["XS", "S", "M", "L", "XL"]
  },
  {
    id: 22,
    name: "Vintage Graphic Tee",
    price: 29.99,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?w=500",
    description: "Retro-inspired graphic print on soft cotton",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 23,
    name: "Striped Sailor Tee",
    price: 34.99,
    category: "T-Shirts",
    image: "https://images.unsplash.com/photo-1503341455253-b2e723bb3dbb?w=500",
    description: "Classic striped pattern in navy and white",
    sizes: ["XS", "S", "M", "L", "XL"]
  },

  // Hoodies Collection
  {
    id: 24,
    name: "Classic Zip Hoodie",
    price: 49.99,
    category: "Hoodies",
    image: "https://images.unsplash.com/photo-1556821840-3a63f95609a7?w=500",
    description: "Comfortable zip-up hoodie for casual wear",
    sizes: ["S", "M", "L", "XL", "XXL"]
  },
  {
    id: 25,
    name: "Tech Fleece Pullover",
    price: 64.99,
    category: "Hoodies",
    image: "https://images.unsplash.com/photo-1578768079052-aa76e52ff62e?w=500",
    description: "Advanced fleece technology for warmth",
    sizes: ["M", "L", "XL", "XXL"]
  },
  {
    id: 26,
    name: "Oversized Street Hoodie",
    price: 59.99,
    category: "Hoodies",
    image: "https://images.unsplash.com/photo-1513789181297-6f2ec112c0bc?w=500",
    description: "Trendy oversized fit with street style",
    sizes: ["S", "M", "L", "XL"]
  },

  // Jeans Collection
  {
    id: 27,
    name: "Classic Slim Fit",
    price: 79.99,
    category: "Jeans",
    image: "https://images.unsplash.com/photo-1541099649105-f69ad21f3246?w=500",
    description: "Timeless slim fit in premium denim",
    sizes: ["28", "30", "32", "34", "36"]
  },
  {
    id: 28,
    name: "Vintage Wash Straight",
    price: 89.99,
    category: "Jeans",
    image: "https://images.unsplash.com/photo-1542272604-787c3835535d?w=500",
    description: "Straight cut with vintage wash finish",
    sizes: ["29", "31", "33", "35"]
  },
  {
    id: 29,
    name: "Distressed Skinny",
    price: 84.99,
    category: "Jeans",
    image: "https://images.unsplash.com/photo-1604176354204-9268737828e4?w=500",
    description: "Trendy distressed details in skinny fit",
    sizes: ["28", "30", "32", "34"]
  },

  // Dresses Collection
  {
    id: 30,
    name: "Summer Floral Dress",
    price: 69.99,
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1572804013309-59a88b7e92f1?w=500",
    description: "Light and breezy floral print dress",
    sizes: ["XS", "S", "M", "L"]
  },
  {
    id: 31,
    name: "Classic Black Midi",
    price: 89.99,
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1595777457583-95e059d581b8?w=500",
    description: "Elegant midi dress in timeless black",
    sizes: ["S", "M", "L", "XL"]
  },
  {
    id: 32,
    name: "Boho Maxi Dress",
    price: 94.99,
    category: "Dresses",
    image: "https://images.unsplash.com/photo-1583496661160-fb5886a0aaaa?w=500",
    description: "Flowing maxi dress with bohemian print",
    sizes: ["XS", "S", "M", "L"]
  }
] as const;