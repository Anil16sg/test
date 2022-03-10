/**
 *
 * PurchaseCardMobile
 *
 */

 import React from 'react';   
import { format } from 'date-fns';

 import {
  ContainerWrapper,
  ImgWrapper,
  ImageNameWrapper,
  LeftContainerWrapper,
  RightContainerWrapper,
  PurchaseDateContainer,
  DescriptionContainerWrapper
 } from './styles'; 
 import { decode } from '../../../utils/decode';
 
 export const PurchaseCardMobile = ({purchase}) => { 
   const showDate = purchase.purchaseDate ? format(new Date(purchase.purchaseDate),'MMMM dd,yyyy')  : ''; 

   return (
     <ContainerWrapper>  
            <LeftContainerWrapper>
              <ImageNameWrapper>
                <ImgWrapper  src={purchase.location} alt=""/>  
                {purchase.name} 
              </ImageNameWrapper>
              <DescriptionContainerWrapper>
                {decode(purchase.description)}
              </DescriptionContainerWrapper>

              <PurchaseDateContainer>
                <b>Purchase Date</b>
                <br/>
                {showDate}
              </PurchaseDateContainer>
            </LeftContainerWrapper>
            <RightContainerWrapper>
              <span>$</span>{purchase.price}
            </RightContainerWrapper> 
     </ContainerWrapper>
   );
 } 
 
 export default PurchaseCardMobile;
 