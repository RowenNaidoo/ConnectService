# ConnectService

## Endpoints ##
<details>
   <summary>/api/getNominees [get]</summary>
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
   <summary>/api/connectNominee [post]</summary>
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
   <summary>/api/connectNominees [post]</summary>
   <p>
      <ul>
         <li>Connects all dentified nominees to qff number</li>      
         <li>Input: 
         { 
            "qffNo": integer
         }</li>         
         <li>
            Output: Status code
         </li>
   </ul>
  </p>
 </details>
 
 <details>
   <summary>/api/disconnectNominee [post]</summary>
   <p>
      <ul>
         <li>Disconnects nominee from qff number</li>
      
   <li>Input:
   {
      "qffNo": integer,
      "nomineeId": integer
   }</li>
      
   <li>Output:
   Status code</li>
   </ul>
  </p>
 </details>
 
 <details>
   <summary>/api/qbrLogin [get]</summary>
   <p>
      <ul>
         <li>Displays QBR login page</li>      
         <li>Input: /api/qbrLogin?qffNo=1234567890&nomineeId=987654321&redirectUrl=http://www.google.com.au</li>         
         <li>
            Output: QBR login page
         </li>
   </ul>
  </p>
 </details>
 
 ## Helper Endpoints ##
<details>
   <summary>/api/getAllData [get]</summary>
   <p>
   <ul>
      <li>Retrieves a list of all nominees in DB</li>
      
   <li>Input:none
      
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
   <summary>/api/resetData [post]</summary>
   <p>
   <ul>
      <li>Resets DB to original state</li>
      
   <li>Input:none
      
   <li>Output: Status code</li>
   </ul>
  </p>
 </details>
 
 <details>
   <summary>/api/addNominee [post]</summary>
   <p>
   <ul>
      <li>Adds a nominee to DB</li>
      
   <li>Input: 
      {
           nomineeId: integer,
           nomineeName: String,
           points: integer,
           qffNo: integer,
           isConnected: boolean
       }
      
   <li>Output: Staus code</li>
   </ul>
  </p>
 </details>
 
 <details>
   <summary>/api/disconnectNominees [post]</summary>
   <p>
   <ul>
      <li>Disconnects all nominees for qffNo</li>
      
   <li>Input: 
      {
           qffNo: integer
       }
      
   <li>Output: Staus code</li>
   </ul>
  </p>
 </details>

