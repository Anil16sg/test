import styled from "styled-components";

export const TrHeaderWrapper = styled.tr`
  & > th {
    text-align: left;
    padding: 0px 15px;
    font-family: "Source Sans Pro";
    font-style: normal;
    font-weight: 600;
    font-size: 16px;
    line-height: 150%;
    box-shadow: inset 0px -1px 0px #e7e7ed;
    height: 50px;
    min-width: 105px;
  }
`;

export const ThFirstWrapper = styled.th`
   padding-left: 25px! important;
`;

export const getBColor = (props) => (props.bColor ? props.bColor : "#333");

export const CategoryDivWrapper = styled.div`
  border-color: ${getBColor};
  color: ${getBColor};
  padding: 0px 5px;
  border: 2px solid;
`;

export const TrWrapper = styled.tr`
  & > th {
    vertical-align: top;
    text-align: left;
    padding: 15px 10px;
    margin: 0px 20px;

    &::first-letter {
      text-transform: capitalize;
    }
  }
`;

export const ThWrapper = styled.th`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  * > span {
    margin-right: 2px;
  }
`;

export const ThContentFirstWrapper = styled.th`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%; 
  padding-left: 25px! important;
`;

export const ThDateWrapper = styled.th`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
`;

export const ThCategoryWrapper = styled.th`
  font-size: 16px;
  line-height: 150%;
`;

export const ThDescriptionWrapper = styled.th`
  font-family: "Source Sans Pro";
  font-style: normal;
  font-weight: 400;
  font-size: 14px;
  line-height: 150%;
  display: flex;
  align-items: center;

  &::first-letter {
    text-transform: capitalize !important;
  }
`;

export const ImgWrapper = styled.img`
  width: 40px;
  height: 40px;
  border-radius: 50%;
`;

export const ThHamburgerWrapper = styled.th`
  & > span {
    margin-left: 50px;
    margin-right: 25px;
    display: block;
    width: 4px;
    height: 4px;
    margin-bottom: 3px;
    position: relative;

    background: #333;
    border-radius: 3px;

    z-index: 1;

    transform-origin: 4px 0px;

    transition: transform 0.5s cubic-bezier(0.77, 0.2, 0.05, 1),
      background 0.5s cubic-bezier(0.77, 0.2, 0.05, 1), opacity 0.55s ease;
  }
`;
