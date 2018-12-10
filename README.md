# ConnectService

## Endpoints ##
<details>
   <summary>/api/getNominees</summary>
   <p>
   >> Retrieves a list of connected nominees by qff number
      
   Input:
   {
      "qffNo": integer
   }
      
   Output:
   [
      {
           nomineeId: integer,
           nomineeName: String,
           points: integer,
           qffNo: integer,
           isConnected: boolean
       }
   ]
  </p>
 </details>
 
 <details>
   <summary>/api/connectNominee</summary>
   <p>
   Connects nominee to qff number
      
   Input:
   {
      "qffNo": integer,
      "nomineeId": integer
   }
      
   Output:
   Status code
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
