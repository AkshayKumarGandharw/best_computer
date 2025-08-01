    import React from 'react'
    import '../../App';
    import Comman from '../Comman/Comman';
    import Course_syllabus from '../Comman/Course_syllabus';


    function Acc_tax_solu_syllabus() {
      return (
        <>
        {/* <Comman props={{title:"Download",subtitle:"Accounting and Taxation Solutions | Syllabus"}}/>
                <Course_syllabus
                
                props={{
        
                  titlecontent:"Accounting and Taxation Solutions | Syllabus", 
                  content:"Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                  }} 
                />
                 */}
        <Course_syllabus  props={{downloadUrl:"https://www.google.com/ " , fileName:"file.pdf" , buttonText:"Acc and Tax. Syllabus"}}/>
        
        </>
      )
    }
    
    export default Acc_tax_solu_syllabus