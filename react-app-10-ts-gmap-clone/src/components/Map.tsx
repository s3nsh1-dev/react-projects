import "leaflet/dist/leaflet.css";
import type { Place } from "../api/Place";
import type { Map as LeafletMap } from "leaflet";
// this library is used to show map like G-Map in browser (as JS only library not optimized for REACT)
import { useEffect, useRef } from "react";
// to get reference  to the Map object behind the screen we use useRef
import { MapContainer, TileLayer, Marker } from "react-leaflet";
// for leaflet compatibility we use react-leaflet

interface MapProps {
  place: Place | null;
}

export default function Map({ place }: MapProps) {
  const mapRef = useRef<LeafletMap | null>(null);

  useEffect(() => {
    if (mapRef.current && place) {
      mapRef.current.flyTo([place.latitude, place.longitude]);
    }
  }, [place]);

  return (
    <MapContainer
      ref={mapRef}
      center={[40.7, -74]}
      zoom={12}
      scrollWheelZoom
      className='h-full'
    >
      <TileLayer url='https://{s}.tile.openstreetmap.org/{z}/{x}/{y}.png' />
      {place && <Marker position={[place.latitude, place.longitude]} />}
    </MapContainer>
  );
}
