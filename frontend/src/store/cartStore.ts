import { create } from 'zustand';
import { persist, createJSONStorage } from 'zustand/middleware';

type CartItem = {
  productId: string;
  name: string;
  price: number;
  quantity: number;
  options?: {
    size?: string;
    color?: string;
  };
};

type CartState = {
  items: CartItem[];
  addItem: (item: CartItem) => void;
  removeItem: (productId: string, options?: unknown) => void;
  updateQuantity: (
    productId: string,
    quantity: number,
    options?: unknown,
  ) => void;
  clearCart: () => void;
  totalItems: () => number;
  totalPrice: () => number;
};

export const useCartStore = create<CartState>()(
  persist(
    (set, get) => ({
      items: [],
      addItem: (newItem) => {
        const items = get().items;
        const existingIndex = items.findIndex(
          (item) =>
            item.productId === newItem.productId &&
            JSON.stringify(item.options) === JSON.stringify(newItem.options),
        );

        if (existingIndex >= 0) {
          const updatedItems = [...items];
          updatedItems[existingIndex].quantity += newItem.quantity;
          set({ items: updatedItems });
        } else {
          set({ items: [...items, newItem] });
        }
      },

      removeItem: (productId, options) => {
        set((state) => ({
          items: state.items.filter(
            (item) =>
              item.productId !== productId ||
              (options &&
                JSON.stringify(item.options) !== JSON.stringify(options)),
          ),
        }));
      },

      updateQuantity: (productId, quantity, options) => {
        set((state) => ({
          items: state.items.map((item) => {
            if (
              item.productId === productId &&
              JSON.stringify(item.options) === JSON.stringify(options)
            ) {
              return { ...item, quantity };
            }
            return item;
          }),
        }));
      },

      clearCart: () => set({ items: [] }),

      totalItems: () =>
        get().items.reduce((total, item) => total + item.quantity, 0),

      totalPrice: () =>
        get().items.reduce(
          (total, item) => total + item.price * item.quantity,
          0,
        ),
    }),
    {
      name: 'cart-storage',
      storage: createJSONStorage(() => localStorage),
      partialize: (state) => ({
        items: state.items,
      }),
    },
  ),
);
