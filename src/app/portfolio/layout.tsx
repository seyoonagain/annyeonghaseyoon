import { Container } from '@/components/layout';

const Layout = ({ children }) => {
  return (
    <Container className="flex flex-col px-0">
      <div>{children}</div>
    </Container>
  );
};

export default Layout;
