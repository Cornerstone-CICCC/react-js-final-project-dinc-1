import OrderHistoryList from '@/components/order/order-history-list';

export const metadata = {
  title: 'Order History - VanCart',
  description: 'View your order history',
};

const OrderHistory = () => {
  return (
    <div className="min-h-screen p-4 lg:px-20 lg:py-10">
      <OrderHistoryList />
    </div>
  );
};

export default OrderHistory;
