// import React from 'react'
import { MapContainer, TileLayer } from 'react-leaflet'
import 'leaflet/dist/leaflet.css';
import "./Map.scss";
const Map = () => {

  return (
    <div className='leaflet-container'>
 <MapContainer center={{lat: '40.30', lng:'-3.40'}} zoom={13}>
 <TileLayer
    attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
    url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
  />
</MapContainer>
    </div>
  )
}

export default Map