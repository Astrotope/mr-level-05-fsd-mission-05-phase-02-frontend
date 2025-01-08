import { Container } from '@/components/Container';
import { Card } from '@/components/Card';
import { Button } from '@/components/Button';
import { ContactForm } from '@/components/ContactForm/ContactForm';
import { Map } from '@/components/Map/Map';
import { LocationInput } from '@/components/LocationInput/LocationInput';
import { StationsList } from '@/components/StationsList/StationsList';
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
              <Button variant="z-energy-variant-05" size="small">Filter by services</Button>
              <Button variant="z-energy-variant-05" size="small">Filter by price</Button>
              <Button variant="z-energy-variant-05" size="small">Filter by distance</Button>
            </Container>
          </section>
        </Container>
      </Container>

      {/* Filter Search Section */}
      <Container 
        maxWidth="lg" 
        direction="column"
        alignItems="start"
        justifyContent="start"
        wrap="wrap"
        className={styles.search_inner}
        >
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

        <Container direction="row" gap="none" wrap="nowrap" alignItems="center" justifyContent="between" className={styles.search_filter_buttons_legend}>
          {/* Apply Filters Section */}
          <section className={styles.filter_search_buttons}>
            <Container direction="row" gap="sm" wrap="nowrap" alignItems="center" justifyContent="start" className={styles.filter_search_buttons} padding="none">
              <Button variant="z-energy-variant-07-left" size="small">
              <span className="button__circle_02" aria-hidden="true">
                    <span className="button__arrow button__arrow--first">
                      <svg width="10" height="10" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group">
                      <path id="Vector" d="M13 6.43482L1.33331 6.43481" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path id="Vector_2" d="M5.66667 1.46373L1 6.43475L5.66667 11.4058" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      </svg>
                    </span>
                  </span>Reset Filters
              </Button>
              <Button variant="z-energy-variant-07-right" size="small">Apply Filters
              <span className="button__circle_02" aria-hidden="true">
                    <span className="button__arrow button__arrow--first">
                      <svg width="10" height="10" viewBox="0 0 14 13" fill="none" xmlns="http://www.w3.org/2000/svg">
                      <g id="Group">
                      <path id="Vector" d="M1.00001 6.43481L12.6667 6.43481" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      <path id="Vector_2" d="M8.33333 11.4059L13 6.43488L8.33333 1.46387" stroke="#EE5C13" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"/>
                      </g>
                      </svg>
                    </span>
                  </span>
              </Button>
            </Container>
          </section>

          {/* Map Legend Section */}
          <section className={styles.filter_search_tabs}>
            <Container direction="row" gap="md" wrap="nowrap" alignItems="center" justifyContent="end" className={styles.filter_search_tabs_content} padding="none">
                <svg width="433" height="40" viewBox="0 0 718 66" fill="none" xmlns="http://www.w3.org/2000/svg">
                <rect width="718" height="66" rx="16" fill="#F8F8F8"/>
                <rect x="243" y="16" width="34" height="35" rx="17" transform="rotate(90 243 16)" fill="#F8852C"/>
                <rect x="82" y="15" width="35" height="35" rx="17.5" transform="rotate(90 82 15)" fill="#ED550E"/>
                <rect x="411" y="15" width="35" height="35" rx="17.5" transform="rotate(90 411 15)" fill="#FFB12E"/>
                <rect x="542" y="16" width="34" height="35" rx="17" transform="rotate(90 542 16)" fill="#2C259B"/>
                <path d="M99.84 36.58V38H90.82V36.86L97.8 27.12H90.92V25.72H99.76V26.84L92.8 36.58H99.84ZM111.324 25.72L107.144 31.72L111.504 38H109.704L106.224 33L102.764 38H101.024L105.364 31.76L101.184 25.72H102.984L106.264 30.5L109.584 25.72H111.324ZM119.07 36.96V41.4H117.57V29.12H119.07V30.16C119.53 29.52 120.47 28.94 121.57 28.94C124.19 28.94 125.57 31.1 125.57 33.56C125.57 36.02 124.19 38.18 121.57 38.18C120.47 38.18 119.53 37.6 119.07 36.96ZM119.07 31.76V35.36C119.53 36.28 120.41 36.82 121.35 36.82C123.05 36.82 124.05 35.44 124.05 33.56C124.05 31.68 123.05 30.3 121.35 30.3C120.41 30.3 119.53 30.84 119.07 31.76ZM132.17 29.08V30.62C131.93 30.46 131.55 30.38 131.17 30.38C130.23 30.38 129.41 31 129.11 32.04V38H127.61V29.12H129.11V30.28C129.49 29.52 130.33 28.94 131.31 28.94C131.69 28.94 132.01 29 132.17 29.08ZM139.381 35.34H140.801C140.481 37.02 139.221 38.18 137.221 38.18C134.801 38.18 133.141 36.32 133.141 33.58C133.141 30.92 134.761 28.94 137.181 28.94C139.621 28.94 140.921 30.72 140.921 33.3V33.84H134.641C134.661 35.74 135.721 36.9 137.221 36.9C138.321 36.9 139.141 36.34 139.381 35.34ZM137.201 30.22C135.861 30.22 134.901 31.14 134.681 32.7H139.401C139.381 31.38 138.681 30.22 137.201 30.22ZM149.222 30.36C149.782 29.56 150.682 28.94 151.922 28.94C153.722 28.94 154.722 30.2 154.722 32.12V38H153.202V32.36C153.202 31.12 152.662 30.3 151.522 30.3C150.622 30.3 149.842 30.92 149.562 31.88V38H148.062V32.36C148.062 31.12 147.522 30.3 146.382 30.3C145.482 30.3 144.702 30.92 144.422 31.88V38H142.922V29.12H144.422V30.16C144.862 29.46 145.722 28.94 146.822 28.94C147.942 28.94 148.802 29.52 149.222 30.36ZM158.758 29.12V38H157.258V29.12H158.758ZM158.978 26.44C158.978 26.96 158.538 27.4 157.998 27.4C157.478 27.4 157.038 26.96 157.038 26.44C157.038 25.9 157.478 25.48 157.998 25.48C158.538 25.48 158.978 25.9 158.978 26.44ZM168.518 29.12V38H166.998V36.88C166.498 37.58 165.558 38.18 164.418 38.18C162.398 38.18 161.318 36.88 161.318 34.94V29.12H162.838V34.7C162.838 35.94 163.438 36.8 164.778 36.8C165.818 36.8 166.678 36.1 166.998 35.14V29.12H168.518ZM177.484 30.36C178.044 29.56 178.944 28.94 180.184 28.94C181.984 28.94 182.984 30.2 182.984 32.12V38H181.464V32.36C181.464 31.12 180.924 30.3 179.784 30.3C178.884 30.3 178.104 30.92 177.824 31.88V38H176.324V32.36C176.324 31.12 175.784 30.3 174.644 30.3C173.744 30.3 172.964 30.92 172.684 31.88V38H171.184V29.12H172.684V30.16C173.124 29.46 173.984 28.94 175.084 28.94C176.204 28.94 177.064 29.52 177.484 30.36Z" fill="#1E196A"/>
                <path d="M260.84 36.58V38H251.82V36.86L258.8 27.12H251.92V25.72H260.76V26.84L253.8 36.58H260.84ZM269.144 29.64C269.144 28.04 268.064 26.88 266.484 26.88C264.944 26.88 263.844 28.02 263.844 29.64C263.844 31.28 264.944 32.44 266.484 32.44C268.044 32.44 269.144 31.3 269.144 29.64ZM262.564 35.14H264.124C264.464 36.18 265.144 36.88 266.384 36.88C268.184 36.88 269.484 34.82 269.484 32.18C269.484 32.06 269.464 31.76 269.464 31.64C269.064 32.88 267.804 33.74 266.364 33.74C263.984 33.74 262.384 31.88 262.384 29.66C262.384 27.4 263.984 25.54 266.504 25.54C268.104 25.54 269.404 26.34 270.164 27.88C270.684 28.98 270.884 30.2 270.884 31.64C270.884 35.62 269.044 38.18 266.384 38.18C264.224 38.18 263.044 37.02 262.564 35.14ZM276.666 25.7V38H275.126V27.6L272.086 29.16V27.56L275.726 25.7H276.666ZM291.002 29.12V38H289.482V36.88C288.982 37.58 288.042 38.18 286.902 38.18C284.882 38.18 283.802 36.88 283.802 34.94V29.12H285.322V34.7C285.322 35.94 285.922 36.8 287.262 36.8C288.302 36.8 289.162 36.1 289.482 35.14V29.12H291.002ZM293.668 38V29.12H295.168V30.24C295.688 29.54 296.648 28.94 297.788 28.94C299.808 28.94 300.908 30.24 300.908 32.18V38H299.388V32.42C299.388 31.18 298.768 30.32 297.428 30.32C296.388 30.32 295.488 31.02 295.168 31.98V38H293.668ZM304.953 25V38H303.453V25H304.953ZM313.233 35.34H314.653C314.333 37.02 313.073 38.18 311.073 38.18C308.653 38.18 306.993 36.32 306.993 33.58C306.993 30.92 308.613 28.94 311.033 28.94C313.473 28.94 314.773 30.72 314.773 33.3V33.84H308.493C308.513 35.74 309.573 36.9 311.073 36.9C312.173 36.9 312.993 36.34 313.233 35.34ZM311.053 30.22C309.713 30.22 308.753 31.14 308.533 32.7H313.253C313.233 31.38 312.533 30.22 311.053 30.22ZM323.214 38H321.774V37.34C321.434 37.7 320.494 38.16 319.434 38.16C317.634 38.16 316.134 37.08 316.134 35.32C316.134 33.66 317.634 32.54 319.534 32.54C320.454 32.54 321.394 32.92 321.774 33.26V32.14C321.774 31.04 321.094 30.24 319.814 30.24C318.874 30.24 318.274 30.64 317.994 31.46H316.514C316.814 29.96 318.134 28.94 319.834 28.94C321.954 28.94 323.214 30.14 323.214 32.08V38ZM321.774 35.8V34.88C321.514 34.22 320.614 33.78 319.694 33.78C318.614 33.78 317.574 34.26 317.574 35.32C317.574 36.4 318.614 36.9 319.694 36.9C320.614 36.9 321.514 36.46 321.774 35.8ZM331.638 38V36.96C331.198 37.6 330.238 38.18 329.138 38.18C326.538 38.18 325.138 36.08 325.138 33.56C325.138 31.06 326.538 28.94 329.138 28.94C330.238 28.94 331.198 29.52 331.638 30.16V25H333.158V38H331.638ZM331.638 35.36V31.76C331.178 30.84 330.298 30.3 329.358 30.3C327.658 30.3 326.658 31.68 326.658 33.56C326.658 35.44 327.658 36.82 329.358 36.82C330.298 36.82 331.178 36.28 331.638 35.36ZM341.417 35.34H342.837C342.517 37.02 341.257 38.18 339.257 38.18C336.837 38.18 335.177 36.32 335.177 33.58C335.177 30.92 336.797 28.94 339.217 28.94C341.657 28.94 342.957 30.72 342.957 33.3V33.84H336.677C336.697 35.74 337.757 36.9 339.257 36.9C340.357 36.9 341.177 36.34 341.417 35.34ZM339.237 30.22C337.897 30.22 336.937 31.14 336.717 32.7H341.437C341.417 31.38 340.717 30.22 339.237 30.22ZM350.856 38V36.96C350.416 37.6 349.456 38.18 348.356 38.18C345.756 38.18 344.356 36.08 344.356 33.56C344.356 31.06 345.756 28.94 348.356 28.94C349.456 28.94 350.416 29.52 350.856 30.16V25H352.376V38H350.856ZM350.856 35.36V31.76C350.396 30.84 349.516 30.3 348.576 30.3C346.876 30.3 345.876 31.68 345.876 33.56C345.876 35.44 346.876 36.82 348.576 36.82C349.516 36.82 350.396 36.28 350.856 35.36Z" fill="#1E196A"/>
                <path d="M428.84 36.58V38H419.82V36.86L426.8 27.12H419.92V25.72H428.76V26.84L421.8 36.58H428.84ZM441.298 38V36.96C440.858 37.6 439.898 38.18 438.798 38.18C436.198 38.18 434.798 36.08 434.798 33.56C434.798 31.06 436.198 28.94 438.798 28.94C439.898 28.94 440.858 29.52 441.298 30.16V25H442.818V38H441.298ZM441.298 35.36V31.76C440.838 30.84 439.958 30.3 439.018 30.3C437.318 30.3 436.318 31.68 436.318 33.56C436.318 35.44 437.318 36.82 439.018 36.82C439.958 36.82 440.838 36.28 441.298 35.36ZM446.977 29.12V38H445.477V29.12H446.977ZM447.197 26.44C447.197 26.96 446.757 27.4 446.217 27.4C445.697 27.4 445.257 26.96 445.257 26.44C445.257 25.9 445.697 25.48 446.217 25.48C446.757 25.48 447.197 25.9 447.197 26.44ZM455.256 35.34H456.676C456.356 37.02 455.096 38.18 453.096 38.18C450.676 38.18 449.016 36.32 449.016 33.58C449.016 30.92 450.636 28.94 453.056 28.94C455.496 28.94 456.796 30.72 456.796 33.3V33.84H450.516C450.536 35.74 451.596 36.9 453.096 36.9C454.196 36.9 455.016 36.34 455.256 35.34ZM453.076 30.22C451.736 30.22 450.776 31.14 450.556 32.7H455.276C455.256 31.38 454.556 30.22 453.076 30.22ZM458.096 35.56H459.656C459.936 36.48 460.716 36.92 461.756 36.92C462.816 36.92 463.576 36.5 463.576 35.6C463.576 34.98 463.176 34.6 462.256 34.36L460.496 33.9C459.236 33.58 458.356 32.94 458.356 31.56C458.356 29.98 459.736 28.94 461.536 28.94C463.496 28.94 464.656 29.9 464.976 31.46H463.476C463.216 30.66 462.596 30.2 461.516 30.2C460.636 30.2 459.816 30.62 459.816 31.48C459.816 32.08 460.216 32.36 461.056 32.6L462.776 33.02C464.296 33.42 465.036 34.26 465.036 35.5C465.036 37.18 463.636 38.18 461.736 38.18C459.796 38.18 458.376 37.2 458.096 35.56ZM472.717 35.34H474.137C473.817 37.02 472.557 38.18 470.557 38.18C468.137 38.18 466.477 36.32 466.477 33.58C466.477 30.92 468.097 28.94 470.517 28.94C472.957 28.94 474.257 30.72 474.257 33.3V33.84H467.977C467.997 35.74 469.057 36.9 470.557 36.9C471.657 36.9 472.477 36.34 472.717 35.34ZM470.537 30.22C469.197 30.22 468.237 31.14 468.017 32.7H472.737C472.717 31.38 472.017 30.22 470.537 30.22ZM477.758 25V38H476.258V25H477.758Z" fill="#1E196A"/>
                <path d="M551.46 25.72H559.28V27.12H553.02V31H558.7V32.4H553.02V36.58H559.28V38H551.46V25.72ZM566.933 38H565.453L560.713 25.72H562.373L566.213 35.92L570.073 25.72H571.673L566.933 38ZM577.204 33.56C577.204 30.8 578.864 28.94 581.244 28.94C583.244 28.94 584.504 30.1 584.804 31.8H583.264C583.064 30.84 582.304 30.26 581.244 30.26C579.724 30.26 578.724 31.62 578.724 33.56C578.724 35.5 579.724 36.86 581.244 36.86C582.304 36.86 583.064 36.28 583.264 35.32H584.804C584.504 37.02 583.244 38.18 581.244 38.18C578.864 38.18 577.204 36.32 577.204 33.56ZM586.77 38V25H588.27V30.24C588.79 29.54 589.75 28.94 590.89 28.94C592.91 28.94 594.01 30.24 594.01 32.18V38H592.49V32.42C592.49 31.18 591.87 30.32 590.53 30.32C589.49 30.32 588.59 31.02 588.27 31.98V38H586.77ZM602.995 38H601.555V37.34C601.215 37.7 600.275 38.16 599.215 38.16C597.415 38.16 595.915 37.08 595.915 35.32C595.915 33.66 597.415 32.54 599.315 32.54C600.235 32.54 601.175 32.92 601.555 33.26V32.14C601.555 31.04 600.875 30.24 599.595 30.24C598.655 30.24 598.055 30.64 597.775 31.46H596.295C596.595 29.96 597.915 28.94 599.615 28.94C601.735 28.94 602.995 30.14 602.995 32.08V38ZM601.555 35.8V34.88C601.295 34.22 600.395 33.78 599.475 33.78C598.395 33.78 597.355 34.26 597.355 35.32C597.355 36.4 598.395 36.9 599.475 36.9C600.395 36.9 601.295 36.46 601.555 35.8ZM610.119 29.08V30.62C609.879 30.46 609.499 30.38 609.119 30.38C608.179 30.38 607.359 31 607.059 32.04V38H605.559V29.12H607.059V30.28C607.439 29.52 608.279 28.94 609.259 28.94C609.639 28.94 609.959 29 610.119 29.08ZM617.609 37.4V36.74C617.169 37.36 616.229 37.94 615.129 37.94C612.529 37.94 611.149 35.78 611.149 33.44C611.149 31.08 612.529 28.94 615.129 28.94C616.229 28.94 617.169 29.5 617.609 30.12V29.12H619.129V37.3C619.129 40.22 617.449 41.6 615.169 41.6C613.009 41.6 611.649 40.48 611.369 38.66H612.849C613.109 39.78 613.949 40.32 615.169 40.32C616.769 40.32 617.609 39.32 617.609 37.4ZM617.609 35.2V31.66C617.149 30.82 616.309 30.28 615.349 30.28C613.669 30.28 612.689 31.6 612.689 33.44C612.689 35.26 613.669 36.58 615.349 36.58C616.309 36.58 617.149 36.04 617.609 35.2ZM623.309 29.12V38H621.809V29.12H623.309ZM623.529 26.44C623.529 26.96 623.089 27.4 622.549 27.4C622.029 27.4 621.589 26.96 621.589 26.44C621.589 25.9 622.029 25.48 622.549 25.48C623.089 25.48 623.529 25.9 623.529 26.44ZM625.988 38V29.12H627.488V30.24C628.008 29.54 628.968 28.94 630.108 28.94C632.128 28.94 633.228 30.24 633.228 32.18V38H631.708V32.42C631.708 31.18 631.088 30.32 629.748 30.32C628.708 30.32 627.808 31.02 627.488 31.98V38H625.988ZM641.594 37.4V36.74C641.154 37.36 640.214 37.94 639.114 37.94C636.514 37.94 635.134 35.78 635.134 33.44C635.134 31.08 636.514 28.94 639.114 28.94C640.214 28.94 641.154 29.5 641.594 30.12V29.12H643.114V37.3C643.114 40.22 641.434 41.6 639.154 41.6C636.994 41.6 635.634 40.48 635.354 38.66H636.834C637.094 39.78 637.934 40.32 639.154 40.32C640.754 40.32 641.594 39.32 641.594 37.4ZM641.594 35.2V31.66C641.134 30.82 640.294 30.28 639.334 30.28C637.654 30.28 636.674 31.6 636.674 33.44C636.674 35.26 637.654 36.58 639.334 36.58C640.294 36.58 641.134 36.04 641.594 35.2Z" fill="#1E196A"/>
                </svg>
            </Container>
          </section>
        </Container>    
      </Container>
      {/* Map Section */}
      <section className={styles.section_02}>
        <Container direction="row" gap="none" wrap="nowrap" alignItems="start" className={styles.mapContent} padding="none">

          <Container direction="row" gap="none" wrap="nowrap" alignItems="center" justifyContent="center" className={styles.stations_overlay}>
            <Card className={styles.stations_card}>
              <StationsList />
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
