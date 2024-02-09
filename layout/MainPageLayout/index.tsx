import Header from '@/layout/components/Header';
import { Container, StyledMainPageLayout } from '@/components/StyledComponents';
import SideBar from '@/layout/components/SideBar';
import { PropsWithChildren } from 'react';

const MainPageLayout = ({ children }: PropsWithChildren) => {
  return (
    <>
      <Header />
      <Container>
        <StyledMainPageLayout>
          {children}
          <SideBar />
        </StyledMainPageLayout>
      </Container>
    </>
  );
};

export default MainPageLayout;
