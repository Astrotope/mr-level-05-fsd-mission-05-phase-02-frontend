import { Container } from '../Container/Container';
import { SearchBox } from './SearchBox';
import { CurrentLocationButton } from './CurrentLocationButton';

export const LocationInput = () => {
  return (
    <Container direction="column" gap="lg">
      <SearchBox />
      <CurrentLocationButton />
    </Container>
  );
};
