 import React from 'react';
 import '../../App';
 import Comman from '../Comman/Comman';
 import Course_syllabus from '../Comman/Course_syllabus';


 function Acc_and_tax_solutions() {
   return (
     <>
      <Comman props={{ title: "Education", subtitle: "Accounting and Tax Solutions" }} />
            <Course_syllabus

                props={{

                    titlecontent: "Accounting and Tax Solutions Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />
     
     </>
   )
 }
 
 export default Acc_and_tax_solutions;