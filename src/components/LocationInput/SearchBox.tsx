import { useState } from 'react';
import { Input } from '../Form/Input';
import { useLocationContext } from '../../contexts/LocationContext';

// This would come from your API
const checkStationName = async (value: string) => {
  try {
    const response = await fetch(`${import.meta.env.VITE_API_URL}/api/stations/search?name=${value}`);
    if (!response.ok) return null;
    const data = await response.json();
    return data.station || null;
  } catch (err) {
    console.warn('Station service error:', err);
    return null;
  }
};

export const SearchBox = () => {
  const { setLocation, setError, isLoading, setIsLoading, error } = useLocationContext();
  const [searchValue, setSearchValue] = useState('');
  
  const handleSearch = async (value: string) => {
    if (!value) return;
    
    setIsLoading(true);
    setError(null);
    
    try {
      // 1. Try station name first
      const station = await checkStationName(value);
      if (station) {
        setLocation({
          lat: station.lat,
          lng: station.lng,
          source: 'station',
          address: station.name
        });
        setIsLoading(false);
        return;
      }

      // 2. Try geocoding
      if (!google?.maps?.Geocoder) {
        throw new Error('Google Maps API not loaded');
      }

      const geocoder = new google.maps.Geocoder();
      const result = await geocoder.geocode({ address: value });
      
      if (!result.results?.length) {
        throw new Error('No results found');
      }

      setLocation({
        lat: result.results[0].geometry.location.lat(),
        lng: result.results[0].geometry.location.lng(),
        source: 'geocoding',
        address: result.results[0].formatted_address
      });
    } catch (error: unknown) {
      if (error instanceof Error) {
        if (error.message.includes('not authorized')) {
          setError('Google Maps API key is not configured correctly');
        } else {
          setError('Could not find this location. Please try a different search.');
        }
      } else {
        setError('An unexpected error occurred');
      }
    } finally {
      setIsLoading(false);
    }
  };

  const handleKeyDown = (e: React.KeyboardEvent<HTMLInputElement>) => {
    if (e.key === 'Enter') {
      handleSearch(searchValue);
    }
  };

  return (
    <Input
      value={searchValue}
      onChange={(e) => setSearchValue(e.target.value)}
      onKeyDown={handleKeyDown}
      onBlur={() => handleSearch(searchValue)}
      label="Enter location or station name"
      disabled={isLoading}
      error={error || undefined}
      fullWidth
    />
  );
};
