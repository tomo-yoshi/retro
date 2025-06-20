'use client';

import { IconType } from 'react-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';
import { windows95Theme } from '@/styles/theme';

interface DesktopIconProps {
  icon: IconType;
  label: string;
  href: string;
}

export default function DesktopIcon({ icon: Icon, label, href }: DesktopIconProps) {
  const handleKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'Enter' || e.key === ' ') {
      e.preventDefault();
      window.open(href, '_blank', 'noopener,noreferrer');
    }
  };

  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className={`flex flex-col items-center cursor-pointer hover:bg-[#000080] hover:bg-opacity-20 p-2 rounded gap-1 ${windows95Theme.focus.ring}`}
      onKeyDown={handleKeyDown}
      tabIndex={0}
      aria-label={`Open ${label} in new tab`}
    >
      <Icon className="w-8 h-8 text-white" aria-hidden="true" />
      <span className="text-white text-xs text-center flex items-center gap-1">
        {label}
        <FaExternalLinkAlt className="w-2 h-2" aria-hidden="true" />
      </span>
    </a>
  );
} 