/**
 *
 * PurchaseDetails
 *
 */

 import React from 'react';  
 import PurchaseCardHeader from './DesktopView/PurchaseCardHeader';
 import PurchaseCard from './DesktopView/PurchaseCard';
 import PurchaseCardMobile from './MobileView/PurchaseCardMobile'
 import { isLargerThenMd } from '../utils/windowSize';

 import { ContainerWrapper, TableWrapper } from './styles';
 
 export function PurchaseDetails(props) {
   const { purchases} = props;
   const  mobileView = isLargerThenMd(window);
  
   return (
     <ContainerWrapper>
      {mobileView ? (
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

      }
     </ContainerWrapper> 
   );
 }
  
 
 export default PurchaseDetails;
 