import { ReactNode } from 'react';
import styles from './Card.module.scss';

export interface CardProps {
  children: ReactNode;
  variant?: 'elevated' | 'outlined' | 'filled' | 'transparent';
  className?: string;
  onClick?: () => void;
  hoverable?: boolean;
  padding?: 'none' | 'sm' | 'md' | 'lg';
}

export const Card = ({
  children,
  variant = 'elevated',
  className = '',
  onClick,
  hoverable = false,
  padding = 'md',
}: CardProps) => {
  return (
    <div
      className={`
        ${styles.card}
        ${styles[variant]}
        ${hoverable ? styles.hoverable : ''}
        ${styles[`padding-${padding}`]}
        ${className}
      `}
      onClick={onClick}
      role={onClick ? 'button' : undefined}
      tabIndex={onClick ? 0 : undefined}
    >
      {children}
    </div>
  );
};
