import type { Metadata } from 'next';
import '@styles/globals.css';

export const metadata: Metadata = {
  title: '안녕하세윤, ',
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
      <body>{children}</body>
    </html>
  );
}
