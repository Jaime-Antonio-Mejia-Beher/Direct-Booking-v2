import React from "react";
import { MapContainer, TileLayer, Circle } from "react-leaflet";
import "leaflet/dist/leaflet.css";

const CupertinoMap = () => {
  const position = [37.30022, -121.99204]; // Coordinates for the center of the circle
  const radius = 100; // Radius of the circle in meters

  return (
    <div className="map-container">
      <h1>Cupertino Location</h1>
      <MapContainer
        center={position}
        zoom={19}
        className="map"
        style={{ height: "500px" }}
      >
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors'
        />
        <Circle
          center={position}
          radius={radius}
          color="orange"
          fillColor="orange"
          fillOpacity={0.2}
        />
      </MapContainer>
    </div>
  );
};

export default CupertinoMap;