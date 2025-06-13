'use client';

import { useState } from 'react';
import useCartStore from '@/stores/useCartStore';
import { CartItem } from '@/types/cart';
import { Product } from '@/types/product';
import toast from 'react-hot-toast';

export const useAddToCart = () => {
  const { addItem } = useCartStore();
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
      };

      addItem(cartItem);

      toast.success(`${product.name} added to cart!`, {
        duration: 3000,
      });

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