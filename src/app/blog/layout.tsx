'use client';

import { Container } from '@/components/layout';
import { usePathname } from 'next/navigation';

const Layout = ({ children }) => {
  const pathname = usePathname();

  return (
    <Container className={pathname.includes('/posts') && 'pt-4 sm:pt-4'}>{children}</Container>
  );
};

export default Layout;
