'use client';

// import { StartIcon, FolderIcon } from '@/app/icons';
import { FolderIcon } from '@/app/icons';

// import Time from '@/components/Time';
import TaskbarItem from '@/components/TaskbarItem';
import { usePathname } from 'next/navigation';

export default function Taskbar() {
  const pathname = usePathname();
  return (
    <div className="fixed bottom-0 left-0 right-0 h-12 md:h-8 bg-[#c0c0c0] border-t-2 border-t-white flex items-center px-2">
      {/* <button className="bg-[#000080] text-white px-2 py-1 flex items-center">
        <StartIcon />
        <span className="ml-1">Menu</span>
      </button> */}
      <div className='w-full'>
        <div className="flex flex-1 items-center justify-center">
          <TaskbarItem icon={FolderIcon} label="Home" href="/" isActive={pathname === "/"} />
          <TaskbarItem icon={FolderIcon} label="About" href="/about" isActive={pathname === "/about"} />
          <TaskbarItem icon={FolderIcon} label="Skills" href="/skills" isActive={pathname === "/skills"} />
          <TaskbarItem icon={FolderIcon} label="Contact" href="/contact" isActive={pathname === "/contact"} />
        </div>
      </div>
      {/* <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] px-2 py-1 text-[#222266]">
        <Time />
      </div> */}
    </div>
  );
} 