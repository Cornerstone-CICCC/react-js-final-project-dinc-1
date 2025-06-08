'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { createContext, useContext, useState, useEffect } from 'react';
import { useSearchParams, usePathname } from 'next/navigation';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

// State for preserving search params when navigating between pages
const SearchParamsContext = createContext<{
  preservedSearchParams: URLSearchParams | null;
  setPreservedSearchParams: (params: URLSearchParams | null) => void;
}>({
  preservedSearchParams: null,
  setPreservedSearchParams: () => {},
});

export const usePreservedSearchParams = () => useContext(SearchParamsContext);

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  const [preservedSearchParams, setPreservedSearchParams] = useState<URLSearchParams | null>(null);
  const searchParams = useSearchParams();
  const pathname = usePathname();

  // Store search params when navigating to home page
  useEffect(() => {
    if (pathname === '/' && searchParams.toString()) {
      setPreservedSearchParams(new URLSearchParams(searchParams.toString()));
    }
  }, [pathname, searchParams]);

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchParamsContext.Provider value={{ preservedSearchParams, setPreservedSearchParams }}>
          <Header />
          <main className="pb-34 min-h-[calc(100vh-50px-70px)] md:pb-0 md:mt-12">
            {children}
          </main>
          <Footer />
          {modal}
        </SearchParamsContext.Provider>
      </body>
    </html>
  );
}
