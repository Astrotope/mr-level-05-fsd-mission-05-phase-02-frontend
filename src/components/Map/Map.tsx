import { useEffect, useRef } from 'react';
import { Loader } from '@googlemaps/js-api-loader';
import { useLocationContext } from '../../contexts/LocationContext';
import { useStationsContext } from '../../contexts/StationsContext';
import styles from './Map.module.scss';

interface MapProps {
  className?: string;
}

const AUCKLAND_CENTER = { lat: -36.8509, lng: 174.7645 };
const DEFAULT_ZOOM = 12;

const MapComponent = ({ className }: MapProps) => {
  const mapRef = useRef<HTMLDivElement>(null);
  const mapInstanceRef = useRef<google.maps.Map | null>(null);
  const markersRef = useRef<google.maps.marker.AdvancedMarkerElement[]>([]);
  const locationMarkerRef = useRef<google.maps.marker.AdvancedMarkerElement | null>(null);
  const { location } = useLocationContext();
  const { stations } = useStationsContext();

  const createLocationMarker = (position: google.maps.LatLngLiteral) => {
    if (!mapInstanceRef.current) return;

    // Clear existing location marker
    if (locationMarkerRef.current) {
      locationMarkerRef.current.setMap(null);
    }

    // Create location marker element
    const markerElement = document.createElement('div');
    markerElement.className = styles.customMarker;
    
    // Create and set marker image
    const markerImage = document.createElement('img');
    markerImage.src = '/images/location-marker.png';
    markerImage.alt = 'Current Location';
    markerImage.width = 46;
    markerImage.height = 46;
    markerElement.appendChild(markerImage);

    // Create location marker
    locationMarkerRef.current = new google.maps.marker.AdvancedMarkerElement({
      position,
      map: mapInstanceRef.current,
      title: 'Current Location',
      content: markerElement
    });
  };

  useEffect(() => {
    const loader = new Loader({
      apiKey: import.meta.env.VITE_GOOGLE_MAPS_API_KEY,
      version: "beta",
      libraries: ["marker"]
    });

    loader.load().then(() => {
      if (!mapRef.current || mapInstanceRef.current) return;

      const initialCenter = location
        ? { lat: location.lat, lng: location.lng }
        : AUCKLAND_CENTER;

      mapInstanceRef.current = new google.maps.Map(mapRef.current, {
        center: initialCenter,
        zoom: DEFAULT_ZOOM,
        disableDefaultUI: true,
        zoomControl: true,
        zoomControlOptions: {
          position: google.maps.ControlPosition.LEFT_TOP
        },
        controlSize: 20,
        mapId: 'YOUR_MAP_ID'
      });

      // Create initial location marker
      createLocationMarker(initialCenter);
    });
  }, []);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    const currentLocation = location || AUCKLAND_CENTER;
    mapInstanceRef.current.panTo(currentLocation);
    createLocationMarker(currentLocation);
  }, [location]);

  useEffect(() => {
    if (!mapInstanceRef.current) return;

    // Clear existing markers
    markersRef.current.forEach(marker => marker.setMap(null));
    markersRef.current = [];

    // Add new markers for each station
    stations.forEach(station => {
      const [lng, lat] = station.location.coordinates;
      
      // Create marker element
      const markerElement = document.createElement('div');
      markerElement.className = styles.customMarker;
      markerElement.style.cssText = `
        display: flex;
        flex-direction: column;
        align-items: center;
      `;
      
      // Create and set marker image
      const markerImage = document.createElement('img');
      markerImage.src = '/images/marker.png';
      markerImage.alt = station.name;
      markerImage.width = 46;
      markerImage.height = 46;
      markerElement.appendChild(markerImage);

      // Create prices container
      if (station.pricing) {
        const pricesContainer = document.createElement('div');
        pricesContainer.style.cssText = `
          display: flex;
          gap: 8px;
          margin-top: 8px;
          justify-content: center;
          position: relative;
          left: 50%;
          transform: translateX(-50%);
        `;

        const colors = ['#ED550E', '#F8852C', '#FFB12E', '#2C259B'];
        const fuels = ['ZX premium', 'Z91 unleaded', 'Z diesel', 'EV charging'];

        Object.entries(station.pricing).forEach(([fuel, price]) => {
          const colorIndex = fuels.indexOf(fuel);
          if (colorIndex !== -1) {
            const priceCircle = document.createElement('div');
            priceCircle.style.cssText = `
              width: 40px;
              height: 40px;
              border-radius: 50%;
              background-color: ${colors[colorIndex]};
              display: flex;
              align-items: center;
              justify-content: center;
              color: white;
              font-family: sans-serif;
              font-size: 12px;
              font-weight: bold;
              box-shadow: 0 2px 4px rgba(0,0,0,0.2);
            `;
            priceCircle.innerHTML = `$${price}`;
            pricesContainer.appendChild(priceCircle);
          }
        });

        markerElement.appendChild(pricesContainer);
      }

      // Create marker
      const marker = new google.maps.marker.AdvancedMarkerElement({
        position: { lat, lng },
        map: mapInstanceRef.current,
        title: station.name,
        content: markerElement
      });

      markersRef.current.push(marker);
    });
  }, [stations]);

  return <div ref={mapRef} className={`${styles.map} ${className || ''}`} />;
};

export const Map = ({ className }: MapProps) => {
  return (
    <MapComponent className={className} />
  );
};