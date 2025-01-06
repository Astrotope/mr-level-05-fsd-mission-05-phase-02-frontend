import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useLocationContext } from '../../contexts/LocationContext';

interface MapProps {
  className?: string;
}

const containerStyle = {
  width: '100%',
  height: '400px'
};

const defaultCenter = { lat: -36.8485, lng: 174.7633 }; // Default to Auckland

export const Map = ({ className }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const { location } = useLocationContext();

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "beta",
      libraries: ["marker"]
    });

    loader.load().then(() => {
      if (mapRef.current && !mapInstanceRef.current) {
        const newMap = new google.maps.Map(mapRef.current, {
          center: location?.lat ? location : defaultCenter,
          zoom: 12,
          mapId: "YOUR_MAP_ID"  // Required for Advanced Markers
        });

        mapInstanceRef.current = newMap;

        if (location?.lat) {
          markerRef.current = new google.maps.marker.AdvancedMarkerElement({
            position: location,
            map: newMap,
            title: location.address
          });
        }
      }
    });
  }, []);

  // Update map when location changes
  useEffect(() => {
    if (mapInstanceRef.current && location?.lat) {
      mapInstanceRef.current.panTo(location);
      
      // Update or create marker
      if (markerRef.current) {
        markerRef.current.position = location;
      } else {
        markerRef.current = new google.maps.marker.AdvancedMarkerElement({
          position: location,
          map: mapInstanceRef.current,
          title: location.address
        });
      }
    }
  }, [location]);

  return (
    <div 
      ref={mapRef} 
      className={className}
      style={containerStyle}
    />
  );
};