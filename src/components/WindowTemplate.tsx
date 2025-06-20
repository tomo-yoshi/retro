import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import Window from './Window';
import { scrollbarClasses } from '@/styles/theme';

interface WindowTemplateProps {
  title: string;
  icon?: IconType;
  children: ReactNode;
  className?: string;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  showControls?: boolean;
}

export default function WindowTemplate({ 
  title, 
  icon, 
  children, 
  className,
  onMinimize,
  onMaximize,
  onClose,
  showControls = true
}: WindowTemplateProps) {
  return (
    <div className={`fixed top-1/5 left-1/2 -translate-x-1/2 w-full max-w-[95vw] p-4 sm:max-w-[600px] ${className || ''}`}>
      <Window 
        title={title} 
        icon={icon}
        onMinimize={onMinimize}
        onMaximize={onMaximize}
        onClose={onClose}
        showControls={showControls}
      >
        <div className={scrollbarClasses}>
          {children}
        </div>
      </Window>
    </div>
  );
} 