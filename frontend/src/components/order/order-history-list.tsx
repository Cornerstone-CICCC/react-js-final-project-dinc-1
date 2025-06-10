'use client'

import { useOrder } from '@/hooks/useOrder'

const OrderHistoryList = () => {
  const { orders, isLoading, error } = useOrder();
  console.log(orders);

  if (isLoading) return <div>Loading...</div>;
  if (error || !orders) return <div>Error: {error?.message}</div>;

  return (
    <div>
      {orders.map((order) => (
        <div key={order._id}>
          <h2>{order.createdAt}</h2>
          {order.lineItems.map((item, index) => (
            <div key={index}>
              <p>{item.productName}</p>
              <p>${item.unitAmount}</p>
              <p>{item.quantity}</p>
            </div>
          ))}
        </div>
      ))}
    </div>
  )
}

export default OrderHistoryList
