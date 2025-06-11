'use client';

import { useOrder } from '@/hooks/useOrder';

const OrderHistoryList = () => {
  const { orders, isLoading, error } = useOrder();
  console.log(orders);

  if (isLoading) return <div>Loading...</div>;
  if (error || !orders) return <div>Error: {error?.message}</div>;

  return (
    <div className="max-w-3xl mx-auto space-y-7">
      {orders.map((order) => (
        <div key={order._id}>
          <div className="flex justify-between items-center">
            <h2 className="text-lg font-semibold mb-2">
              {order.createdAt.slice(0, 10)}
            </h2>
            <span className="text-sm text-muted-foreground">
              ORDER: {order._id}
            </span>
          </div>
          <div className="bg-white rounded-2xl shadow-sm border-1 border-gray-200 p-4">
            {order.lineItems.map((item, index) => (
              <div
                key={index}
                className={index > 0 ? 'border-t p-2 pt-3 mt-3' : 'p-2'}
              >
                <div className="flex justify-between">
                  <p className="text-lg font-semibold truncate">
                    {item.productName}
                  </p>
                  <div className="flex gap-3 items-center">
                    <span className="text-md">${item.unitAmount}</span>
                    <span>{item.quantity}</span>
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
