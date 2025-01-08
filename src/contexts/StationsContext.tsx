import { createContext, useContext, ReactNode, useState } from 'react';

export interface Station {
  _id: string;
  name: string;
  type: string;
  location: {
    type: string;
    coordinates: [number, number];
    address: string;
    suburb: string;
    city: string;
  };
  opening_hours: Array<{
    day: string;
    hours: string;
    current: boolean;
  }>;
  services: Array<{
    name: string;
  }>;
  link: string;
}

interface StationsContextType {
  stations: Station[];
  setStations: (stations: Station[]) => void;
}

const StationsContext = createContext<StationsContextType | undefined>(undefined);

export const StationsProvider = ({ children }: { children: ReactNode }) => {
  const [stations, setStations] = useState<Station[]>([]);

  return (
    <StationsContext.Provider value={{ stations, setStations }}>
      {children}
    </StationsContext.Provider>
  );
};

export const useStationsContext = () => {
  const context = useContext(StationsContext);
  if (context === undefined) {
    throw new Error('useStationsContext must be used within a StationsProvider');
  }
  return context;
};
