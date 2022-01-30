import React from 'react'
import GoogleMapReact from 'google-map-react';  


export default function map(latti) {
  const location = {lat: latti.lat, lng: latti.lng};
  console.log(location);
    
    return (
      <div className="map">
          <GoogleMapReact
            bootstrapURLKeys={{ key: 'AIzaSyBL9VsxeNioFrOm2f6REG3T4hdzyEj-IEA' }}
            defaultCenter = {location}
            center = { location }
            defaulatZoom = {14}
            zoom = {14}
            margin = {[50,50,50,50]}
            option = {""}
            onChange = {""}
            onChildClick = {""}
          >
            
          </GoogleMapReact>
      </div>
    )
}
