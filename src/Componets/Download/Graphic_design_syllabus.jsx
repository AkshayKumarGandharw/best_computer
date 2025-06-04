   import React from 'react';
   import '../../App';
   import Comman from '../Comman/Comman';
   import Course_syllabus from '../Comman/Course_syllabus';

   function Graphic_design_syllabus() {
     return (
      <>
        <Comman props={{title:"Download",subtitle:"Graphics Design | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Graphics Design | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
      </>
     )
   }
   
   export default Graphic_design_syllabus