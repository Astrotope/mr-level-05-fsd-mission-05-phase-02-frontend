import { ReactNode, ElementType } from 'react';
import styles from './Container.module.scss';

type JustifyContent = 'start' | 'center' | 'end' | 'between' | 'around' | 'evenly';
type AlignItems = 'start' | 'center' | 'end' | 'stretch' | 'baseline';
type FlexDirection = 'row' | 'column' | 'row-reverse' | 'column-reverse';
type FlexWrap = 'nowrap' | 'wrap' | 'wrap-reverse';
type Gap = 'none' | 'xs' | 'sm' | 'md' | 'lg' | 'xl' | 'xxl';

export interface ContainerProps {
  children: ReactNode;
  justifyContent?: JustifyContent;
  alignItems?: AlignItems;
  direction?: FlexDirection;
  wrap?: FlexWrap;
  gap?: Gap;
  className?: string;
  maxWidth?: 'sm' | 'md' | 'lg' | 'xl' | 'xxl' | 'full';
  padding?: Gap;
  as?: ElementType;
}

export const Container = ({
  children,
  justifyContent = 'start',
  alignItems = 'stretch',
  direction = 'row',
  wrap = 'nowrap',
  gap = 'none',
  className = '',
  maxWidth,
  padding = 'none',
  as: Element = 'div',
}: ContainerProps) => {
  return (
    <Element
      className={`
        ${styles.container}
        ${styles[`justify-${justifyContent}`]}
        ${styles[`align-${alignItems}`]}
        ${styles[`direction-${direction}`]}
        ${styles[`wrap-${wrap}`]}
        ${styles[`gap-${gap}`]}
        ${maxWidth ? styles[`max-${maxWidth}`] : ''}
        ${styles[`padding-${padding}`]}
        ${className}
      `}
    >
      {children}
    </Element>
  );
};
