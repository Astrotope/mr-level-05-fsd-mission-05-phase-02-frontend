import { useEffect, useState } from 'react';
import { Button } from '@/components/Button/Button';
import styles from './StationsList.module.scss';
import { useLocationContext } from '@/contexts/LocationContext';
import { useStationsContext, Station } from '@/contexts/StationsContext';

export const StationsList = () => {
  const [isLoading, setIsLoading] = useState(false);
  const [error, setError] = useState<string | null>(null);
  const { location } = useLocationContext();
  const { stations, setStations } = useStationsContext();

  const AUCKLAND_CENTER = { lat: -36.8509, lng: 174.7645 };

  useEffect(() => {
    const fetchStations = async () => {
      const currentLocation = location || AUCKLAND_CENTER;

      setIsLoading(true);
      setError(null);

      try {
        const response = await fetch(
          `${import.meta.env.VITE_API_URL}/api/stations/search?latitude=${currentLocation.lat}&longitude=${currentLocation.lng}&maxDistance=20000&limit=3`
        );

        if (!response.ok) {
          throw new Error('Failed to fetch stations');
        }

        const data = await response.json();
        setStations(data);
      } catch (err) {
        setError(err instanceof Error ? err.message : 'An error occurred');
      } finally {
        setIsLoading(false);
      }
    };

    fetchStations();
  }, [location, setStations]);

  if (isLoading) {
    return <div>Loading stations...</div>;
  }

  if (error) {
    return <div>Error: {error}</div>;
  }

  return (
    <ul className={styles.locator_results__list}>
      <li className={`${styles.locator_results__summary} ${styles.h6}`}>
        {stations.length} stations found
      </li>
      {stations.map((station) => (
        <li key={station._id} className={styles.locator_result}>
          <h2 className={`${styles.locator_result__heading} ${styles.h4}`}>
            <a href={station.link}>{station.name}</a>
          </h2>
          <p className={`${styles.locator_result__address} ${styles.h5}`}>
            {station.location.address}, {station.location.suburb}, {station.location.city}
          </p>
          <div className={styles.locator_hours}>
            <Button
              variant="locator_hours__button"
              size="small"
              className={`${styles.locator_hours__button} ${styles.h6} ${styles.locator_hours__button__open}`}
            >
              Opening hours
              <svg
                width="11"
                height="8.03"
                fill="none"
                viewBox="0 0 11 8"
                xmlns="http://www.w3.org/2000/svg"
              >
                <path
                  fillRule="evenodd"
                  clipRule="evenodd"
                  d="M0.21967 1.0644C0.512563 0.771503 0.987437 0.771503 1.28033 1.0644L5.25 5.03407L9.21967 1.0644C9.51256 0.771503 9.98744 0.771503 10.2803 1.0644C10.5732 1.35729 10.5732 1.83216 10.2803 2.12506L5.25 7.15539L0.21967 2.12506C-0.0732233 1.83216 -0.0732233 1.35729 0.21967 1.0644Z"
                  fill="#1E196A"
                ></path>
              </svg>
            </Button>
            <table className={styles.locator_hours__table}>
              <thead className="sr-only">
                <tr>
                  <th>Day</th>
                  <th>Opening hours</th>
                </tr>
              </thead>
              <tbody>
                {station.opening_hours.map((hours) => (
                  <tr key={hours.day}>
                    <td
                      className={`${styles.locator_hours__table_cell} ${styles.locator_hours__table_cell__day}`}
                    >
                      {hours.day}
                    </td>
                    <td
                      className={`${styles.locator_hours__table_cell} ${styles.locator_hours__table_cell__hours}`}
                    >
                      {hours.hours}
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
          <ul className={styles.locator_result__services}>
            {station.services.map((service) => (
              <li key={service.name} className={styles.locator_result__service}>
                {service.name}
              </li>
            ))}
          </ul>
          {station.pricing && (
            <div className={styles.locator_result__pricing}>
              <h3 className={`${styles.h5}`}>Fuel Prices</h3>
              <ul className={styles.locator_result__prices}>
                {Object.entries(station.pricing).map(([fuel, price]) => (
                  <li key={fuel} className={styles.locator_result__price}>
                    <span className={styles.locator_result__fuel_type}>{fuel}</span>
                    <span className={styles.locator_result__fuel_price}>${price}</span>
                  </li>
                ))}
              </ul>
            </div>
          )}
        </li>
      ))}
    </ul>
  );
};
