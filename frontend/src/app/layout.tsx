'use client';

import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import Header from '@/components/layout/Header';
import Footer from '@/components/layout/Footer';
import SearchParamsHandler from '@/components/SearchParamsHandler';

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
  children: React.ReactNode;
  modal: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} antialiased`}
      >
        <SearchParamsHandler />
        <Header />
        <main className="pb-34 min-h-[calc(100vh-50px-70px)] md:pb-0 md:mt-12">
          {children}
        </main>
        <Footer />
        {modal}
      </body>
    </html>
  );
}
