
import react from 'react';

import NoteContext from './noteContext';

const NoteState = (props)=>{

    const state = {

        // course name 
        "titleAt":"ACCOUNTING & TAXATION ",
        "titleGd":"GRAPHIC DESIGN",
        "titleSe":"SPOKEN ENGLISH",
        "titleWd":"WEBSITE DESIGN",
        "titlePbdca":"PGDCA",
        "titleCb":"COMPUTER BASIC",
        "titleSm":"SHARE MARKET",
        "titleDm": "DIGITAL MARKETING",
        "titleVe":"VIDEO EDITING",
        "titleAts":"ACC. & TAX. SOLUTIONS",

        // course images
        "titleImageTx":"./images/tally_taxation.jpg",
        "titleImageGd":"./images/graphic_design.png",
        "titleImageSe":"./images/english_spoken.jpg",
        "titleImageWd":"./images/website_design_2.jpg",
        "titleImagePgdca":"./images/pgdca_dca.jpeg",
        "titleImageCb":"./images/office_automation.jpg",
        "titleImageSm":"./images/share_market.jpg",
        "titleImageDm":"./images/digital_marketing.jpg",
        "titleImageVe":"./images/video_editing.png",
        "titleImageAts":"./images/tally_taxation_2.png",
        
        // course description
        "shortDescriptionTx": "1 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionGd": "2 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionSe": "3 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionWd": "4 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionPgdca": "5 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionCb": "6 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionSm": "7 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionDm": "8 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionVe": "9 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",
        "shortDescriptionAts": "10 Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita.",

        // syllabus links
        "linkOne":"Link-1",
        "linkTwo": "Link-2",
        "linkThree":"Link-3",
        "linkFour":"Link-4",

        // teacher images one
        "imageOneTeacherTx":"./images/tally_taxation.jpg",
        "imageOneTeacherGd":"./images/graphic_design.png",
        "imageOneTeacherSe":"./images/english_spoken.jpg",
        "imageOneTeacherWd":"./images/website_design_2.jpg",
        "imageOneTeacherPgdca":"./images/pgdca_dca.jpeg",
        "imageOneTeacherCb":"./images/office_automation.jpg",
        "imageOneTeacherSm":"./images/share_market.jpg",
        "imageOneTeacherDm":"./images/digital_marketing.jpg",
        "imageOneTeacherVe":"./images/video_editing.png",
        "imageOneTeacherAts":"./images/tally_taxation_2.png",

        // teacher images two
        "imageOneTeacherTx":"./images/tally_taxation.jpg",
        "imageOneTeacherGd":"./images/graphic_design.png",
        "imageOneTeacherSe":"./images/english_spoken.jpg",
        "imageOneTeacherWd":"./images/website_design_2.jpg",
        "imageOneTeacherPgdca":"./images/pgdca_dca.jpeg",
        "imageOneTeacherCb":"./images/office_automation.jpg",
        "imageOneTeacherSm":"./images/share_market.jpg",
        "imageOneTeacherDm":"./images/digital_marketing.jpg",
        "imageOneTeacherVe":"./images/video_editing.png",
        "imageOneTeacherAts":"./images/tally_taxation_2.png",

        // teacher full name one
        "teacherOneFullName":"TEACHER FULL NAME 1",

        // teacher subject name one 
        "teacherOneSubject":"Subject Name 1",

        // teacher experience one 
        "teacherOneExperience":"Years of Experience 1",

        // teacher full name two
        "teacherTwoFullName":"TEACHER FULL NAME 2",

        // teacher subject name two
        "teacherTwoSubject":"Subject Name 2",

        // teacher experience two
        "teacherTwoExperience":"Years of Experience 2",

        // course duration one
        "courseDurationOne":"3 Months",

        // course duration two
        "courseDurationTwo":"1 Years",

        // course fee one
        "courseFeeOne":"7000/-",

        // couse fee two
        "courseFeeTwo":"15000/-"
        }
    

    return (
        <NoteContext.Provider 
        value = { state }>
            {props.children}
        </NoteContext.Provider>
    )
}

export default NoteState;