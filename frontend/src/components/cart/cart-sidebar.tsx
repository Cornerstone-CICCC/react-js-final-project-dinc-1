'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/useCartStore';
import { ShoppingBag, Package } from 'lucide-react';

export const CartSidebar = () => {
  const { isOpen, setIsOpen, items, totalItems, totalPrice } = useCartStore();

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px]">
        <SheetHeader>
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto py-6">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <div>
              {/* TODO: Cart items list */}
              <p>Cart items list</p>
            </div>
          )}
        </div>

        {items.length > 0 && (
          <div className="border-t pt-4">
            <div className="flex justify-between text-lg font-semibold mb-4">
              <span>Total:</span>
              <span>{totalPrice.toLocaleString()} CAD</span>
            </div>
            <Button className="w-full" size="lg">
              Proceed to checkout
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center py-12">
      <div className="w-24 h-24 bg-gray-100 rounded-full flex items-center justify-center mb-6">
        <Package className="h-12 w-12 text-gray-400" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Your cart is empty
      </h3>

      <p className="text-gray-500 mb-8 max-w-sm">
        Add your favorite items to your cart and start shopping.
      </p>
    </div>
  );
};