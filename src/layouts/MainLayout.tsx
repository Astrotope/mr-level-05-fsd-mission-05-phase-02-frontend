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
                width={32} 
                height={32} 
                className={styles.logo}
              />

              <Container as="div" alignItems="center" gap="md">
                <Button variant="primary" size="small">For Personal</Button>
                <Button variant="primary" size="small">For Business</Button>
              </Container>

            </Container>

            <Container as="div" className={styles.header_01_right} alignItems="center" justifyContent="end" gap="md">

              <Container as="div" alignItems="center" gap="md">
                <Button variant="primary" size="small">Z App</Button>
                <Button variant="primary" size="small">About Z</Button>
              </Container>

              <Icon 
                icon="search" 
                width={32} 
                height={32} 
                className={styles.logo}
              />
              <Button variant="primary" size="small">Login</Button>

              <nav className={styles.nav}>
              </nav>

            </Container>

          </Container>

          <Container as="div" className={styles.header_02} maxWidth="lg" padding="none">
            <Container as="div" className={styles.header_02_left} alignItems="center" justifyContent="start" gap="md">

              <Container as="div" alignItems="center" gap="md">
                <Button variant="primary" size="small">At the Station</Button>
                <Button variant="primary" size="small">Power</Button>
                <Button variant="primary" size="small">Rewards & Plans</Button>
              </Container>
            </Container>
            <Container as="div" className={styles.header_02_right} alignItems="center" justifyContent="end" gap="md">
              <Container as="div" alignItems="center" gap="md">
                <Button variant="primary" size="small">Locate Z</Button>
              </Container>
            </Container>
          </Container>
          
        </header>

        <main className={styles.main}>
          {children}
        </main>

        <footer className={styles.footer}>
          <Container as="div" className={styles.footerContent} maxWidth="lg" padding="none">
            <Container as="div" className={styles.header_01_left} alignItems="center" justifyContent="start" gap="md">
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
        </footer>
      
      </Container>

  );
};
