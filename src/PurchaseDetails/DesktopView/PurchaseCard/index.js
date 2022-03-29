/**
 *
 * PurchaseCard
 *
 */

import React from "react";
import { format } from "date-fns";

import { decode } from "../../../utils/decode";
import {
  TrWrapper,
  ThWrapper,
  ImgWrapper,
  ThDateWrapper,
  ThCategoryWrapper,
  CategoryDivWrapper,
  ThHamburgerWrapper,
  ThDescriptionWrapper,
  ThContentFirstWrapper,
} from "../styles";

export const PurchaseCard = ({ purchase }) => {
  const showDate = purchase.purchaseDate
    ? format(new Date(purchase.purchaseDate), "MMMM dd,yyyy")
    : "";
  const random = () => Math.floor(Math.random() * 255);
  const randomColor = `rgb(${random()}, ${random()}, ${random()})`;

  return (
    <TrWrapper>
      <ThContentFirstWrapper data-testId="purchased-by-name">{purchase.name}</ThContentFirstWrapper>
      <th>
        <ImgWrapper src={purchase.location} alt="" />
      </th>
      <ThDateWrapper>{showDate}</ThDateWrapper>
      <th>
        <ThCategoryWrapper>
          <CategoryDivWrapper bColor={randomColor}>
            {purchase.category}
          </CategoryDivWrapper>
        </ThCategoryWrapper>
      </th>
      <ThDescriptionWrapper>
        {decode(purchase.description)}
      </ThDescriptionWrapper>
      <ThWrapper>
        <span>$</span>
        {purchase.price}
      </ThWrapper>
      <ThHamburgerWrapper>
        <span></span>
        <span></span>
        <span></span>
      </ThHamburgerWrapper>
    </TrWrapper>
  );
};

export default PurchaseCard;
