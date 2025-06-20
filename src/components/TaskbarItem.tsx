import { IconType } from 'react-icons';
import Link from 'next/link';
import { cn } from '@/utils/cn';
import { windows95Theme } from '@/styles/theme';

interface TaskbarItemProps {
  icon: IconType;
  label: string;
  href: string;
  isActive?: boolean;
}

export default function TaskbarItem({ icon: Icon, label, href, isActive }: TaskbarItemProps) {
  const baseClasses = cn(
    'px-2 py-1 flex items-center transition-colors',
    'border-2',
    windows95Theme.focus.ring,
    {
      [`bg-[#c0c0c0] ${windows95Theme.borders.sunken} cursor-not-allowed`]: isActive,
      [`bg-white ${windows95Theme.borders.sunken} ${windows95Theme.hover.raised}`]: !isActive
    }
  );

  const content = (
    <div className={baseClasses}>
      <Icon aria-hidden="true" />
      <span className="ml-1 text-[#222266]">{label}</span>
    </div>
  );

  if (isActive) {
    return (
      <div role="tab" aria-selected="true" aria-label={`${label} - current page`}>
        {content}
      </div>
    );
  }

  return (
    <Link 
      href={href} 
      className="no-underline"
      role="tab"
      aria-selected="false"
      aria-label={`Navigate to ${label}`}
    >
      {content}
    </Link>
  );
} 