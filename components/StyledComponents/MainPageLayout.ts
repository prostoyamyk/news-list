'use client';

import styled from 'styled-components';

export const StyledMainPageLayout = styled.div`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 240px;
  gap: 16px;

  @media (max-width: 1024px) {
    grid-template-columns: 100%;
  }
`;
