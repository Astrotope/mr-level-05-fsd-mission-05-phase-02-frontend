import { Container } from '../Container/Container';
import { SearchBox } from './SearchBox';
import { CurrentLocationButton } from './CurrentLocationButton';

export const LocationInput = () => {
  return (
    <Container direction="column" gap="lg" maxWidth="full" alignItems="start">
      <SearchBox />
      <CurrentLocationButton />
    </Container>
  );
};
