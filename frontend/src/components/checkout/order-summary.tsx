import React from 'react';
import useCartStore from '@/stores/useCartStore';

const OrderSummary = () => {
  const { totalItems, totalPrice } = useCartStore();
  return (
    <div>
      <div className="flex justify-between">
        <span>Total Items:</span>
        <span>{totalItems}</span>
      </div>
      <div className="flex justify-between mt-2 font-semibold">
        <span>Total Price:</span>
        <span>${totalPrice.toFixed(2)}</span>
      </div>
    </div>
  );
};

export default OrderSummary;
