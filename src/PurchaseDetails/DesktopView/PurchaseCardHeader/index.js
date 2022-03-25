/**
 *
 * PurchaseCard
 *
 */

import React from "react";
import { TrHeaderWrapper, ThFirstWrapper } from '../styles';

export const PurchaseCardHeader = () => {
  return (
    <TrHeaderWrapper>
      <ThFirstWrapper data-testid="heading_name">Name</ThFirstWrapper>
      <th>Location</th>
      <th>Purchase Date</th>
      <th>Category</th>
      <th>Description</th>
      <th>Price</th>
      <th></th>
    </TrHeaderWrapper>
  );
};

export default PurchaseCardHeader;
