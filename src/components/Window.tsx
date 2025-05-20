import { ReactNode } from 'react';
import { IconType } from 'react-icons';

interface WindowProps {
  title: string;
  icon?: IconType;
  children: ReactNode;
}

export default function Window({ title, icon: Icon, children }: WindowProps) {
  return (
    <div className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]">
      {/* Window Title Bar */}
      <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
        <div className="flex items-center">
          {Icon && <Icon />}
          <span className="text-sm ml-2">{title}</span>
        </div>
        <div className="flex">
          <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] w-6 h-6 flex items-center justify-center text-black hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-white hover:border-b-white transition-colors">
            <span>_</span>
          </button>
          <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] w-6 h-6 flex items-center justify-center text-black hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-white hover:border-b-white transition-colors ml-1">
            <span>□</span>
          </button>
          <button className="bg-[#c0c0c0] border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080] w-6 h-6 flex items-center justify-center text-black hover:border-t-[#808080] hover:border-l-[#808080] hover:border-r-white hover:border-b-white transition-colors ml-1">
            <span>×</span>
          </button>
        </div>
      </div>

      {/* Window Content */}
      <div className="bg-[#f8f8f8] border-2 border-t-[#808080] border-l-[#808080] border-r-white border-b-white p-4">
        {children}
      </div>
    </div>
  );
} 