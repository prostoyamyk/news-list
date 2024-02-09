import Header from '@/layout/components/Header';
import { Container, StyledMainPageLayout } from '@/components/StyledComponents';
import SideBar from '@/layout/components/SideBar';

const MainPageLayout = ({ children }: { children: React.ReactNode }) => {
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
