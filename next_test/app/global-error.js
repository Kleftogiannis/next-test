'use client'
 
//only in production
//cant just throw error on compile for production
 export default function GlobalError({ error }) {
   return (
     <html>
       <body>
         Opppps!
       </body>
     </html>
   )
 }