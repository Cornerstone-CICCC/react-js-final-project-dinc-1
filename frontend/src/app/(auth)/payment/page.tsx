import { ShippingForm } from '@/components/shipping/shipping-form';
import ItemList from '@/components/payment/item-list';
import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Checkout - VanCart',
  description: 'Payment',
};

const PaymentPage = () => {
  return (
    <div className="min-h-screen p-4 lg:px-20 lg:py-10">
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="flex-1">
          <ItemList />
        </div>
        <div className="flex-1">
          <ShippingForm />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
