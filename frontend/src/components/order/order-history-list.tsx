'use client';

import { useOrder } from '@/hooks/useOrder';
import Image from 'next/image';

const OrderHistoryList = () => {
  const { orders, isLoading, error } = useOrder();
  console.log(orders);

  if (isLoading) return <div>Loading...</div>;
  if (error || !orders) return <div>Error: {error?.message}</div>;

  return (
    <div className="max-w-xl mx-auto py-10 md:py-20 space-y-6">
      <h1 className="text-3xl font-bold mb-12 text-center">Order History</h1>
      {orders.map((order) => (
        <div key={order._id}>
          <div className="flex flex-col mb-2 md:flex-row md:justify-between md:items-center">
            <h2 className="text-lg">
              {order.createdAt.slice(0, 10)} {order.createdAt.slice(11, 19)}
            </h2>
            <span className="text-sm text-muted-foreground">
              ORDER ID: {order._id}
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-1 border-gray-200 p-2 md:p-4">
            {order.lineItems.map((item, index) => (
              <div
                key={index}
                className={index > 0 ? 'border-t p-2 pt-3 mt-3' : 'p-2'}
              >
                <div className="flex gap-3 justify-between items-center">
                  <div className="relative size-20 aspect-square">
                    <Image
                      src={item.imageUrl}
                      alt={item.productName}
                      fill
                      className="object-cover"
                    />
                  </div>

                  <div className="flex flex-1 gap-3 justify-between md:items-center flex-col md:flex-row">
                    <p className="text-lg font-semibold truncate">
                      {item.productName}
                    </p>
                    <div className="flex gap-4 items-center justify-between">
                      <span className="text-md">${item.unitAmount}</span>
                      <span className="text-muted-foreground text-sm">
                        Qty: {item.quantity}
                      </span>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      ))}
    </div>
  );
};

export default OrderHistoryList;
