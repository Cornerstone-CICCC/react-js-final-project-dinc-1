import Image from 'next/image';
import { Product } from '@/types/product';
import Link from 'next/link';

interface ProductCardProps {
  product: Product;
}

const ProductCard = ({ product }: ProductCardProps) => {
  return (
    <Link
      href={`/product/${product._id}`}
      className="flex flex-col w-full cursor-pointer hover:opacity-80"
    >
      <div className="relative aspect-square rounded bg-gray-200">
        <Image
          src={product.imageUrls[0]}
          alt={product.name}
          fill
          className="object-cover p-1"
        />
        {!product.status && (
          <div className="absolute inset-0 rounded bg-stone-950/75 flex items-center justify-center">
            <span className="text-stone-100 text-lg font-bold">SOLD OUT</span>
          </div>
        )}
      </div>
      <div className="mb-2 md:mb-0">
        <p className="font-bold mt-1 text-base">${product.price}</p>
        <h2 className="line-clamp-2 text-xs md:text-sm">{product.name}</h2>
      </div>
    </Link>
  );
};

export default ProductCard;
