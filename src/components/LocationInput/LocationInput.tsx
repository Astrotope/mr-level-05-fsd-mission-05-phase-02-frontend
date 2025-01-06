import { Container } from '../Container/Container';
import { SearchBox } from './SearchBox';
import { CurrentLocationButton } from './CurrentLocationButton';
import { useLocationContext } from '../../contexts/LocationContext';

export const LocationInput = () => {
  const { error, setError } = useLocationContext();

  return (
    <Container direction="column" gap="medium">
      <SearchBox />
      <CurrentLocationButton />
    </Container>
  );
};
