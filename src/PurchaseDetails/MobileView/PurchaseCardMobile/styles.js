import styled from "styled-components";

export const ContainerWrapper = styled.div`
  background: #ffffff;
  border: 1px solid #cdced9;
  box-sizing: border-box;
  border-radius: 10px;
  padding: 16px;
  margin-top: 20px; 

  display: flex;
  justify-content: space-between;
`;

export const ImgWrapper = styled.img`
  width: 35px;
  height: 35px;
  border-radius: 50%;
`;

export const NameWrapper = styled.div`
  padding-left: 10px;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const ImageNameWrapper = styled.div`
  display: flex;
  align-items: center;
`;

export const LeftContainerWrapper = styled.div`
  padding-right: 15px;
`;

export const RightContainerWrapper = styled.div`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 18px;
  line-height: 20px;
  text-align: left;
`;

export const DescriptionContainerWrapper = styled.div`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  padding: 16px 0px;

  color: #272833;
  &::first-letter {
    text-transform: capitalize;
  }
`;

export const PurchaseDateContainer = styled.div`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;

  color: #272833;
`;
