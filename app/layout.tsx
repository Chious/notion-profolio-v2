import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';
import PageNavbar from '@/component/PageNavbar';

const inter = Inter({ subsets: ['latin'] });

export const metadata: Metadata = {
  title: "Sam's Blog | Home",
  description: "Sam's Blog",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className={inter.className}>
        <PageNavbar />
        <main
          className="relative top-[56px] bg-black pr-[120px] pl-[120px]"
          style={{ minHeight: 'calc(100vh - 56px)' }}
        >
          {children}
        </main>
      </body>
    </html>
  );
}
