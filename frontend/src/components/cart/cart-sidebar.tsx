'use client';

import {
  Sheet,
  SheetContent,
  SheetHeader,
  SheetTitle,
} from '@/components/ui/sheet';
import { Button } from '@/components/ui/button';
import useCartStore from '@/stores/useCartStore';
import { ShoppingBag, Package, Minus, Plus, Trash2 } from 'lucide-react';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

export const CartSidebar = () => {
  const { isOpen, setIsOpen, items, totalItems, totalPrice } = useCartStore();
  const router = useRouter();

  const handleCheckout = () => {
    setIsOpen(false);
    router.push('/payment');
  };

  return (
    <Sheet open={isOpen} onOpenChange={setIsOpen}>
      <SheetContent side="right" className="w-[400px] sm:w-[540px] flex flex-col h-full p-0">
        <SheetHeader className="flex-shrink-0 pb-4 px-4 pt-6">
          <SheetTitle className="flex items-center gap-2">
            <ShoppingBag className="h-5 w-5" />
            Cart ({totalItems})
          </SheetTitle>
        </SheetHeader>

        <div className="flex-1 overflow-y-auto min-h-0">
          {items.length === 0 ? (
            <EmptyCart />
          ) : (
            <CartItemsList />
          )}
        </div>

        {items.length > 0 && (
          <div className="flex-shrink-0 border-t pt-4 pb-6 px-4">
            <div className="flex justify-between items-center text-lg font-semibold mb-4">
              <span>Total:</span>
              <span>${totalPrice.toLocaleString()}</span>
            </div>
            <Button className="w-full cursor-pointer" size="lg" onClick={() => handleCheckout()}>
              <span className="uppercase">Proceed to Checkout</span>
            </Button>
          </div>
        )}
      </SheetContent>
    </Sheet>
  );
};

const CartItemsList = () => {
  const { items, updateQuantity, removeItem } = useCartStore();

  return (
    <div className="space-y-3 p-4">
      {items.map((item) => (
        <div key={item.id} className="flex gap-3 p-3 border border-gray-200 rounded-lg">
          <div className="relative w-16 h-16 flex-shrink-0">
            <Image
              src={item.imageUrl || '/placeholder-product.png'}
              alt={item.name}
              fill
              className="object-cover rounded-md"
            />
          </div>

          <div className="flex-1 min-w-0 flex flex-col justify-between">
            <div>
              <h4 className="font-medium text-sm text-gray-900 truncate">{item.name}</h4>
              <p className="text-sm text-gray-500">${item.price}</p>
            </div>

            <div className="flex items-center justify-between mt-2">
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 w-6 p-0"
                  onClick={() => updateQuantity(item.productId, item.quantity - 1)}
                  disabled={item.quantity <= 1}
                >
                  <Minus className="h-3 w-3" />
                </Button>

                <span className="text-sm font-medium min-w-[1.5rem] text-center">
                  {item.quantity}
                </span>

                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 w-6 p-0"
                  onClick={() => updateQuantity(item.productId, item.quantity + 1)}
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>

              <div className="flex items-center gap-2">
                <p className="font-medium text-sm">
                  ${(item.price * item.quantity).toLocaleString()}
                </p>
                <Button
                  size="sm"
                  variant="ghost"
                  className="h-6 w-6 p-0 text-red-500 hover:text-red-700"
                  onClick={() => removeItem(item.productId)}
                >
                  <Trash2 className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

const EmptyCart = () => {
  return (
    <div className="flex flex-col items-center justify-center h-full text-center px-8 py-12">
      <div className="w-20 h-20 bg-gray-100 rounded-full flex items-center justify-center mb-4">
        <Package className="h-10 w-10 text-gray-400" />
      </div>

      <h3 className="text-lg font-semibold text-gray-900 mb-2">
        Your cart is empty
      </h3>

      <p className="text-gray-500 text-sm max-w-xs">
        Add your favorite items to your cart and start shopping.
      </p>
    </div>
  );
};