import type { Metadata } from 'next';
import '@styles/globals.css';
import { Header, TopButton } from '@layout';
import { ReactNode } from 'react';
import { Manrope, Gothic_A1, Red_Hat_Display } from 'next/font/google';

export const metadata: Metadata = {
  title: '안녕하세윤',
  description: '프론트엔드 개발자 정세윤',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

const gothicA1 = Gothic_A1({
  weight: ['100', '200', '300', '400', '500', '600', '700', '800', '900'],
});

const manrope = Manrope({
  fallback: ['Gothic A1'],
  variable: '--font-manrope',
  weight: ['200', '300', '400', '500', '600', '700', '800'],
  adjustFontFallback: false,
});

const redHatDisplay = Red_Hat_Display({
  variable: '--font-redHatDisplay',
  weight: '900',
});

const RootLayout = ({ children }: Readonly<{ children: ReactNode }>) => (
  <html lang="en">
    <head>
      <link rel="manifest" href="/favicon/site.webmanifest" />
    </head>
    <body
      className={`flex flex-col w-screen h-screen bg-zinc-200 selection:bg-zinc-300 ${manrope.className} ${manrope.variable} ${gothicA1.className} ${redHatDisplay.variable}`}
    >
      <Header />
      <main className="w-full grow">{children}</main>
      <TopButton />
    </body>
  </html>
);

export default RootLayout;
