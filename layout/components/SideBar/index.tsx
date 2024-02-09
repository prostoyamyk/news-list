import { StyledSideBar, StyledSkeleton } from '@/components/StyledComponents';

const SideBar = () => {
  return (
    <StyledSideBar>
      <StyledSkeleton $height={'300px'} />
      <StyledSkeleton $height={'300px'} />
      <StyledSkeleton $height={'300px'} />
    </StyledSideBar>
  );
};

export default SideBar;
