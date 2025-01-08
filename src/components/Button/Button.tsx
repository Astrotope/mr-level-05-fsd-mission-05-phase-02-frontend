// import { ReactNode, ButtonHTMLAttributes } from 'react';
// import styles from './Button.module.scss';

// export type ButtonVariant = 'primary' | 'secondary' | 'accent' | 'outline' | 'text' | 'z-energy-variant-01' | 'z-energy-variant-02' | 'z-energy-variant-03' | 'z-energy-variant-04';  
// export type ButtonSize = 'small' | 'medium' | 'large';

// export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
//   children: ReactNode;
//   variant?: ButtonVariant;
//   size?: ButtonSize;
//   fullWidth?: boolean;
//   className?: string;
// }

// export const Button = ({
//   children,
//   variant = 'primary',
//   size = 'medium',
//   fullWidth = false,
//   className = '',
//   ...props
// }: ButtonProps) => {
//   return (
//     <button
//       className={`${styles.button} ${styles[variant]} ${styles[size]} ${
//         fullWidth ? styles.fullWidth : ''
//       } ${className}`}
//       {...props}
//     >
//       {children}
//     </button>
//   );
// };

import { ReactNode, ButtonHTMLAttributes, useState } from 'react';
import styles from './Button.module.scss';

export type ButtonVariant = 
  'primary' | 'secondary' | 'accent' | 'outline' | 'text' | 'nav' | 'use-location' | 'social-icon' | 'z-energy-variant-01' | 'z-energy-variant-02' | 'z-energy-variant-03' | 'z-energy-variant-04' | 'z-energy-variant-05' | 'z-energy-variant-06' | 'z-energy-variant-07-left' | 'z-energy-variant-07-right' | 'locator_hours__button';  

export type ButtonSize = 'small' | 'medium' | 'large';

export interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  children: ReactNode;
  variant?: ButtonVariant;
  size?: ButtonSize;
  fullWidth?: boolean;
  className?: string;
  isActive?: boolean; // Optional prop to control active state externally
  onToggleActive?: (isActive: boolean) => void; // Callback when active state changes
}

export const Button = ({
  children,
  variant = 'primary',
  size = 'medium',
  fullWidth = false,
  className = '',
  isActive: controlledActiveState,
  onToggleActive,
  ...props
}: ButtonProps) => {
  // Internal active state if not controlled externally
  const [internalActive, setInternalActive] = useState(false);
  const isActive = controlledActiveState ?? internalActive;

  const handleClick = () => {
    const newActiveState = !isActive;

    // Update internal state if uncontrolled
    if (controlledActiveState === undefined) {
      setInternalActive(newActiveState);
    }

    // Call external callback if provided
    onToggleActive?.(newActiveState);
  };

  return (
    <button
      className={`${styles.button} ${styles[variant]} ${styles[size]} ${
        fullWidth ? styles.fullWidth : ''
      } ${isActive ? styles.active : ''} ${className}`}
      onClick={handleClick}
      {...props}
    >
      {children}
    </button>
  );
};