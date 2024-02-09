import { Container, StyledHeader } from '@/components/StyledComponents';
import Logo from '@/components/Logo';

const Header = () => {
  return (
    <Container>
      <StyledHeader>
        <Logo width={'170px'} height={'48px'} />
      </StyledHeader>
    </Container>
  );
};

export default Header;
