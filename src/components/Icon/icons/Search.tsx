import { HTMLAttributes } from 'react';
import searchIcon from '@/assets/icons/search.svg?raw';

interface SearchProps extends HTMLAttributes<HTMLDivElement> {
  width?: string | number;
  height?: string | number;
}

export const Search = ({ width = '32px', height = '32px', style, ...props }: SearchProps) => {
  // Create a container for the SVG that will scale it
  const svgString = searchIcon.replace('<svg', '<svg width="100%" height="100%"');
  
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
