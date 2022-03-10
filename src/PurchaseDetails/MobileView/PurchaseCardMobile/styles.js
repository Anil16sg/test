import styled from 'styled-components';

export const ContainerWrapper = styled.div`
  background: #FFFFFF;
  border: 1px solid #CDCED9;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px;
  margin-top: 20px;

  display: flex; 
  justify-content: space-between;
`;

 
export const ImgWrapper = styled.img`
  width: 30px;
  height: 29px;
  padding-right: 6px;
`;


export const ImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;
 
export const LeftContainerWrapper = styled.div`
  padding-right: 30px; 
`;

export const RightContainerWrapper = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
`;

export const DescriptionContainerWrapper = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  padding: 16px 0px;
  /* or 21px */


  color: #272833;
`;

export const PurchaseDateContainer = styled.div`
  font-family: 'Source Sans Pro';
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  /* or 21px */


  color: #272833;
`;