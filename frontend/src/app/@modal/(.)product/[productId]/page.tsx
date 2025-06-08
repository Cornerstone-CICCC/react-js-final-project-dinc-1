'use client';

import ProductModal from '@/components/product/product-modal';
import { useRouter } from 'next/navigation';
import { use } from 'react';

type PageParams = {
  productId: string;
};

const ProductModalPage = ({ params }: { params: Promise<PageParams> }) => {
  const router = useRouter();
  const resolvedParams = use(params);
  const { productId } = resolvedParams;

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