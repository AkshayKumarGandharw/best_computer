
import react from 'react';

import NoteContext from './noteContext';

const NoteState = (props)=>{

    const state = {
        "titleOne":"ACCOUNTING & TAXATION ",
        "shortDescription": "Lorem ipsum dolor sit amet consectetur, adipisicing elit. Consequuntur deserunt sed consequatur quae, sint error amet a eaque est soluta recusandae, suscipit quasi voluptatibus? Dolorum possimus facere itaque doloribus totam molestias, vel quae molestiae tempore aut veritatis atque dolorem. Expedita."

    }

    return (
        <NoteContext.Provider value = {state}>
            {props.children}
        </NoteContext.Provider>
    )
}