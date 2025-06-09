'use client';

import { useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import useSearchParamsStore from '@/stores/useSearchParamsStore';

const SearchParamsHandler = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { setPreservedSearchParams } = useSearchParamsStore();

  useEffect(() => {
    if (pathname === '/' && searchParams.toString()) {
      setPreservedSearchParams(new URLSearchParams(searchParams.toString()));
    }
  }, [pathname, searchParams, setPreservedSearchParams]);

  return null;
};

export default SearchParamsHandler;