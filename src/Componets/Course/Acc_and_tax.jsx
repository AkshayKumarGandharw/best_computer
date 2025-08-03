import React from 'react'
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';
import Course_Frame from '../Comman/Course_Frame';


function Acc_and_tax() {
  return (
    <>
        <Comman props={{title:"Education",subtitle:"Accounting and Taxation"}}/>
        <Course_syllabus
        
        props={{

          titlecontent:"Accounting & Taxation Syllabus", content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
          }} 
        />
        <Course_Frame/>

    </>
  )
}

export default Acc_and_tax