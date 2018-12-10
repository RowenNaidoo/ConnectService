# ConnectService

## Endpoints ##
<details>
   <summary>/api/getNominees</summary>
   <p>
   <ul>
      <li>Retrieves a list of connected nominees by qff number</li>
      
   <li>Input:
   {
      "qffNo": integer
   }</li>
      
   <li>Output:
   [
      {
           nomineeId: integer,
           nomineeName: String,
           points: integer,
           qffNo: integer,
           isConnected: boolean
       }
   ]</li>
   </ul>
  </p>
 </details>
 
 <details>
   <summary>/api/connectNominee</summary>
   <p>
      <ul>
         <li>Connects nominee to qff number</li>      
         <li>Input: 
         { 
            "qffNo": integer, 
            "nomineeId": integer 
         }</li>         
         <li>
            Output: Status code
         </li>
   </ul>
  </p>
 </details>
 
 <details>
   <summary>/api/disconnectNominee</summary>
   <p>
   Disconnects nominee from qff number
      
   Input:
   {
      "qffNo": integer,
      "nomineeId": integer
   }
      
   Output:
   Status code
  </p>
 </details>
