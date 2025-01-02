import { ReactNode } from 'react';
import { Container } from '@/components/Container';
import { ThemeToggle } from '@/components/ThemeToggle/ThemeToggle';
import styles from './MainLayout.module.scss';

interface MainLayoutProps {
  children: ReactNode;
}

export const MainLayout = ({ children }: MainLayoutProps) => {
  return (
    <div className={styles.layout}>
      <header className={styles.header}>
        <Container maxWidth="lg" padding="md">
          <nav className={styles.nav}>
            <ThemeToggle />
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
