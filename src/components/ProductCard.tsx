import React from 'react';
import type { Product } from '../types';
import ProductDetails from './ProductDetails';
import { ShoppingCart, Heart } from 'lucide-react';

interface ProductCardProps {
  product: Product;
  onAddToCart: (product: Product, size: string) => void;
  isWishlisted: boolean;
  onToggleWishlist: () => void;
}

export default function ProductCard({ product, onAddToCart, isWishlisted, onToggleWishlist }: ProductCardProps) {
  const [selectedSize, setSelectedSize] = React.useState(product.sizes[0]);
  const [isHovered, setIsHovered] = React.useState(false);
  const [showDetails, setShowDetails] = React.useState(false);

  return (
    <>
      <div 
        className="group relative bg-white rounded-3xl shadow-sm overflow-hidden transition-all duration-300 hover:shadow-xl h-full flex flex-col"
        onMouseEnter={() => setIsHovered(true)}
        onMouseLeave={() => setIsHovered(false)}
      >
        {/* Quick actions */}
        <div className="absolute top-4 right-4 z-10 space-y-2 opacity-0 group-hover:opacity-100 transition-opacity">
          <button 
            onClick={(e) => {
              e.stopPropagation();
              onToggleWishlist();
            }}
            className="p-2 bg-white rounded-full shadow-lg hover:bg-gray-50 transition-colors"
          >
            <Heart 
              className={`h-5 w-5 ${isWishlisted ? 'fill-red-500 text-red-500' : 'text-gray-600'}`}
            />
          </button>
        </div>

        {/* Image section - Fixed aspect ratio */}
        <div 
          className="relative w-full pt-[125%] bg-gray-100 cursor-pointer"
          onClick={() => setShowDetails(true)}
        >
          <div className="absolute inset-0 bg-gradient-to-b from-transparent to-black/5 group-hover:opacity-0 transition-opacity" />
          <img
            src={product.image}
            alt={product.name}
            className={`absolute inset-0 w-full h-full object-cover transition-transform duration-700 ${
              isHovered ? 'scale-110' : 'scale-100'
            }`}
          />
          <div className="absolute bottom-4 left-4">
            <span className="inline-block px-3 py-1 bg-white/90 backdrop-blur-sm text-gray-900 text-sm font-medium rounded-full">
              {product.category}
            </span>
          </div>
        </div>

        {/* Content section - Consistent padding and spacing */}
        <div className="p-6 flex-1 flex flex-col space-y-4">
          <div className="flex-1">
            <h3 
              className="text-xl font-bold text-gray-900 cursor-pointer hover:text-blue-600 transition-colors line-clamp-2"
              onClick={() => setShowDetails(true)}
            >
              {product.name}
            </h3>
            <p className="mt-2 text-gray-600 text-sm line-clamp-2 h-10">{product.description}</p>
          </div>

          <div className="space-y-4">
            <div className="flex items-center justify-between">
              <p className="text-2xl font-bold text-gray-900">${product.price.toFixed(2)}</p>
            </div>

            <div className="space-y-2">
              <label className="block text-sm font-medium text-gray-700">Size:</label>
              <div className="flex flex-wrap gap-2">
                {product.sizes.map((size) => (
                  <button
                    key={size}
                    onClick={(e) => {
                      e.stopPropagation();
                      setSelectedSize(size);
                    }}
                    className={`px-3 py-1 rounded-lg text-sm font-medium transition-colors ${
                      selectedSize === size
                        ? 'bg-blue-600 text-white'
                        : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                    }`}
                  >
                    {size}
                  </button>
                ))}
              </div>
            </div>

            <button
              onClick={(e) => {
                e.stopPropagation();
                onAddToCart(product, selectedSize);
              }}
              className="w-full bg-gray-900 text-white py-3 px-4 rounded-xl hover:bg-gray-800 transition-colors duration-300 flex items-center justify-center gap-2"
            >
              <ShoppingCart className="h-5 w-5" />
              <span>Add to Cart</span>
            </button>
          </div>
        </div>
      </div>

      <ProductDetails
        product={product}
        isOpen={showDetails}
        onClose={() => setShowDetails(false)}
        onAddToCart={onAddToCart}
      />
    </>
  );
}