import { Button } from '../Button';
import { Container } from '../Container/Container';
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
    <Container direction="row" gap="lg" maxWidth="full" alignItems="center" justifyContent="start">
      <Button 
        onClick={handleGetLocation}
        disabled={isLoading}
        variant="use-location"
        fullWidth
      >
        <svg width="26" height="26" viewBox="0 0 22 22" fill="none" xmlns="http://www.w3.org/2000 svg">
          <path d="M11.0001 15.0335C13.2277 15.0335 15.0335 13.2277 15.0335 11.0001C15.0335 8.77258 13.2277 6.9668 11.0001 6.9668C8.77258 6.9668 6.9668 8.77258 6.9668 11.0001C6.9668 13.2277 8.77258 15.0335 11.0001 15.0335Z" fill="currentColor">
          </path>
          <path d="M12.0077 3.00299V0.916748H9.99102V3.00299C8.21665 3.22954 6.56769 4.03872 5.30284 5.30357C4.03799 6.56843 3.22881 8.21738 3.00226 9.99175H0.916016V12.0084H3.00226C3.22848 13.7829 4.03755 15.4321 5.30246 16.697C6.56738 17.9619 8.21652 18.771 9.99102 18.9972V21.0834H12.0077V18.9972C13.7822 18.7711 15.4315 17.9621 16.6964 16.6972C17.9614 15.4322 18.7704 13.783 18.9964 12.0084H21.0827V9.99175H18.9964C18.7702 8.21725 17.9611 6.56811 16.6962 5.3032C15.4313 4.03828 13.7822 3.22921 12.0077 3.00299V3.00299ZM10.9994 17.0501C7.66277 17.0501 4.94935 14.3367 4.94935 11.0001C4.94935 7.66351 7.66277 4.95008 10.9994 4.95008C14.3359 4.95008 17.0494 7.66351 17.0494 11.0001C17.0494 14.3367 14.3359 17.0501 10.9994 17.0501Z" fill="currentColor">
          </path>
        </svg>      
        {isLoading ? 'Getting location...' : 'Or use my current location'}
      </Button>
    </Container>
  );
};
