import type { Metadata } from 'next';
import '@styles/globals.css';
import { Header, TopButton } from '@layout';
import { ReactNode } from 'react';

export const metadata: Metadata = {
  title: '안녕하세윤',
  description: '프론트엔드 개발자 정세윤입니다.',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en">
    <head>
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </head>
    <body className="flex flex-col w-screen h-screen bg-zinc-200 selection:bg-zinc-300 font-manrope">
      <Header />
      <main className="w-full grow">{children}</main>
      <TopButton />
    </body>
  </html>
);

export default RootLayout;
