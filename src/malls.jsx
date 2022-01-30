import React , {useEffect, useState} from 'react';
import "./malls.css"
import Malllist from "./malllist"




function Malls() {

    const [malls, setMalls] = useState([]);
    useEffect(() => {
         const fetching = async ()=>{
            const response = await fetch('http://127.0.0.1:8000/get_malls')
            const response_json = await response.json()
            console.log(response_json)
            setMalls(response_json)
        }
        fetching()
    }, [])


    return(
        <div className="malls">
            <div className="malls_header">
                <h1>Malls & Offer Available In your Area</h1>
            </div> 
            <div className="mall_lists">
            {malls.map((malls)=>(
                <Malllist mall={malls} /> 
            ))}
                </div>  
        </div>
    )
}

export default Malls;