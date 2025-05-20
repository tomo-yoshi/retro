import { IconType } from 'react-icons';
import Link from 'next/link';
import { cn } from '@/utils/cn';

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
    {
      'bg-[#c0c0c0] border-t-[#808080] border-l-[#808080] border-r-white border-b-white cursor-not-allowed': isActive,
      'bg-white border-t-[#808080] border-l-[#808080] border-r-white border-b-white hover:border-t-white hover:border-l-white hover:border-r-[#808080] hover:border-b-[#808080]': !isActive
    }
  );

  const content = (
    <div className={baseClasses}>
      <Icon />
      <span className="ml-1 text-[#222266]">{label}</span>
    </div>
  );

  if (isActive) {
    return content;
  }

  return (
    <Link href={href} className="no-underline">
      {content}
    </Link>
  );
} 