export default function AboutLayout({ children }) {
    throw new Error('ups')
   return (
     <div>
       <div>{children}</div>
 
       <div className="mt-8">
         <h2 className="mb-4 text-xl">You might also like</h2>
 
         <ul>
           <li>First blog post</li>
           <li>Second blog post</li>
         </ul>
       </div>
     </div>
   )
 }