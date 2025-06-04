   import React from 'react';
   import '../../App';
   import Comman from '../Comman/Comman';
   import Course_syllabus from '../Comman/Course_syllabus';

   function Acc_tax_syllabus() {
     return (
        <>
         <Comman props={{title:"Download",subtitle:"Accounting and Taxation | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Accounting and Taxation | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
        
        
        </>
     )
   }
   
   export default Acc_tax_syllabus