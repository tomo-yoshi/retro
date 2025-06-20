'use client';

import { FaGithub, FaLinkedin, FaXTwitter } from 'react-icons/fa6';
import DesktopIcon from '@/components/DesktopIcon';
import { DesktopIconConfig } from '@/types';

const DESKTOP_ICONS: DesktopIconConfig[] = [
  {
    icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/tomo-yoshi"
  },
  {
    icon: FaLinkedin,
    label: "LinkedIn",
    href: "https://linkedin.com/in/tomohiro/"
  },
  {
    icon: FaXTwitter,
    label: "X",
    href: "https://x.com/tomoy_jp"
  },
];

export default function DesktopIcons() {
  return (
    <div className="grid grid-cols-3 gap-2 w-2/3 md:grid-cols-1 md:w-18">
      {DESKTOP_ICONS.map((iconConfig, index) => (
        <DesktopIcon 
          key={`${iconConfig.label}-${index}`} 
          {...iconConfig} 
        />
      ))}
    </div>
  );
}