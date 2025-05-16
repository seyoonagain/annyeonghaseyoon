import { Container } from '@/components/layout';

const Layout = ({ children }) => {
  return <Container className="items-start">{children}</Container>;
};

export default Layout;
