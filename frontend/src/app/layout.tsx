'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import { CartSidebar } from '@/components/cart/cart-sidebar';
import usePreserveSearchParams from '@/hooks/usePreserveSearchParams';
import { ReactNode } from 'react';
import { Toaster } from 'react-hot-toast';

const geistSans = Geist({
  variable: '--font-geist-sans',
  subsets: ['latin'],
});

const geistMono = Geist_Mono({
  variable: '--font-geist-mono',
  subsets: ['latin'],
});

export default function RootLayout({
  children,
  modal,
}: Readonly<{
  children: ReactNode;
  modal: ReactNode;
}>) {
  usePreserveSearchParams();

  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <Header />
        <main className="pb-34 min-h-[calc(100vh-50px-70px)] md:pb-0 md:mt-12">
          {children}
        </main>
        <Footer />
        <CartSidebar />
        <Toaster />
        {modal}
      </body>
    </html>
  );
}
