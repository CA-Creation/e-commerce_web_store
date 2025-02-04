import React from 'react';
import { X, Heart } from 'lucide-react';
import type { Product } from '../types';

interface WishlistProps {
  isOpen: boolean;
  onClose: () => void;
  items: Product[];
  onRemoveFromWishlist: (productId: number) => void;
  onAddToCart: (product: Product, size: string) => void;
}

export default function Wishlist({ isOpen, onClose, items, onRemoveFromWishlist, onAddToCart }: WishlistProps) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-50 overflow-hidden">
      <div className="absolute inset-0 bg-black bg-opacity-50" onClick={onClose} />
      <div className="absolute inset-y-0 right-0 max-w-full flex">
        <div className="relative w-screen max-w-md">
          <div className="h-full flex flex-col bg-white shadow-xl">
            <div className="flex items-center justify-between px-4 py-6 border-b border-gray-200">
              <div className="flex items-center">
                <Heart className="h-6 w-6 text-red-500 mr-2" />
                <h2 className="text-lg font-medium text-gray-900">My Wishlist</h2>
              </div>
              <button
                onClick={onClose}
                className="p-2 rounded-full hover:bg-gray-100"
              >
                <X className="h-6 w-6 text-gray-400" />
              </button>
            </div>

            <div className="flex-1 py-6 overflow-y-auto px-4">
              {items.length === 0 ? (
                <div className="text-center py-8">
                  <Heart className="h-12 w-12 text-gray-300 mx-auto mb-4" />
                  <p className="text-gray-500">Your wishlist is empty</p>
                </div>
              ) : (
                <div className="space-y-6">
                  {items.map((item) => (
                    <div key={item.id} className="flex items-start space-x-4 p-4 bg-gray-50 rounded-xl">
                      <div className="flex-shrink-0 w-24 h-24 rounded-lg overflow-hidden">
                        <img
                          src={item.image}
                          alt={item.name}
                          className="w-full h-full object-cover"
                        />
                      </div>
                      <div className="flex-1 min-w-0">
                        <h3 className="text-sm font-medium text-gray-900">{item.name}</h3>
                        <p className="mt-1 text-sm text-gray-500">${item.price.toFixed(2)}</p>
                        <div className="mt-2 flex space-x-2">
                          <button
                            onClick={() => {
                              onAddToCart(item, item.sizes[0]);
                              onClose();
                            }}
                            className="text-sm bg-blue-600 text-white px-3 py-1 rounded-lg hover:bg-blue-700"
                          >
                            Add to Cart
                          </button>
                          <button
                            onClick={() => onRemoveFromWishlist(item.id)}
                            className="text-sm text-gray-500 hover:text-gray-700"
                          >
                            Remove
                          </button>
                        </div>
                      </div>
                    </div>
                  ))}
                </div>
              )}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}