import { ReactNode } from 'react';
import { Container } from '@/components/Container';
import { Button } from '@/components/Button';
import { Icon } from '@/components/Icon';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
 
      <Container 
        maxWidth="xxl" 
        direction="column"
        alignItems="center"
        justifyContent="start"
        wrap="wrap"
        padding="none"
        className={styles.layout}
      >

        <header className={styles.header}>
          <Container as="div" className={styles.header_01} maxWidth="lg" padding="none">

            <Container as="div" className={styles.header_01_left} alignItems="center" justifyContent="start" gap="md">

              <Icon 
                icon="logo" 
                width={54} 
                height={54} 
                className={styles.logo}
              />

              <Container as="div" alignItems="center" gap="md">
                <Button variant="z-energy-variant-02" size="small">For personal</Button>
                <Button variant="z-energy-variant-03" size="small">For business</Button>
              </Container>

            </Container>

            <Container as="div" className={styles.header_01_right} alignItems="center" justifyContent="end" gap="md">

              <Container as="div" alignItems="center" gap="md">
                <Button variant="nav" size="small">Z App</Button>
                <Button variant="nav" size="small">About Z</Button>
              </Container>

              <Icon 
                icon="search" 
                width={16} 
                height={16} 
                className={styles.logo}
              />
              <Button variant="z-energy-variant-04" size="small">Login
                <span className="button__circle" aria-hidden="true">
                  <span className="button__arrow button__arrow--first">
                    <svg width="11" height="8.03" fill="none" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                      <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.0644C0.512563 0.771503 0.987437 0.771503 1.28033 1.0644L5.25 5.03407L9.21967 1.0644C9.51256 0.771503 9.98744 0.771503 10.2803 1.0644C10.5732 1.35729 10.5732 1.83216 10.2803 2.12506L5.25 7.15539L0.21967 2.12506C-0.0732233 1.83216 -0.0732233 1.35729 0.21967 1.0644Z" fill="currentColor">
                      </path>
                    </svg>
                  </span>
                </span>
              </Button>

            </Container>

          </Container>

          <Container as="div" className={styles.header_02} maxWidth="lg" padding="none">
            <Container as="div" className={styles.header_02_left} alignItems="center" justifyContent="start" gap="md">

              <Container as="div" alignItems="center" gap="md">
                <Button variant="nav" size="small">At the station</Button>
                <Button variant="nav" size="small">Power</Button>
                <Button variant="nav" size="small">Rewards and promotions</Button>
              </Container>
            </Container>
            <Container as="div" className={styles.header_02_right} alignItems="center" justifyContent="end" gap="md">
              <Container as="div" alignItems="center" gap="md">
                <Button variant="z-energy-variant-04" size="small">Locate Z
                  <span className="button__circle" aria-hidden="true">
                    <span className="button__arrow button__arrow--first">
                      <svg width="11" height="8.03" fill="none" viewBox="0 0 11 8" xmlns="http://www.w3.org/2000/svg">
                        <path fillRule="evenodd" clipRule="evenodd" d="M0.21967 1.0644C0.512563 0.771503 0.987437 0.771503 1.28033 1.0644L5.25 5.03407L9.21967 1.0644C9.51256 0.771503 9.98744 0.771503 10.2803 1.0644C10.5732 1.35729 10.5732 1.83216 10.2803 2.12506L5.25 7.15539L0.21967 2.12506C-0.0732233 1.83216 -0.0732233 1.35729 0.21967 1.0644Z" fill="currentColor">
                        </path>
                      </svg>
                    </span>
                  </span>
                </Button>
              </Container>
            </Container>
          </Container>
          
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <Container as="div" className={styles.footer_content} maxWidth="lg" padding="none" justifyContent="between">
            <Container as="div" className={styles.header_01_left} alignItems="center" justifyContent="between" gap="md">
              <Container as="div" alignItems="center" justifyContent="start" gap="md">
              <Icon 
                icon="logo" 
                width={32} 
                height={32} 
                className={styles.logo}
              />
              </Container>

              <Container as="div" alignItems="center" justifyContent="center" gap="md">
                <Button variant="primary" size="small">Products and Services</Button>
                <Button variant="primary" size="small">For Business</Button>
                <Button variant="primary" size="small">About Z</Button>
              </Container>

              <Container as="div" alignItems="center" justifyContent="center" direction="column" gap="md" wrap="wrap" padding="none">
                <Container as="div" alignItems="center" justifyContent="center" gap="md">
                  <Button variant="primary" size="small">For Personal</Button>
                </Container>
                <Container as="div" alignItems="center" justifyContent="center" gap="md">
                  <Button variant="primary" size="small">Facebook</Button>
                  <Button variant="primary" size="small">Instagram</Button>
                  <Button variant="primary" size="small">Linked In</Button>
                </Container>
              </Container>

            </Container>            
          </Container>

          <Container as="div" className={styles.footer_content} maxWidth="lg" padding="none" justifyContent="between">
            <Container as="div" className={styles.footer_01_left} alignItems="center" justifyContent="start" gap="md" >
              <div>Privacy</div>
              <div>Terms of Use</div>
              <div>Fuel Safety Datasheets</div>
              <div>Investor Relations</div>
            </Container>
            <Container as="div" className={styles.footer_01_right} alignItems="center" justifyContent="start" gap="md" wrap ="nowrap">
              <p>© Z Energy Limited. All trademarks are used under license.</p>
            </Container>
          </Container>
        </footer>
      
      </Container>

  );
};
