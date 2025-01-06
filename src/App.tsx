import { MainLayout } from './layouts/MainLayout';
import { Home } from './pages/Home/Home';
import { LocationProvider } from './contexts/LocationContext';
import './styles/global.scss';

function App() {
  return (
    <LocationProvider>
      <MainLayout>
        <Home />
      </MainLayout>
    </LocationProvider>
  );
}

export default App;
