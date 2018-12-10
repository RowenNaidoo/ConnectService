# ConnectService

## Endpoints ##
<details>
   <summary>/getNominees</summary>
   <p>
   ### Retrieves a list of linked nominees by qff number
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
