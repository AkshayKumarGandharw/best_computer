    import React from 'react';
    import '../../App';
    import Comman from '../Comman/Comman';
    import Course_syllabus from '../Comman/Course_syllabus';
    
    function Spoken_english_syllabus() {
      return (
        <>
         <Comman props={{title:"Download",subtitle:"Spoken English | Syllabus"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Spoken English | Syllabus", 
          content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
        
        </>
      )
    }
    
    export default Spoken_english_syllabus