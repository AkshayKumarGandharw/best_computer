import React from 'react';
import '../../App';
import Comman from '../Comman/Comman';
import Course_syllabus from '../Comman/Course_syllabus';

function Video_editing() {
    return (
        <>
            <Comman props={{ title: "Education", subtitle: "Video Editing" }} />
            <Course_syllabus

                props={{

                    titlecontent: "Video Editing Syllabus", content: "Note that the development build is not optimized.To create a production build, use npm run build.webpack compiled successfully"
                }}
            />



        </>
    )
}

export default Video_editing