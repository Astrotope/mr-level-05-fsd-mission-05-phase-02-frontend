import { HTMLAttributes } from 'react';
import logo from '@/assets/icons/logo.svg?raw';

interface LogoProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export const Logo = ({ width = '32px', height = '32px', style, ...props }: LogoProps) => {
  // Create a container for the SVG that will scale it
  const svgString = logo.replace('<svg', '<svg width="100%" height="100%"');
  
  return (
    <div
      dangerouslySetInnerHTML={{ __html: svgString }}
      style={{ 
        width, 
        height,
        display: 'inline-block',
        ...style 
      }}
      {...props}
    />
  );
};
