/**
 *
 * PurchaseCard
 *
 */

import React from "react";
import { TrHeaderWrapper } from '../styles';

export const PurchaseCardHeader = () => {
  return (
    <TrHeaderWrapper>
      <th>Name</th>
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
