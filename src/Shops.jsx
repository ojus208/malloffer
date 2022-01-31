import React, {useState, useEffect} from 'react';
import './shops.css'

function Shops () {

const [dukan, setdukan] = useState([]);
const [path, setpath] = useState('');
useEffect(() => {
    const fetching = async ()=>{
        var args = window.location.pathname.split('/')[2].replace(/%20/g, ' ');
        console.log(args)
        const response = await fetch('http://localhost:8000/get_shop/'+args)
        const response_json = await response.json()
        console.log(response_json)
        setdukan(response_json)
        console.log(dukan)
    }
    fetching()

}, [])


    return(
        <div className="shops">
            <div className="card" >
  
  <div className="card rounded">
        <div className="car-title">
            <h1>KFC Ambuja mall raipur</h1>
        </div>
        <div className="card-body d-flex shop">
            <div className="image">
                <img className='imgfluid' src="https://image.shutterstock.com/z/stock-photo-nonth…ot-chicken-fried-and-mashed-potato-1074036752.jpg" alt="" />
            </div>
            <div className="info">
        <div className="information">
            <span>ADDRESS: </span>
            <span>Third Floor Ambuja Mall Raipur In Front of PVR</span>
        </div>
        <div className="information">
            <span>OWNER: </span>
            <span>VIKAS KUMAR</span>
        </div>
        <div className="information">
            <span>PHONE : </span>
            <span> 9165130008</span>
        </div>
        <div className="information">
            <span>WEBSITE : </span>
            <span> WWW.KFC.COM</span>
        </div>
            </div>
        </div>

  </div>
  <ul className="list-group list-group-flush">
  <div className="card-header">
    <h5>OFFER'S IN AMBUJA MALL RAIPUR</h5>
  </div>
    <li className="list-group-item">Buy One Get One Free | limited time offer</li>
    <li className="list-group-item">Get 50% off upto 100 on Big Bucket chicken</li>
    <li className="list-group-item">Get Fried chicken for Just 500rs </li>
  </ul>
</div>
        </div>

    )
}

export default Shops;
