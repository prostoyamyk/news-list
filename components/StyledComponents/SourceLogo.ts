'use client';

import styled from 'styled-components';

export const StyledSourceLogo = styled.div`
  width: 16px;
  height: 16px;
  border-radius: 2px;
  color: rgb(255, 255, 255);
  display: flex;
  justify-content: center;
  font-size: 11px;
  background-color: rgb(128, 128, 128);
  font-weight: 500;
  align-items: center;
  position: relative;
  margin-right: 8px;

  &:after {
    width: 10px;
    height: 10px;
    position: absolute;
    top: 50%;
    left: 50%;
    transform: translate(-50%, -50%);
    background-color: rgb(255, 255, 255);
    border-radius: 50%;
    content: '';
  }
`;