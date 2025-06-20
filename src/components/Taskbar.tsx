'use client';

import { FolderIcon } from '@/app/icons';
import TaskbarItem from '@/components/TaskbarItem';
import { usePathname } from 'next/navigation';
import { NavigationItem } from '@/types';

const NAVIGATION_ITEMS: NavigationItem[] = [
  { icon: FolderIcon, label: "Home", href: "/" },
  { icon: FolderIcon, label: "About", href: "/about" },
  { icon: FolderIcon, label: "Skills", href: "/skills" },
  { icon: FolderIcon, label: "Contact", href: "/contact" },
];

export default function Taskbar() {
  const pathname = usePathname();
  
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 md:h-8 bg-[#c0c0c0] border-t-2 border-t-white flex items-center px-2">
      <div className='w-full'>
        <nav className="flex flex-1 items-center justify-center" role="navigation" aria-label="Main navigation">
          {NAVIGATION_ITEMS.map((item) => (
            <TaskbarItem 
              key={item.href}
              icon={item.icon} 
              label={item.label} 
              href={item.href} 
              isActive={pathname === item.href} 
            />
          ))}
        </nav>
      </div>
    </div>
  );
} 