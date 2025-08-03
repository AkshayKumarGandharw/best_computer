import React from 'react';
import '../../App';
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';
import Course_Frame from '../Comman/Course_Frame';

function Graphic_design() {
    return (
        <>
            <Comman props={{ title: "Education", subtitle: "Graphic Design" }} />
            <Course_syllabus

                props={{

                    titlecontent: "Graphic Design Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />
            <Course_Frame/>
        </>

    )
}

export default Graphic_design