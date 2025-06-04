     import React from 'react';
     import '../../App';
     import Comman from '../Comman/Comman';
     import Course_syllabus from '../Comman/Course_syllabus';


     function Website_design() {
       return (
         <>
         <Comman props={{ title: "Education", subtitle: "Website Design" }} />
            <Course_syllabus

                props={{

                    titlecontent: "Website Design Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />
        
         
         
         </>
       )
     }
     
     export default Website_design;