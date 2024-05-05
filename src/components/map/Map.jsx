import React from "react";
import { MapContainer, Marker, Popup, TileLayer } from "react-leaflet";
import "../map/map.css"
function Map({locations}) {
  
  return (


<MapContainer className="map" center={[51,0.9]} zoom={13} scrollWheelZoom={false}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
{locations.map(location=><Marker key={location.id} position={[location?.geolocation.lat,location?.geolocation.lon]}/>)}
      </MapContainer>
      


  );
}

export default Map;
