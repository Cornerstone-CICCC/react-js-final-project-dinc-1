'use client';

import ProductModal from '@/components/product/product-modal';
import { useRouter, usePathname, useParams } from 'next/navigation';
import { useEffect } from 'react';
import useSearchParamsStore from '@/stores/useSearchParamsStore';

type PageParams = {
  productId: string;
};

const ProductModalPage = () => {
  const router = useRouter();
  const pathname = usePathname();
  const params = useParams<PageParams>();
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
    <ProductModal productId={productId} open={true} onClose={handleClose} />
  );
};

export default ProductModalPage;
