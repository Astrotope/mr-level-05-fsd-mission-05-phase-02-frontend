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
    <div className={styles.layout}>
      <header className={styles.header}>
        <Container as="div" className={styles.header} maxWidth="lg" padding="md">
          <Icon 
            icon="logo" 
            width={32} 
            height={32} 
            className={styles.logo}
          />
          <Button variant="primary" size="small">Button</Button>
          <nav className={styles.nav}>
          </nav>
        </Container>
      </header>

      <main className={styles.main}>
        {children}
      </main>

      <footer className={styles.footer}>
        <Container maxWidth="lg" padding="md">
          <div className={styles.footerContent}>
            {/* Add your footer content here */}
          </div>
        </Container>
      </footer>
    </div>
  );
};
