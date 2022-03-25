/**
 *
 * PurchaseDetails
 *
 */

import React from "react";
import PurchaseCardHeader from "./DesktopView/PurchaseCardHeader";
import PurchaseCard from "./DesktopView/PurchaseCard";
import PurchaseCardMobile from "./MobileView/PurchaseCardMobile";
//  import { isLargerThenMd } from '../utils/windowSize';

import {
  ContainerWrapper,
  TableWrapper,
  DesktopView,
  MobileView,
} from "./styles"; // , DesktopView, MobileView

export function PurchaseDetails(props) {
  const { purchases } = props;
  //  const  mobileView = isLargerThenMd(window);

  return (
    <ContainerWrapper>
      <DesktopView>
        <TableWrapper>
          <tbody>
            <PurchaseCardHeader />
            {purchases.map((purchase) => (
              <PurchaseCard purchase={purchase} key={purchase.id} />
            ))}
          </tbody>
        </TableWrapper>
      </DesktopView>

      <MobileView>
        <div data-testId="mobile-container">
          {purchases.map((purchase) => (
            <PurchaseCardMobile purchase={purchase} key={purchase.id} />
          ))}
        </div>
      </MobileView>

      {/* another way of doing the device scaling on page refresh or reload  */}
      {/* {mobileView ? (
        <TableWrapper>
          <tbody>
              <PurchaseCardHeader/>
              {purchases.map((purchase) => (
                  <PurchaseCard purchase={purchase} key={purchase.id}/> 
                ))}
          </tbody>
        </TableWrapper>
      )
      : 
      (
        <>
          {purchases.map((purchase) => ( 
            <PurchaseCardMobile purchase={purchase} key={purchase.id}/> 
           ))}
        </>
      ) 
      } */}
    </ContainerWrapper>
  );
}

export default PurchaseDetails;
