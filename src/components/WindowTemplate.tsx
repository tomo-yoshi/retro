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
    <div className={`fixed top-1/4 left-1/2 -translate-x-1/2 w-full max-w-[95vw] p-4 sm:max-w-[600px] ${className}`}>
      <Window title={title} icon={icon}>
        <div className="max-h-[70vh] overflow-y-auto">
          {children}
        </div>
      </Window>
    </div>
  );
} 