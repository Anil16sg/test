/**
 *
 * PurchaseCard
 *
 */

 import React from 'react';   
import { format } from 'date-fns';

 import './styles.css';
 import '../styles.css';
 import { decode } from '../../../utils/decode';
 
 export const PurchaseCard = ({purchase}) => { 
   const showDate = purchase.purchaseDate ? format(new Date(purchase.purchaseDate),'MMMM dd,yyyy')  : '';
   const random = () => Math.floor(Math.random() * 255);
   const randomColor = `rgb(${random()}, ${random()}, ${random()})`;

   return (
     <tr class="Row-Wrapper"> 
         <th class="Text-1-Wrapper">
            {purchase.name}
         </th>
         <th class="">
            <img class="img-wrapper" src={purchase.location} alt=""/>
         </th>
         <th class="Date-Wrapper">
            {showDate}
         </th>
         <th class="Category-Wrapper">
            <div style={{borderColor: randomColor, color: randomColor}}>
              {purchase.category}
            </div>
         </th>
         <th class="Description-Wrapper">
            {decode(purchase.description)}
         </th>
         <th class="Text-1-Wrapper">
            <span>$</span>{purchase.price}
         </th> 
         <th class="Span-Wrapper">
            <span></span>
            <span></span>
            <span></span>
         </th> 
     </tr>
   );
 } 
 
 export default PurchaseCard;
 