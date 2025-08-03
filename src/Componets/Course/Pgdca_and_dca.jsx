import React from 'react';
import '../../App';
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';
import Course_Frame from '../Comman/Course_Frame';

function Pgdca_and_dca() {
    return (
        <>
            <Comman props={{ title: "Education", subtitle: "PGDCA and DCA" }} />
            <Course_syllabus

                props={{

                    titlecontent: "PGDCA and DCA Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />
            <Course_Frame/>
        </>
    )
}

export default Pgdca_and_dca