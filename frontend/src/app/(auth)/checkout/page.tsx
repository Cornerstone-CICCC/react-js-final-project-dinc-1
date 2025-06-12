'use client';
import { ShippingForm } from '@/components/shipping/shipping-form';
import CheckoutItemList from '@/components/checkout/item-list';
import OrderSummary from '@/components/checkout/order-summary';
import React from 'react';
import { Button } from '@/components/ui/button';

const CheckoutPage = () => {
  const formRef = React.createRef<HTMLButtonElement>();

  return (
    <div className="min-h-screen p-4 lg:px-20 lg:py-10 bg-gray-50">
      <h1 className="text-2xl font-bold mb-6">Checkout</h1>
      <div className="flex gap-8 lg:flex-row flex-col">
        <div className="flex flex-col gap-3 flex-1">
          <div className="space-y-6 bg-white rounded-2xl shadow-sm border-1 border-gray-200 p-6">
            <CheckoutItemList />
          </div>
          <div>
            <ShippingForm submitButtonRef={formRef} hideSubmitButton />
          </div>
        </div>
        <div className="flex-1 max-w-md">
          <div className="sticky top-16">
            <div className="space-y-6 bg-white rounded-2xl shadow-sm border-1 border-gray-200 p-6">
              <h2 className="text-lg font-semibold">Order Summary</h2>
              <OrderSummary />
            </div>
            <div className="mt-4">
              <Button
                type="submit"
                onClick={() => formRef.current?.click()}
                className="w-full p-5"
              >
                Continue
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default CheckoutPage;
