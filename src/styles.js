import styled from 'styled-components';  
import { windowSizes } from './utils/windowSize';

export const Heading = styled.h1`
  align-items: center;
  font-size: 32px !important;
  color: #333;
  padding-left: 5%;
 

  @media (min-width: ${windowSizes.md}px) {
    font-size: 40px !important;
  }
`;  