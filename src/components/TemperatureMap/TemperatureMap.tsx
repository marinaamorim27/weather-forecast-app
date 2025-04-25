
import React, { useEffect} from 'react';
import { MapContainer, TileLayer, Marker, Popup, useMap } from 'react-leaflet';
import { Card } from '../../styles/global';
import 'leaflet/dist/leaflet.css';

import L from 'leaflet';
import iconUrl from '../../assets/leaflet/marker-icon.png';
import icon2xUrl from '../../assets/leaflet/marker-icon-2x.png';
import shadowUrl from '../../assets/leaflet/marker-shadow.png';

const LAYER = 'temp';
L.Icon.Default.mergeOptions({
  iconUrl,
  iconRetinaUrl: icon2xUrl,
  shadowUrl
});




interface Props {
  lat: number;
  lon: number;
  cidade: string;
  temperatura: number;
  unidade: 'metric' | 'imperial';
}

function Recenter({ lat, lon }: { lat: number; lon: number }) {
    const map = useMap();
    useEffect(() => {
      map.setView([lat, lon]);
    }, [lat, lon, map]);
    return null;
  }

export const TemperatureMap: React.FC<Props> = ({ lat, lon, cidade, temperatura, unidade }) => {
    const apiKey = process.env.REACT_APP_OWM_API_KEY;
  
    return (
    <Card>
      <h3>Mapa de Temperatura</h3>
      <MapContainer 
        center={[lat, lon]} 
        zoom={10} 
        style={{ height: '300px', width: '100%' }}
       >
        <Recenter lat={lat} lon={lon} />

        <TileLayer
          url="https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png"
          attribution='&copy; OpenStreetMap contributors'
        />
        <TileLayer
          url={`https://tile.openweathermap.org/map/${LAYER}/{z}/{x}/{y}.png?appid=${apiKey}`}
          opacity={0.5} // Set the opacity for the weather layer
        />
        <Marker position={[lat, lon]}>
          <Popup>
            {cidade}: {temperatura}°{unidade === 'metric' ? 'C' : 'F'}
          </Popup>
        </Marker>
      </MapContainer>
    </Card>
  );
};
