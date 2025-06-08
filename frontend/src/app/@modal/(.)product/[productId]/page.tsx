'use client';

import ProductModal from '@/components/product/product-modal';
import { useRouter } from 'next/navigation';
import { use, useEffect } from 'react';
import { usePreservedSearchParams } from '../../../layout';

type PageParams = {
  productId: string;
};

const ProductModalPage = ({ params }: { params: Promise<PageParams> }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const { productId } = resolvedParams;
  const { preservedSearchParams } = usePreservedSearchParams();

  // When the modal is opened, apply the preserved search params to the background URL
  useEffect(() => {
    if (preservedSearchParams && preservedSearchParams.toString()) {
      const currentUrl = new URL(window.location.href);
      const currentPath = currentUrl.pathname;

      if (!currentUrl.search && currentPath.includes('/product/')) {
        const newUrl = `${currentPath}?${preservedSearchParams.toString()}`;
        window.history.replaceState(null, '', newUrl);
      }
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