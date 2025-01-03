import { useEffect, useRef, useState } from 'react';
import { Loader } from '@googlemaps/js-api-loader';

interface MapProps {
  center?: { lat: number; lng: number };
  zoom?: number;
  className?: string;
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

export const Map = ({ 
  center = { lat: -36.8485, lng: 174.7633 }, // Default to Auckland
  zoom = 12,
  className 
}: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const [map, setMap] = useState<google.maps.Map | null>(null);

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "beta",  // Use beta for latest features
      libraries: ["marker"]  // Include marker library for AdvancedMarkerElement
    });

    loader.load().then(() => {
      if (mapRef.current && !map) {
        const newMap = new google.maps.Map(mapRef.current, {
          center,
          zoom,
          mapId: "YOUR_MAP_ID"  // Optional: Add if you want to use custom styling
        });

        const marker = new google.maps.marker.AdvancedMarkerElement({
          position: center,
          map: newMap,
          title: "Auckland"  // Optional: Add a title for accessibility
        });

        setMap(newMap);
      }
    });
  }, [center, zoom, map]);

  return (
    <div 
      ref={mapRef} 
      className={className}
      style={containerStyle}
    />
  );
}