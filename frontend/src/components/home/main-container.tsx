'use client';

import SearchSidebar from '../SearchSidebar';
import ProductList from '../product/product-list';
import { useSearchParams } from 'next/navigation';
import useSearchParamsStore from '@/stores/useSearchParamsStore';
import { useDebounce } from 'use-debounce';

const MainContainer = () => {
  const searchParams = useSearchParams();
  const { preservedSearchParams } = useSearchParamsStore();
  // Use current search params or preserved search params
  const currentSearchParams = searchParams.toString()
    ? searchParams
    : preservedSearchParams;
  const searchQuery = currentSearchParams?.get('search') || '';
  const searchCategory = currentSearchParams?.get('category') || '';
  const [debouncedHandleSearch] = useDebounce(searchQuery, 1000);

  return (
    <div className="min-h-[calc(100vh-50px-70px)] w-full md:flex md:px-8 md:gap-8">
      <SearchSidebar />
      <ProductList category={searchCategory} search={debouncedHandleSearch} />
    </div>
  );
};

export default MainContainer;
