    import React from 'react';
    import '../../App';
    import Comman from '../Comman/Comman';
    import Course_syllabus from '../Comman/Course_syllabus';
    
    function Website_design_syllabus() {
      return (
        <>
          <Comman props={{title:"Download",subtitle:"Website Design | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Website Design | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />

        </>
      )
    }
    
    export default Website_design_syllabus