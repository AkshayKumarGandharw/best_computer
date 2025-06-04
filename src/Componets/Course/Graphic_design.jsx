import React from 'react';
import '../../App';
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';

function Graphic_design() {
    return (
        <>
            <Comman props={{ title: "Education", subtitle: "Graphic Design" }} />
            <Course_syllabus

                props={{

                    titlecontent: "Graphic Design Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />
        </>

    )
}

export default Graphic_design