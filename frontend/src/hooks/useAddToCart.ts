'use client';

import { useState } from 'react';
import useCartStore from '@/stores/useCartStore';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';

export const useAddToCart = () => {
  const { addItem, setIsOpen } = useCartStore();
  const [loading, setLoading] = useState(false);

  const addToCart = async (product: Product, quantity: number = 1) => {
    setLoading(true);

    try {
      const cartItem: CartItem = {
        id: `cart-${product._id}-${Date.now()}`,
        productId: product._id,
        name: product.name,
        price: product.price,
        imageUrl: product.imageUrls[0] || '',
        quantity: quantity,
        seller: product.user,
      };

      addItem(cartItem);
      setIsOpen(true);
      return true;
    } catch (error) {
      console.error('Failed to add item to cart:', error);
      return false;
    } finally {
      setLoading(false);
    }
  };

  return {
    addToCart,
    loading,
  };
};
