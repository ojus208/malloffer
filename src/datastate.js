import Datacontext from "./datacontext";
import React , {useState} from 'react';

const Datastate = (props) => {

    const location = {
        "lat": 20.11010101,
        "lng": 85.01010101
    }
    return(
        <Datacontext.Provider value={location}>
            {props.children}
        </Datacontext.Provider>
    )
}

export default Datastate;