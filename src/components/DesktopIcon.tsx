import { IconType } from 'react-icons';
import { FaExternalLinkAlt } from 'react-icons/fa';

interface DesktopIconProps {
  icon: IconType;
  label: string;
  href: string;
}

export default function DesktopIcon({ icon: Icon, label, href }: DesktopIconProps) {
  return (
    <a
      href={href}
      target="_blank"
      rel="noopener noreferrer"
      className="flex flex-col items-center cursor-pointer hover:bg-[#000080] hover:bg-opacity-20 p-2 rounded gap-1"
    >
      <Icon className="w-8 h-8 text-white" />
      <span className="text-white text-xs text-center flex items-center gap-1">
        {label}
        <FaExternalLinkAlt className="w-2 h-2" />
      </span>
    </a>
  );
} 