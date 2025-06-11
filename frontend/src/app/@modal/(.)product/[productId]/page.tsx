'use client';

import ProductModal from '@/components/product/product-modal';
import { useRouter, usePathname } from 'next/navigation';
import { useEffect } from 'react';
import useSearchParamsStore from '@/stores/useSearchParamsStore';

type PageParams = {
  productId: string;
};

const ProductModalPage = ({ params }: { params: PageParams }) => {
  const router = useRouter();
  const pathname = usePathname();
  const { productId } = params;
  const { preservedSearchParams } = useSearchParamsStore();

  useEffect(() => {
    if (preservedSearchParams && preservedSearchParams.toString()) {
      const newUrl = `${pathname}?${preservedSearchParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [preservedSearchParams, pathname]);

  const handleClose = () => {
    router.back();
  };

  return (
    <ProductModal
      productId={productId}
      open={true}
      onClose={handleClose}
    />
  );
};

export default ProductModalPage;