import { Button } from '../Button';
import { useLocationContext } from '../../contexts/LocationContext';

export const CurrentLocationButton = () => {
  const { setLocation, setError, isLoading, setIsLoading } = useLocationContext();

  const handleGetLocation = () => {
    setIsLoading(true);
    setError(null);

    // Check if geolocation is available
    if (!navigator.geolocation) {
      setError('Location services are not supported by your browser');
      setIsLoading(false);
      return;
    }

    navigator.geolocation.getCurrentPosition(
      async (position) => {
        try {
          const latlng = {
            lat: position.coords.latitude,
            lng: position.coords.longitude
          };

          // Try reverse geocoding
          try {
            const geocoder = new google.maps.Geocoder();
            const result = await geocoder.geocode({ location: latlng });
            
            setLocation({
              ...latlng,
              source: 'geolocation',
              address: result.results[0]?.formatted_address || 'Current Location'
            });
          } catch (err) {
            // If reverse geocoding fails, still use the coordinates
            console.warn('Reverse geocoding failed:', err);
            setLocation({
              ...latlng,
              source: 'geolocation',
              address: 'Current Location'
            });
          }
        } catch (err) {
          setError('Failed to process your location. Please try again.');
        } finally {
          setIsLoading(false);
        }
      },
      (error) => {
        setIsLoading(false);
        switch(error.code) {
          case error.PERMISSION_DENIED:
            setError('Please allow location access to use this feature');
            break;
          case error.POSITION_UNAVAILABLE:
            setError('Location information is unavailable');
            break;
          case error.TIMEOUT:
            setError('Location request timed out');
            break;
          default:
            setError('An unknown error occurred');
        }
      },
      {
        enableHighAccuracy: true,
        timeout: 5000,
        maximumAge: 0
      }
    );
  };

  return (
    <Button 
      onClick={handleGetLocation}
      disabled={isLoading}
      variant="outline"
      fullWidth
    >
      {isLoading ? 'Getting location...' : 'Or use my current location'}
    </Button>
  );
};
