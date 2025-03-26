import type { Metadata } from 'next';
import '@styles/globals.css';
import { Header } from '@layout';

export const metadata: Metadata = {
  title: '안녕하세윤',
  description: '프론트엔드 개발자 정세윤 블로그',
  icons: {
    icon: '/favicon/favicon-32x32.png',
    shortcut: '/favicon/favicon.ico',
    apple: '/favicon/apple-touch-icon.png',
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <head>
        <link rel="manifest" href="/favicon/site.webmanifest" />
      </head>
      <body className="w-screen h-screen selection:bg-sky-600/10">
        <Header />
        <main className="w-full h-full">{children}</main>
      </body>
    </html>
  );
}
