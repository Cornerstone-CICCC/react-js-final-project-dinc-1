'use client';
import Head from 'next/head';
import SearchSidebar from '@/components/SearchSidebar';
import HomeSkeleton from '@/components/home-skeleton';
import ProductList from '@/components/product/product-list';
import { useSearchParams } from 'next/navigation';
import { useDebounce } from 'use-debounce';
import { useEffect } from 'react';
import { usePreservedSearchParams } from './layout';

const Home = () => {
  const pageTitle = 'Home - DINCT';
  const searchParams = useSearchParams();
  const { preservedSearchParams } = usePreservedSearchParams();
  
  // Use current search params or preserved search params
  const currentSearchParams = searchParams.toString() ? searchParams : preservedSearchParams;
  const searchQuery = currentSearchParams?.get('search') || '';
  const searchCategory = currentSearchParams?.get('category') || '';
  const [debouncedHandleSearch] = useDebounce(searchQuery, 1000);

  useEffect(() => {
    if (typeof window !== 'undefined') {
      document.title = pageTitle;
    }
  }, [pageTitle]);

  const productSkeleton = true;

  if (!productSkeleton) {
    return <HomeSkeleton />;
  }
  return (
    <div className="min-h-[calc(100vh-50px-70px)] w-full md:flex">
      <Head>
        <title>{document.title}</title>
      </Head>
      <SearchSidebar />
      <ProductList category={searchCategory} search={debouncedHandleSearch} />
    </div>
  );
};

export default Home;
