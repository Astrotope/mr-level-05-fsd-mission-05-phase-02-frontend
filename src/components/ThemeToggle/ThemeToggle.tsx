import { useTheme } from '@/context/ThemeContext';
import { Button } from '@/components/Button';
import styles from './ThemeToggle.module.scss';

export const ThemeToggle = () => {
  const { theme, toggleTheme } = useTheme();

  return (
    <Button
      variant="primary"
      size="small"
      onClick={toggleTheme}
      className={styles.themeToggle}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
    >
      <span className={styles.themeIcon}>
        <i className={`fas ${theme === 'light' ? 'fa-moon' : 'fa-sun'}`}></i>
      </span>
    </Button>
  );
};
