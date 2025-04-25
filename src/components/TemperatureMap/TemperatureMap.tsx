import React from 'react';
import { MapContainer, TileLayer, Marker, Popup } from 'react-leaflet';

interface Props {
  lat: number;
  lon: number;
  cidade: string;
  temperatura: number;
  unidade: 'metric' | 'imperial';
}

export const TemperatureMap: React.FC<Props> = ({ lat, lon, cidade, temperatura, unidade }) => {
  return (
    <div style={{ width: '100%', height: '300px', marginTop: '1rem' }}>
      <h3>Mapa de Temperatura</h3>
      <MapContainer center={[lat, lon]} zoom={10} style={{ height: '100%', width: '100%' }}>
        <TileLayer
          attribution='&copy; <a href="https://www.openstreetmap.org/">OpenStreetMap</a> contributors'
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
        />
        <Marker position={[lat, lon]}>
          <Popup>
            {cidade}: {temperatura}°{unidade === 'metric' ? 'C' : 'F'}
          </Popup>
        </Marker>
      </MapContainer>
    </div>
  );
};
