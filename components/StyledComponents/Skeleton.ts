'use client';

import styled from 'styled-components';

export const StyledSkeleton = styled.div<{ $width?: string; $height?: string }>`
  width: ${(props) => props.$width || '100%'};
  height: ${(props) => props.$height || '100%'};
  min-height: 20px;
  border-radius: 8px;
  background-color: #808080ff;
`;

 