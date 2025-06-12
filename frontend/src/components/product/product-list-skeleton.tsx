import { Skeleton } from "@/components/ui/skeleton"

const ProductListSkeleton = () => {
  return (
    <div className="flex min-h-full w-full">
      <div className="w-full">
        <div className="px-2 sm:px-4 md:px-6">
          <div className="grid grid-cols-1 sm:grid-cols-3 lg:grid-cols-5 gap-2 sm:gap-3 md:gap-4">
            {[...Array(15)].map((_, index) => (
              <div key={index} className="flex flex-col w-full">
                <Skeleton className="aspect-square w-full rounded bg-gray-200" />
                <div className="mb-2 md:mb-0">
                  <Skeleton className="h-4 w-1/4 mt-1" />
                  <Skeleton className="h-3 w-3/4 mt-1" />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductListSkeleton
