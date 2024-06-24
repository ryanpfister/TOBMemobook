// src/components/Map.jsx

import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

const Map = ({ coordinates }) => {
  return (
    <div className="map-container">
      <MapContainer center={coordinates} zoom={13} style={{ height: '400px' }}>
        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={coordinates}>
          <Popup>
            A draggable marker on the map.
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};

export default Map;
