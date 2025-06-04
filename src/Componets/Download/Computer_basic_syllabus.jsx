    import React from 'react';
    import '../../App';
    import Comman from '../Comman/Comman';
    import Course_syllabus from '../Comman/Course_syllabus';

    function Computer_basic_syllabus() {
      return (
       <>
        <Comman props={{title:"Download",subtitle:"Computer Basic | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Computer Basic | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />   
       
       </>
      )
    }
    
    export default Computer_basic_syllabus