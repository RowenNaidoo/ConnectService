# ConnectService

## Base URL: https://connservice.herokuapp.com

## Endpoints ##
<details>
   <summary>/v1/connection-prompt [get]</summary>
   <p>
   <ul>
      <li>Indicates if the user should be promted to connect</li>

   <li>Output: Status code [200/404]</li>
   </ul>
  </p>
 </details>

 <details>
   <summary>/v1/related-accounts [get]</summary>
   <p>
      <ul>
         <li>Returns a list of connected accounts sorted alphabetically by business name</li>
         <li>Input: ?relationType=[connection]&qffMemberId=[1234567890]</li>
         <li>
            Output:
            [
               {
                  businessName: string,
                  firstName: string,
                  lastName: string,
                  type: string, //association, connection
                  nomineeId: string,
                  emailAddress: string,
                  points: integer,
                  level: integer,
                  qffNo: string
               }
            ]
         </li>
   </ul>
  </p>
 </details>

 <details>
   <summary>/v1/connections/:connectionId [delete]</summary>
   <p>
      <ul>
         <li>Removes the specified connection i.e. Changes the relation type from a connection to an association</li>

   <li>Output:
   Status code</li>
   </ul>
  </p>
 </details>

 <details>
   <summary>/v1/qbrLogin [get]</summary>
   <p>
      <ul>
         <li>Displays QBR login page</li>
         <li>Input: /v1/qbrLogin?qffNo=1234567890&nomineeId=987654321&redirectUrl=http://www.google.com.au</li>
         <li>
            Output: QBR login page
         </li>
   </ul>
  </p>
 </details>

 ## Helper Endpoints ##

<details>
<summary>/v1/set-connection-prompt [post]</summary>
<p>
   <ul>
      <li>Sets show connection prompt to true or false</li>
      <li>Input:
      {
         "showConnectionPrompt": boolean
      }</li>
      <li>
         Output: Status code
      </li>
</ul>
</p>
</details>
<details>
<summary>/v1/connectNominee [post]</summary>
<p>
   <ul>
      <li>Connects nominee to qff number</li>
      <li>Input:
      {
         "qffNo": string,
         "nomineeId": string
      }</li>
      <li>
         Output: Status code
      </li>
</ul>
</p>
</details>
<details>
   <summary>/v1/getAllData [get]</summary>
   <p>
   <ul>
      <li>Retrieves a list of all nominees in DB</li>

   <li>Input:none

   <li>Output:
   [
      {
         businessName: string,
         firstName: string,
         lastName: string,
         type: string, //association, connection
         nomineeId: string,
         emailAddress: string,
         points: integer,
         level: integer,
         qffNo: string
      }
   ]</li>
   </ul>
  </p>
 </details>

 <details>
   <summary>/v1/resetData [post]</summary>
   <p>
   <ul>
      <li>Use with caution!! Resets DB to original state</li>

   <li>Input:none

   <li>Output: Status code</li>
   </ul>
  </p>
 </details>

 <details>
   <summary>/v1/addNominee [post]</summary>
   <p>
   <ul>
      <li>Adds a nominee to DB</li>

   <li>Input:
      {
  "relationType": "association",
  "qffNo": 912345678,
  "account": {
	"qbrMember": {
	  "businessName": "My First Business"
	},
	"nominee": {
	  "nomineeId": 101,
	  "firstName": "First",
	  "lastName": "Business"
	}
  },
  "links": [
	{
	  "href": "https://connservice.herokuapp.com/v1/qbrLogin?qffNo=912345678&nomineeId=101",
	  "rel": "connect",
	  "method": "GET"
	}
  ]
}

   <li>Output: Staus code</li>
   </ul>
  </p>
 </details>

 <details>
   <summary>/v1/disconnectNominees [post]</summary>
   <p>
   <ul>
      <li>Disconnects all nominees for qffNo</li>

   <li>Input:
      {
           qffNo: string
       }

   <li>Output: Staus code</li>
   </ul>
  </p>
 </details>

