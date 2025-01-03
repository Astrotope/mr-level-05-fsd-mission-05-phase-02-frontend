import { SVGProps } from 'react';
import logoSvg from '@/assets/icons/logo.svg?raw';

const icons = {
  logo: logoSvg,
} as const;

interface IconProps extends Omit<SVGProps<SVGSVGElement>, 'ref'> {
  icon: keyof typeof icons;
}

export const Icon = ({ icon, width = 24, height = 24, ...props }: IconProps) => {
  const svgContent = icons[icon];

  if (!svgContent) {
    console.error(`Icon ${icon} not found`);
    return null;
  }

  // Parse the SVG string to modify its attributes
  const parser = new DOMParser();
  const doc = parser.parseFromString(svgContent, 'image/svg+xml');
  const svgElement = doc.querySelector('svg');

  if (svgElement) {
    // Set width and height
    svgElement.setAttribute('width', width.toString());
    svgElement.setAttribute('height', height.toString());
    // Ensure viewBox is preserved for proper scaling
    if (!svgElement.hasAttribute('viewBox') && svgElement.hasAttribute('width') && svgElement.hasAttribute('height')) {
      const originalWidth = svgElement.getAttribute('width')?.replace('px', '');
      const originalHeight = svgElement.getAttribute('height')?.replace('px', '');
      if (originalWidth && originalHeight) {
        svgElement.setAttribute('viewBox', `0 0 ${originalWidth} ${originalHeight}`);
      }
    }
  }

  return (
    <div
      {...props}
      dangerouslySetInnerHTML={{ __html: svgElement?.outerHTML || '' }}
      style={{
        display: 'inline-block',
        lineHeight: 0,
        ...props.style,
      }}
    />
  );
};
