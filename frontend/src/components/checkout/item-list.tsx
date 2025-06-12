'use client';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import useCartStore from '@/stores/useCartStore';
import { EmptyCart } from '../cart/cart-sidebar';
import { Button } from '../ui/button';
import { Minus, Plus } from 'lucide-react';

const CheckoutItemList = () => {
  const { items, updateQuantity } = useCartStore();

  if (!items.length) {
    return <EmptyCart />;
  }

  return (
    <>
      <div className="space-y-3 p-4">
        {items.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-4 border-b pb-4 last:border-b-0"
          >
            <Avatar className="w-16 h-16">
              <AvatarImage
                src={item.imageUrl}
                alt={item.name}
                className="object-cover"
              />
            </Avatar>
            <div className="flex-1">
              <h3 className="text-lg font-semibold">{item.name}</h3>
              <p className="text-sm text-muted-foreground">
                Seller: {item.seller.name}
              </p>
              <div>
                <span className="text-sm font-medium text-gray-900">
                  ${item.price.toFixed(2)}
                </span>
              </div>
              <div className="flex items-center gap-2">
                <Button
                  size="sm"
                  variant="outline"
                  className="h-6 w-6 p-0"
                  onClick={() =>
                    updateQuantity(item.productId, item.quantity - 1)
                  }
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
                  onClick={() =>
                    updateQuantity(item.productId, item.quantity + 1)
                  }
                >
                  <Plus className="h-3 w-3" />
                </Button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </>
  );
};

export default CheckoutItemList;
