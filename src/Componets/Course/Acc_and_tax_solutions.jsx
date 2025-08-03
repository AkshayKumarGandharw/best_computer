import React from 'react';
import '../../App';
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';
import Course_Frame from '../Comman/Course_Frame';


function Acc_and_tax_solutions() {
  return (
    <>
      <Comman props={{ title: "Education", subtitle: "Accounting and Tax Solutions" }} />
      <Course_syllabus

        props={{

          titlecontent: "Accounting and Tax Solutions Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
        }}
      />
      <Course_Frame
        props={{
           titleOne: "ACCOUNTING & TAXATION",
          // shortDescription: "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita."
          // linkOne:"Link-1",
          // linkTwo:"Link-2",
          // linkThree:"Link-3",
          // linkFour:"Link-4",
          // imageTeacherOne:"./images/digital_marketing.jpg",
          // teacherOneFullName:"Teacher Full Name",
          // teacherOneSubject:"Subject Name",
          // teacherOneExperience:"Years of Experience",
          // imageTeacherTwo:"./images/graphic_design.jpg",
          // teacherTwoFullName:"Teacher Full Name-2 ",
          // teacherTwoSubject:"Subject Name-2",
          // teacherTwoExperience:"Years of Experience - 2",
          // month:"3 Months",
          // monthYears:"1 Years",
          // fee7k:"7000/-",
          // fee15k:"15000/-"




        }} 
        />
    </>
  )
}

export default Acc_and_tax_solutions;