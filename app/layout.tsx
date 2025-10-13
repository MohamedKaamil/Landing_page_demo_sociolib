import './globals.css';
import { Inter } from 'next/font/google';
import type { Metadata } from 'next';

const inter = Inter({ subsets: ['latin'], variable: '--font-sans' });

export const metadata: Metadata = {
  title: 'Mulk Template Clone',
  description: 'A recreation of the Mulk home page built with Next.js, Tailwind CSS and framer-motion.',
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body className={`${inter.variable} font-sans text-gray-900`}>{children}</body>
    </html>
  );
}