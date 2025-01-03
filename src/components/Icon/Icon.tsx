import { HTMLAttributes } from 'react';
import { Logo } from './icons/Logo';
import { Search } from './icons/Search';

const icons = {
  logo: Logo,
  search: Search,
} as const;

interface IconProps extends HTMLAttributes<HTMLDivElement> {
  icon: keyof typeof icons;
  width?: string | number;
  height?: string | number;
}

export const Icon = ({ icon, width = '32px', height = '32px', ...props }: IconProps) => {
  const IconComponent = icons[icon];
  return <IconComponent width={width} height={height} {...props} />;
};
