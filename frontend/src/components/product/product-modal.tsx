'use client';

import {
  Dialog,
  DialogContent,
  DialogOverlay,
  DialogPortal,
  DialogTitle,
} from '@/components/ui/dialog';
import { Avatar, AvatarImage } from '@/components/ui/avatar';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { cn } from '@/lib/utils';
import { DotIcon } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { useState, useEffect } from 'react';
import { useWork } from '@/hooks/useWork';
import useUserStore from '@/stores/useUserStore';
import { slugToTitle } from '@/lib/utils';
import ProductSkeleton from '@/components/product/product-detail-skeleton';
import { useRouter } from 'next/navigation';
import { useAddToCart } from '@/hooks/useAddToCart';
import { Spinner } from '../ui/spinner';

type ProductModalProps = {
  productId: string;
  open: boolean;
  onClose: () => void;
};

const ProductModal = ({ productId, open, onClose }: ProductModalProps) => {
  const router = useRouter();
  const { user } = useUserStore();
  const { data, error, isFetching } = useWork(productId);
  const { addToCart, loading } = useAddToCart();
  const [currentImg, setCurrentImg] = useState<string>('');
  const isOwner = data?.user?.id === user?.id;

  useEffect(() => {
    if (data?.imageUrls && data.imageUrls.length > 0) {
      setCurrentImg(data.imageUrls[0]);
    }
  }, [data]);

  const handleImageChange = (url: string) => {
    setCurrentImg(url);
  };

  const handleAddToCart = async () => {
    if (!data) return;
    const success = await addToCart(data);
    if (success) {
      onClose();
    }
  };

  if (isFetching) {
    return (
      <Dialog open={open} onOpenChange={onClose}>
        <DialogPortal>
          <DialogOverlay className="!z-[9998]" style={{ zIndex: 9998 }} />
          <DialogContent
            className="!max-w-none !w-[70vw] !max-h-[95vh] overflow-y-auto p-0 !z-[9999]"
            style={{ width: '70vw', maxWidth: 'none', zIndex: 9999 }}
          >
            <DialogTitle className="sr-only">Loading</DialogTitle>
            <ProductSkeleton />
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  }

  if (error || !data) {
    document.title = 'Error Loading Product...';
    return (
      <Dialog open={open} onOpenChange={onClose} modal={false}>
        <DialogPortal>
          <DialogOverlay className="!z-[9998]" style={{ zIndex: 9998 }} />
          <DialogContent
            className="max-w-md !z-[9999]"
            style={{ zIndex: 9999 }}
          >
            <DialogTitle className="sr-only">Error</DialogTitle>
            <div className="p-4">
              <h2 className="text-lg font-semibold mb-2">Error</h2>
              <p>{error?.message || 'Failed to load product'}</p>
            </div>
          </DialogContent>
        </DialogPortal>
      </Dialog>
    );
  }

  const target = new Date(data.updatedAt).getTime();
  const today = Date.now();
  const diff = Math.floor(today - target);

  const diffInMinutes = Math.floor(diff / (1000 * 60));
  const diffInHours = Math.floor(diff / (1000 * 60 * 60));
  const diffInDays = Math.floor(diff / (1000 * 60 * 60 * 24));

  const listedDate =
    diffInMinutes < 60
      ? `${diffInMinutes} minutes ago`
      : diffInHours < 24
        ? `${diffInHours} hours ago`
        : `${diffInDays} days ago`;

  document.title = `${data.name} - VanCart`;

  return (
    <Dialog open={open} onOpenChange={onClose}>
      <DialogPortal>
        <DialogOverlay className="!z-[9998]" style={{ zIndex: 9998 }} />
        <DialogContent
          className="!max-w-none !w-[70vw] !max-h-[95vh] overflow-y-auto p-0 !z-[9999]"
          style={{ width: '70vw', maxWidth: 'none', zIndex: 9999 }}
        >
          <DialogTitle className="sr-only">Product modal</DialogTitle>
          <div className="p-6">
            <div className="grid grid-cols-1 xl:grid-cols-2 gap-8">
              <div className="w-full">
                <div className="space-y-4">
                  <div className="aspect-square max-w-[600px] w-full mx-auto bg-zinc-100 relative">
                    {currentImg && (
                      <Image
                        src={currentImg}
                        alt={data.name}
                        fill
                        className="bg-zinc-100 object-contain"
                      />
                    )}
                  </div>
                  <div className="flex gap-2 justify-end max-w-[600px] w-full mx-auto flex-wrap">
                    {data.imageUrls?.map((url, i) => (
                      <button
                        key={i}
                        className={cn({
                          'bg-zinc-100 size-20 relative border-2 border-white hover:border-gray-300':
                            true,
                          'border-2 border-black': url === currentImg,
                        })}
                        onClick={() => handleImageChange(url)}
                      >
                        {url && (
                          <Image
                            src={url}
                            alt={data.name}
                            fill
                            className="object-contain"
                          />
                        )}
                      </button>
                    ))}
                  </div>
                </div>
              </div>
              <div className="space-y-6 w-full">
                <h2 className="text-3xl xl:text-4xl font-bold break-words">
                  {data.name}
                </h2>
                <div className="flex gap-2">
                  <Badge variant={'outline'}>
                    {slugToTitle(data.categorySlug)}
                  </Badge>
                </div>
                <div className="space-y-2">
                  <div className="text-3xl xl:text-4xl font-bold">
                    $ {data.price}
                  </div>
                  <div className="text-sm text-muted-foreground flex items-center flex-wrap">
                    <span>
                      {data.user?.location
                        ? data.user.location
                        : 'No location provided'}
                    </span>
                    <DotIcon className="mx-1" />
                    <span>Listed {listedDate}</span>
                  </div>
                </div>
                <div className="space-y-4 p-6 bg-zinc-50 rounded-lg">
                  <h3 className="text-xl font-bold">Details</h3>
                  <div className="text-muted-foreground">
                    <p className="leading-relaxed whitespace-pre-wrap break-words">
                      {data.description}
                    </p>
                  </div>
                </div>
                <div className="w-full flex items-center space-x-4 p-4 bg-zinc-50 rounded-lg">
                  <Avatar className="h-12 w-12">
                    <AvatarImage
                      src={data.user?.fileId || '/default-profile.png'}
                      alt={data.user?.name}
                    />
                  </Avatar>
                  <p className="truncate font-semibold text-lg">
                    <Link
                      href={isOwner ? `/profile` : `/user/${data.user?.id}`}
                      onClick={() => {
                        onClose();
                        setTimeout(() => {
                          router.push(
                            isOwner ? `/profile` : `/user/${data.user?.id}`,
                          );
                        }, 100);
                      }}
                      className="hover:underline"
                    >
                      {data.user?.name}
                    </Link>
                  </p>
                </div>

                {isOwner ? (
                  <Button
                    className="w-full h-12 cursor-pointer"
                    size={'lg'}
                    onClick={() => {
                      onClose();
                      setTimeout(() => {
                        router.push(`/work/edit`);
                      }, 100);
                    }}
                  >
                    <span className="uppercase">Edit</span>
                  </Button>
                ) : data.status === 'active' ? (
                  <Button
                    className="w-full h-12 cursor-pointer"
                    size={'lg'}
                    onClick={handleAddToCart}
                    disabled={loading}
                  >
                    {loading ? (
                      <div className="flex items-center justify-center">
                        <Spinner size={'small'} className="text-white" />
                        <span className="ml-2">Adding...</span>
                      </div>
                    ) : (
                      <span className="uppercase">Add to Cart</span>
                    )}
                  </Button>
                ) : (
                  <Button className="w-full h-12" size={'lg'} disabled>
                    <span className="uppercase">Sold Out</span>
                  </Button>
                )}
              </div>
            </div>
          </div>
        </DialogContent>
      </DialogPortal>
    </Dialog>
  );
};

export default ProductModal;
