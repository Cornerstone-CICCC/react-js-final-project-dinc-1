'use client';

import Image from 'next/image';
import useCartStore from '@/stores/useCartStore';

const ItemList = () => {
  const { items, totalPrice } = useCartStore();

  return (
    <div className="space-y-4">
      {items.map((item) => (
        <div key={item.id} className="bg-white rounded-2xl shadow-sm border-1 border-gray-200">
          <div className="flex flex-col justify-start items-start p-6 space-y-6">
            <div className="flex justify-start items-start gap-4">
              <div className="size-30 shrink-0 bg-gray-200 overflow-hidden relative">
                <Image
                  src={item.imageUrl || '/tmp.png'}
                  alt={item.name || 'Product image'}
                  className="object-cover"
                  fill
                />
              </div>
              <div className="flex flex-col space-y-2">
                <p className="text-md truncate text-muted-foreground">
                  {item.name}
                </p>
                <div className="flex items-center gap-2">
                  <span className="font-bold text-lg">${item.price}</span>
                  <span className="text-sm text-gray-500">x {item.quantity}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      ))}
      <div className="bg-white rounded-2xl shadow-sm border-1 border-gray-200 p-6">
        <div className="flex justify-between items-center">
          <span className="text-lg font-semibold">Total Amount</span>
          <span className="text-2xl font-bold">${totalPrice.toLocaleString()}</span>
        </div>
      </div>
    </div>
  );
};

export default ItemList;
