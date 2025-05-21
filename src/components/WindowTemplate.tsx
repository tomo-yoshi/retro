import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import Window from './Window';

interface WindowTemplateProps {
  title: string;
  icon?: IconType;
  children: ReactNode;
  className?: string;
}

export default function WindowTemplate({ title, icon, children, className }: WindowTemplateProps) {
  return (
    <div className={`fixed top-1/5 left-1/2 -translate-x-1/2 w-full max-w-[95vw] p-4 sm:max-w-[600px] ${className}`}>
      <Window title={title} icon={icon}>
        <div className="max-h-[56vh] md:max-h-[70vh] overflow-y-auto p-4 [&::-webkit-scrollbar]:w-4 [&::-webkit-scrollbar-track]:bg-[#c0c0c0] [&::-webkit-scrollbar-track]:border-2 [&::-webkit-scrollbar-track]:border-[#dfdfdf] [&::-webkit-scrollbar-thumb]:bg-[#808080] [&::-webkit-scrollbar-thumb]:border-2 [&::-webkit-scrollbar-thumb]:border-[#dfdfdf] [&::-webkit-scrollbar-thumb]:hover:bg-[#606060]">
          {children}
        </div>
      </Window>
    </div>
  );
} 