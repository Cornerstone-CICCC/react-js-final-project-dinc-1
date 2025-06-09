'use client';

import Head from 'next/head';
import { useEffect } from 'react';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import Image from 'next/image';
import useProductStore from '@/stores/useProductStore';
import { ShippingForm } from '@/components/shipping/shipping-form';

const PaymentPage = () => {
  const pageTitle = 'Payment - DINCT';
  const { product } = useProductStore();

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  return (
    <div className="min-h-screen p-4 lg:px-20 lg:py-10 bg-gray-50">
      <Head>
        <title>{document.title}</title>
      </Head>
      <div className="flex gap-8">
        <div className="flex-1">
          <div className="bg-white rounded-2xl shadow-sm border-1 border-gray-200">
            <div className="flex flex-col justify-start items-start p-6 space-y-6">
              <div className="flex items-center gap-4">
                <div className="w-full flex items-center space-x-4">
                  <Avatar>
                    <AvatarImage
                      src={product?.user.fileId || '/default-profile.png'}
                      alt={product?.user.name}
                    />
                  </Avatar>
                  <p className="truncate font-semibold">{product?.user.name}</p>
                </div>
              </div>
              <div className="flex justify-start items-start gap-4">
                <div className="size-30 shrink-0 bg-gray-200 overflow-hidden relative">
                  <Image
                    src={product?.imageUrls[0] || '/tmp.png'}
                    alt={product?.name || 'Product image'}
                    className="object-cover"
                    fill
                  />
                </div>
                <div className="flex flex-col space-y-2">
                  <p className="text-md truncate text-muted-foreground">
                    {product?.name}
                  </p>
                  <span className="font-bold text-lg">${product?.price}</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="flex-1">
          <ShippingForm />
        </div>
      </div>
    </div>
  );
};

export default PaymentPage;
