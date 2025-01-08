import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { Map } from '@/components/Map/Map';
import { LocationInput } from '@/components/LocationInput/LocationInput';
import styles from './Home.module.scss';

export const Home = () => {

  return (
    <Container 

      direction="column"
      alignItems="center"
      justifyContent="start"
      wrap="wrap"
      padding="none"
      className={styles.mainContainer}
    >
      <Container  
        direction="column"
        alignItems="center"
        justifyContent="start"
        wrap="wrap"
        className={styles.search}
      >
        <Container 
        maxWidth="lg" 
        direction="column"
        alignItems="start"
        justifyContent="start"
        wrap="wrap"
        className={styles.search_inner}
        >
          <h1>Find a station</h1>

          {/* Location Input Section */}
          <section className={styles.location_input}>
            <Container maxWidth="lg" direction="row" gap="none" wrap="wrap" alignItems="center" className={styles.location_input_content} padding="none">
              <LocationInput />
            </Container>
          </section>

          {/* Filter Search Tabs Section */}
          <section className={styles.filter_search_tabs}>
            <Container direction="row" gap="xs" wrap="wrap" alignItems="center" justifyContent="start" className={styles.filter_search_tabs_content} padding="none">
              <Button variant="z-energy-variant-05" size="small">Filter by Service</Button>
              <Button variant="z-energy-variant-05" size="small">Filter by Price</Button>
              <Button variant="z-energy-variant-05" size="small">Filter by Distance</Button>
            </Container>
          </section>
        </Container>
      </Container>

      {/* Filter Search Section */}
      <section className={styles.filter_search}>
        <Container direction="column" gap="none" wrap="wrap" alignItems="start" className={styles.filter_search_content} padding="none">
          <Container direction="column" gap="none" wrap="nowrap" alignItems="start" justifyContent="start" className={styles.filter_search_controls} padding="none">
            <Container direction="row" gap="none" wrap="nowrap" className={styles.filter_search_controls_heading} padding="none">
              <p>Select Fuel</p>
            </Container>
            <Container direction="row" gap="sm" wrap="wrap" alignItems="center" className={styles.filter_search_controls_options} padding="none">
              <Button variant="z-energy-variant-01" size="medium">Diesel</Button>
              <Button variant="z-energy-variant-01" size="medium">Gas</Button>
              <Button variant="z-energy-variant-01" size="medium">Diesel & Gas</Button>
            </Container>
            <Container direction="row" gap="none" wrap="nowrap" alignItems="center" className={styles.filter_search_controls_heading} padding="none">
              <p>Select Services</p>
            </Container>
            <Container direction="row" gap="sm" wrap="wrap" alignItems="center" className={styles.filter_search_controls_options} padding="none">
              <Button variant="z-energy-variant-01" size="medium">Car Wash</Button>
              <Button variant="z-energy-variant-01" size="medium">Trailer Hire</Button>
              <Button variant="z-energy-variant-01" size="medium">LPG Swap</Button>
              <Button variant="z-energy-variant-01" size="medium">Engine Oil</Button>
              <Button variant="z-energy-variant-01" size="medium">Tyre Pressure</Button>
              <Button variant="z-energy-variant-01" size="medium">Food & Drink</Button>
              <Button variant="z-energy-variant-01" size="medium">Pay in App</Button>
              <Button variant="z-energy-variant-01" size="medium">Pay at Pump</Button>
              <Button variant="z-energy-variant-01" size="medium">Pay by Late</Button>
              <Button variant="z-energy-variant-01" size="medium">WiFi</Button>
              <Button variant="z-energy-variant-01" size="medium">ATM</Button>
              <Button variant="z-energy-variant-01" size="medium">Toilets</Button>
            </Container>
            <Container direction="row" gap="none" wrap="nowrap" alignItems="center" className={styles.filter_search_controls_heading} padding="none">
              <p>Select Station Type</p>
            </Container>
            <Container direction="row" gap="sm" wrap="wrap" alignItems="center" className={styles.filter_search_controls_options} padding="none">
              <Button variant="z-energy-variant-01" size="medium">Service Station</Button>
              <Button variant="z-energy-variant-01" size="medium">Truck Stop</Button>
            </Container>
            <Container direction="row" gap="sm" wrap="nowrap" alignItems="center" className={styles.filter_search_controls_heading} padding="none">
              <p>Sort By</p>
            </Container>
            <Container direction="row" gap="sm" wrap="wrap" alignItems="center" className={styles.filter_search_controls_options} padding="none">
              <Button variant="z-energy-variant-01" size="medium">Nearest</Button>
              <Button variant="z-energy-variant-01" size="medium">Cheapest</Button>
              <Button variant="z-energy-variant-01" size="medium">Economical</Button>
            </Container>
          </Container>
        </Container>
      </section>   

      {/* Apply Filters Section */}
      <section className={styles.filter_search_tabs}>
        <Container direction="row" gap="sm" wrap="wrap" alignItems="center" justifyContent="start" className={styles.filter_search_tabs_content} padding="none">
          <Button variant="z-energy-variant-01" size="small">Reset Filters</Button>
          <Button variant="z-energy-variant-01" size="small">Apply Filters</Button>
        </Container>
      </section>

      {/* Map Legend Section */}
      <section className={styles.filter_search_tabs}>
        <Container direction="row" gap="md" wrap="wrap" alignItems="center" justifyContent="start" className={styles.filter_search_tabs_content} padding="none">
          <Button variant="primary" size="small">ZX Premium</Button>
          <Button variant="primary" size="small">Z91 Unleaded</Button>
          <Button variant="primary" size="small">Z Diesel</Button>
          <Button variant="primary" size="small">EV Charging</Button>
        </Container>
      </section>    

      {/* Map Section */}
      <section className={styles.section}>
        <Container direction="row" gap="none" wrap="nowrap" alignItems="center" className={styles.mapContent} padding="none">

          <Container direction="row" gap="none" wrap="nowrap" alignItems="center" justifyContent="center" className={styles.stations_overlay}>
            <Card className={styles.stations_card}>
              <p>Station Name</p>
            </Card>
          </Container>

          <Container direction="row" gap="none" wrap="nowrap" alignItems="center" justifyContent="center" className={styles.map_container}>
            <Map className={styles.map} />
          </Container>
        </Container>
      </section>

    </Container>
  );
};
