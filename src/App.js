import React, { useState, useEffect, useContext } from 'react';
import { render } from "react-dom";
import {
  BrowserRouter,
  Routes,
  Route
} from "react-router-dom";
import './App.css';
import Navbar from './navbar';
import Map from './map';
import Malls from './malls';
import datacontext from './datacontext';
import Shops from './Shops';

function App() {

  const [lat, setLat] = useState(0);
  const [lng, setLng] = useState(0);

  var a = useContext(datacontext);
  console.log(a.location)

  useEffect(() => {
    navigator.geolocation.getCurrentPosition(
      position => {
        // Datastate.setlocation(position.coords.latitude, position.coords.longitude});
        setLat(position.coords.latitude);
        setLng(position.coords.longitude);
      },
      err => console.log(err)
    );

  }, [])

  return (
<BrowserRouter>
    <div className="App">
      <Navbar />
      <div className="lower">
        <Map lat={lat} lng={lng} />

          <Routes>
            <Route exact path="/" exact element={<Malls />} />
            <Route path="show-offer/:name" element={<Shops />} />
            
          </Routes>
      </div>
    </div>
  </BrowserRouter>
  );
}

export default App;
