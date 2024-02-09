'use client';

import Link from 'next/link';

import { StyledLogo } from '@/components/StyledComponents';
import LogoImage from '@/assets/logo.svg';

const Logo = ({
  width,
  height,
  isLink = true
}: {
  width?: string;
  height?: string;
  isLink?: boolean;
}) => {
  if (!isLink) {
    return (
      <StyledLogo $width={width} $height={height}>
        <LogoImage width={width} height={height} />
      </StyledLogo>
    );
  }

  return (
    <Link href={'/'}>
      <StyledLogo $width={width} $height={height}>
        <LogoImage width={width} height={height} />
      </StyledLogo>
    </Link>
  );
};

export default Logo;
