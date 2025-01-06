import { createContext, useContext, ReactNode, useState } from 'react';

export interface Location {
  lat: number;
  lng: number;
  source?: 'geolocation' | 'station' | 'geocoding';
  address?: string;
}

interface LocationContextType {
  location: Location | null;
  setLocation: (location: Location | null) => void;
  error: string | null;
  setError: (error: string | null) => void;
  isLoading: boolean;
  setIsLoading: (loading: boolean) => void;
}

const LocationContext = createContext<LocationContextType | undefined>(undefined);

export const LocationProvider = ({ children }: { children: ReactNode }) => {
  const [location, setLocation] = useState<Location | null>(null);
  const [error, setError] = useState<string | null>(null);
  const [isLoading, setIsLoading] = useState(false);

  return (
    <LocationContext.Provider
      value={{
        location,
        setLocation,
        error,
        setError,
        isLoading,
        setIsLoading,
      }}
    >
      {children}
    </LocationContext.Provider>
  );
};

export const useLocationContext = () => {
  const context = useContext(LocationContext);
  if (context === undefined) {
    throw new Error('useLocationContext must be used within a LocationProvider');
  }
  return context;
};
