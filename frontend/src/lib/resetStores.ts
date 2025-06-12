'use client';

import useUserStore from '@/stores/useUserStore';
import useCartStore from '@/stores/useCartStore';
import useProductStore from '@/stores/useProductStore';
import useSearchParamsStore from '@/stores/useSearchParamsStore';
import { createClient } from '@supabase/supabase-js';

export const resetAllStores = async () => {
  useUserStore.getState().reset();

  useCartStore.getState().reset();

  useProductStore.getState().reset();

  useSearchParamsStore.getState().reset();

  if (typeof window !== 'undefined') {
    try {
      const supabase = createClient(
        process.env.NEXT_PUBLIC_SUPABASE_URL || '',
        process.env.NEXT_PUBLIC_SUPABASE_ANON_KEY || ''
      );
      await supabase.auth.signOut();
    } catch (error) {
      console.error('Failed to sign out from Supabase:', error);
    }

    localStorage.removeItem('user-store');
    localStorage.removeItem('cart-store');
    localStorage.removeItem('product-store');

    localStorage.removeItem('sb-bkzswegafetzyltlxhpc-auth-token');
    sessionStorage.removeItem('sb-bkzswegafetzyltlxhpc-auth-token');
  }
};