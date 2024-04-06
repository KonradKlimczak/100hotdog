import './globals.css';

import type { Metadata } from 'next';
import Head from 'next/head';

import { pressStart2P } from '@/app/ui/fonts';
import { Navbar } from '@/components/Navbar/Navbar';
import { VisitCounter } from '@/components/VisitCounter';

export const metadata: Metadata = {
  title: '101 Hot dogów',
  description: 'Co roku hot dog więcej',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${pressStart2P.className} antialiased`}>
        <Navbar />
        {children}
        <VisitCounter />
      </body>
    </html>
  );
}
