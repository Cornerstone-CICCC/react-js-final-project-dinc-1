'use client';

import ProductModal from '@/components/product/product-modal';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';
import useSearchParamsStore from '@/stores/useSearchParamsStore';

type PageParams = {
  productId: string;
};

const ProductModalPage = ({ params }: { params: Promise<PageParams> }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const { productId } = resolvedParams;
  const { preservedSearchParams } = useSearchParamsStore();

  useEffect(() => {
    if (preservedSearchParams && preservedSearchParams.toString()) {
      const newUrl = `${window.location.pathname}?${preservedSearchParams.toString()}`;
      window.history.replaceState(null, '', newUrl);
    }
  }, [preservedSearchParams]);

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