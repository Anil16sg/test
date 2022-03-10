/**
 *
 * PurchaseCard
 *
 */

 import React from 'react';  
 import '../styles.css';
 
 export const PurchaseCardHeader = () => {
   return (
     <tr class="Row-Header-Wrapper"> 
         <th >
             Name
         </th>
         <th >
            Location
         </th>
         <th >
            Purchase Date
         </th>
         <th >
            Category
         </th>
         <th >
            Description
         </th>
         <th >
            Price
         </th> 
         <th > 
         </th> 
     </tr>
   );
 } 
 
 export default PurchaseCardHeader;
 