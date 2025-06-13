import { useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';
import useSearchParamsStore from '@/stores/useSearchParamsStore';

const usePreserveSearchParams = () => {
  const searchParams = useSearchParams();
  const pathname = usePathname();
  const { setPreservedSearchParams } = useSearchParamsStore();

  useEffect(() => {
    if (pathname === '/') {
      setPreservedSearchParams(new URLSearchParams(searchParams.toString()));
    }
  }, [pathname, searchParams, setPreservedSearchParams]);
};

export default usePreserveSearchParams;
