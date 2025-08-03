    import React from 'react';
    import '../../App';
    import Comman from '../Comman/Comman';
    import Course_syllabus from '../Comman/Course_syllabus';
    import Course_Frame from '../Comman/Course_Frame';

    
    function Digital_marketing() {
      return (
        <>
            <Comman props={{ title: "Education", subtitle: "Digital Marketing" }} />
            <Course_syllabus

                props={{

                    titlecontent: "Digital Marketing Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />
            <Course_Frame/>
        
        </>
      )
    }
    
    export default Digital_marketing