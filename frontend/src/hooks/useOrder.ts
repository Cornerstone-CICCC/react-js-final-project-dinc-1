'use client';

import { Order } from '@/types/product';
import useUserStore from '@/stores/useUserStore';
import useSWR from 'swr'

const fetcher = async (url: string) => {
  const res = await fetch(url, {
    method: 'GET',
  });
  if (!res.ok) {
    throw new Error('Failed to fetch orders');
  }
  const data = await res.json();
  return data;
};

export const useOrder = () => {
  const { user } = useUserStore();
  const apiBaseUrl = process.env.NEXT_PUBLIC_API_BASE_URL || '';
  
  const { data: orders, error, isLoading } = useSWR<Order[]>(
    user ? `${apiBaseUrl}/orders/${user.id}` : null,
    fetcher
  );

  return {
    orders,
    isLoading,
    error,
  };
};