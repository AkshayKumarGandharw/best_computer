 import React from 'react';
 import '../../App';
 import Comman from '../Comman/Comman';
 import Course_syllabus from '../Comman/Course_syllabus';
 
 function Digital_marketing_syllabus() {
   return (
     <>
     <Comman props={{title:"Download",subtitle:"Digital Marketing | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Digital Marketing | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
     
     
     </>
   )
 }
 
 export default Digital_marketing_syllabus;