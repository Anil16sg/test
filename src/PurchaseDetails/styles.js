import styled from 'styled-components'; 
import { windowSizes } from '../utils/windowSize';

export const ContainerWrapper = styled.div`
  margin: 16px;
`;

export const TableWrapper = styled.table`
  width: 90%;
  margin: 0 auto;

  border: 1px solid #E7E7ED;
  box-sizing: border-box;
  border-radius: 4px;
`;
 

export const DesktopView = styled.div`
  display: none;

  @media (min-width: ${windowSizes.sm}px) {
    display: block;
  } 
`;

export const MobileView = styled.div`
  display: block;

  @media (min-width: ${windowSizes.sm}px) {
    display: none;
  } 
`;