'use client';

import { create } from 'zustand';

interface SearchParamsState {
  preservedSearchParams: URLSearchParams | null;
  setPreservedSearchParams: (params: URLSearchParams | null) => void;
  clearPreservedSearchParams: () => void;
  reset: () => void;
}

const useSearchParamsStore = create<SearchParamsState>((set) => ({
  preservedSearchParams: null,
  setPreservedSearchParams: (params) => set({ preservedSearchParams: params }),
  clearPreservedSearchParams: () => set({ preservedSearchParams: null }),
  reset: () => set({ preservedSearchParams: null }),
}));

export default useSearchParamsStore;