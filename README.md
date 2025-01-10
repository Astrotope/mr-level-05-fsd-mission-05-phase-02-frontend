# Z Energy Station Finder Frontend Documentation

## Overview
The Z Energy Station Finder is a modern web application built with React 18.3, TypeScript, and Vite that helps users locate Z Energy stations across New Zealand. It provides an interactive map interface with real-time station information, filtering capabilities, and detailed station information.

![Z-Energy-Redesign](https://github.com/user-attachments/assets/4bada887-490a-4f02-af68-1aa8f13b6ba9)

## Features
- Interactive Google Maps integration with custom station markers
- Real-time station search and filtering
- Current location detection with browser geolocation API
- Detailed station information display including:
  - Opening hours
  - Available services
  - Fuel prices
  - Location details
- Google Maps and Geocoding APIs integration
- Modern, responsive UI with SCSS modules
- TypeScript support for enhanced type safety
- Component-based architecture using React 18.3
- Styled components for consistent UI
- Customizable layout components
- Dockerised development environment

## Project Structure
```
frontend/
├── public/                 # Static assets
├── src/                    # Source code
│   ├── assets/             # Static assets
│   │   └── icons/          # SVG icons (search, arrows, logo, etc.)
│   ├── components/         # Reusable React components
│   │   ├── Button/         # Custom button component with variants
│   │   ├── Card/           # Card container for content blocks
│   │   ├── Container/      # Layout container component
│   │   ├── Form/           # Form components (Input, TextArea)
│   │   ├── Icon/           # SVG icon components
│   │   │   └── icons/      # Individual icon components
│   │   ├── LocationInput/  # Location search components
│   │   │   ├── SearchBox.tsx         # Google Places search box
│   │   │   └── CurrentLocationButton # Geolocation button
│   │   ├── Map/            # Google Maps integration
│   │   └── StationsList/   # Stations list display
│   ├── contexts/           # React context providers
│   │   ├── LocationContext.tsx       # Location state management
│   │   └── StationsContext.tsx       # Stations data management
│   ├── layouts/            # Page layouts
│   │   └── MainLayout.tsx # Main application layout
│   ├── pages/              # Page components
│   │   └── Home/           # Main page component
│   ├── styles/             # Global styles
│   │   ├── _variables.scss # SCSS variables
│   │   ├── _mixins.scss    # SCSS mixins
│   │   └── global.scss     # Global styles
│   ├── App.tsx             # Root component
│   └── main.tsx            # Application entry point
├── .env                    # Environment variables
├── docker-compose.yml      # Docker configuration
├── Dockerfile              # Docker build instructions
├── package.json            # Project dependencies
├── tsconfig.json           # TypeScript configuration
└── vite.config.ts          # Vite configuration
```

## Components

### UI Components

- **Container**: Flexible layout component for consistent spacing
- **Card**: Styled container for content blocks
- **Button**: Customizable button component with variants

### Map Component (`/src/components/Map/Map.tsx`)
- Integrates Google Maps JavaScript API
- Displays station markers with custom styling
- Updates based on location and filter changes

### LocationInput (`/src/components/LocationInput/`)
- `SearchBox.tsx`: Uses Google Geocoding integration to search for locations
- `CurrentLocationButton.tsx`: Uses browser geolocation to set location

### StationsList (`/src/components/StationsList/StationsList.tsx`)
- Displays stations in a scrollable list
- Shows station details including:
  - Name and address
  - Opening hours
  - Available services
  - Current fuel prices

### Context Providers

#### LocationContext (`/src/contexts/LocationContext.tsx`): Manages user location state
```typescript
interface LocationContextType {
  currentLocation: google.maps.LatLngLiteral | null;
  setCurrentLocation: (location: google.maps.LatLngLiteral | null) => void;
}
```

#### StationsContext (`/src/contexts/StationsContext.tsx`): Handles stations data and filtering
```typescript
interface Station {
  _id: string;
  name: string;
  type: string;
  location: {
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
  services: Array<{ name: string }>;
  pricing: {
    [key: string]: string | undefined;
  };
}
```

## Getting Started

### Prerequisites
- Node.js 18+
- Docker and Docker Compose
- Google Maps API key

### Environment Setup
Create a `.env` file in the root directory with:
```
VITE_API_URL=http://localhost:3111
VITE_GOOGLE_MAPS_API_KEY=[Your Google Maps API Key]
```

### Development
```bash
# Start the development environment
docker compose --profile development up
```

### Production
```bash
# Start the production environment
docker compose --profile production up
```

## Dependencies
- React 18.3.1
- TypeScript 5.6.2
- Vite 6.0.3
- @googlemaps/js-api-loader 1.16.8
- SASS (sass-embedded 1.83.0)

## APIs Used

### Backend API
- Base URL: `http://localhost:3111`
- Endpoints:
  - `GET /api/stations/search`: Search for stations with filters
    - Parameters:
      - `latitude`: Latitude of search center
      - `longitude`: Longitude of search center
      - `maxDistance`: Maximum search radius in meters
      - `limit`: Maximum number of results to return

### Google Maps APIs
1. **Maps JavaScript API**
   - Used for map display and interaction
   - Features: Custom markers, info windows, map styling

2. **Geocoding API**
   - Converts text and addresses to coordinates
   - Enables location search functionality

## Data Flow

```mermaid
sequenceDiagram
    participant User
    participant LocationInput
    participant GoogleGeocoding
    participant Backend
    participant Map
    participant StationsList

    User->>LocationInput: Enter location
    LocationInput->>GoogleGeocoding: Request coordinates
    GoogleGeocoding-->>LocationInput: Return coordinates
    LocationInput->>Backend: Request nearby stations
    Backend-->>LocationInput: Return stations data
    LocationInput->>Map: Update map center
    LocationInput->>StationsList: Update stations list
    Map->>Map: Place station markers
    StationsList->>StationsList: Display stations
