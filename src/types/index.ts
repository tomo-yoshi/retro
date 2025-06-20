import { IconType } from 'react-icons';

export interface WindowConfig {
  title: string;
  icon?: IconType;
  className?: string;
}

export interface NavigationItem {
  icon: IconType;
  label: string;
  href: string;
}

export interface DesktopIconConfig {
  icon: IconType;
  label: string;
  href: string;
}