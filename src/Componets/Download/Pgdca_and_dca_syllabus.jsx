 import React from 'react';
 import '../../App';
 import Comman from '../Comman/Comman';
 import Course_syllabus from '../Comman/Course_syllabus';
 
 function Pgdca_and_dca_syllabus() {
   return (
     <>
        <Comman props={{title:"Download",subtitle:"PGDCA and DCA | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"PGDCA and DCA | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
     
     </>
   )
 }
 
 export default Pgdca_and_dca_syllabus