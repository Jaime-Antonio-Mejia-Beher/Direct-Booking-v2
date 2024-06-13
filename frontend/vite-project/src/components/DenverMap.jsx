import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const DenverMap = () => {
  const position = [39.88035, -104.79296]; // Coordinates for the center of the circle
  const radius = 100; // Radius of the circle in meters

  return (
    <div className="map-container">
      <MapContainer 
        center={position}
        zoom={16}
        className="map"
        style={{ height: "360px" }}
      >
        <TileLayer // This is the map layer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle 
          center={position}
          radius={radius}
          color="gold"
          fillColor="gold"
          fillOpacity={0.2}
        />
      </MapContainer>
    </div>
  );
};

export default DenverMap;
