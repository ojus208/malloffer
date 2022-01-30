import React, {useState, useEffect} from 'react';
import { Location } from 'react-router-dom';

const Shops = ()=>{

const [shops, setShops] = useState([]);
const [path, setpath] = useState('');
useEffect(() => {
    const fetching = async ()=>{
        setpath();
        var args = window.location.pathname.split('/')[2].replace(/%20/g, ' ');
        console.log(args)
        const response = await fetch('http://localhost:8000/get_shop/'+args)
        const response_json = await response.json()
        console.log(response_json)
        setShops(response_json)
    }
    fetching()


}, [])


    return(
        <div>
            this is shop
        </div>
    )
}

export default Shops;