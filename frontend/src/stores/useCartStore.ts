'use client';

import { CartItem } from '@/types/cart';
import { create } from 'zustand';
import { persist } from 'zustand/middleware';

interface CartState {
  items: CartItem[];
  totalItems: number;
  totalPrice: number;
  isOpen: boolean;
  addItem: (item: CartItem) => void;
  removeItem: (productId: string) => void;
  updateQuantity: (productId: string, quantity: number) => void;
  clearCart: () => void;
  reset: () => void;
  setIsOpen: (isOpen: boolean) => void;
}

const calculateTotals = (items: CartItem[]) => {
  const totalItems = items.reduce((sum, item) => sum + item.quantity, 0);
  const totalPrice = items.reduce((sum, item) => sum + (item.price * item.quantity), 0);
  return { totalItems, totalPrice };
};

const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      totalItems: 0,
      totalPrice: 0,
      isOpen: false,

      addItem: (newItem: CartItem) => {
        const currentItems = get().items;
        const existingItem = currentItems.find(item => item.productId === newItem.productId);

        let updatedItems: CartItem[];
        if (existingItem) {
          updatedItems = currentItems.map(item =>
            item.productId === newItem.productId
              ? { ...item, quantity: item.quantity + newItem.quantity }
              : item
          );
        } else {
          updatedItems = [...currentItems, newItem];
        }

        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      removeItem: (productId: string) => {
        const currentItems = get().items;
        const updatedItems = currentItems.filter(item => item.productId !== productId);
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      updateQuantity: (productId: string, quantity: number) => {
        if (quantity <= 0) {
          get().removeItem(productId);
          return;
        }

        const currentItems = get().items;
        const updatedItems = currentItems.map(item =>
          item.productId === productId ? { ...item, quantity } : item
        );
        const { totalItems, totalPrice } = calculateTotals(updatedItems);
        set({ items: updatedItems, totalItems, totalPrice });
      },

      clearCart: () => {
        set({ items: [], totalItems: 0, totalPrice: 0 });
      },

      reset: () => {
        set({ items: [], totalItems: 0, totalPrice: 0, isOpen: false });
      },

      setIsOpen: (isOpen: boolean) => {
        set({ isOpen });
      },
    }),
    {
      name: 'cart-store',
    },
  ),
);

export default useCartStore;