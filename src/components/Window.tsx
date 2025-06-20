import { ReactNode } from 'react';
import { IconType } from 'react-icons';
import WindowControls from './WindowControls';
import { windows95Theme } from '@/styles/theme';

interface WindowProps {
  title: string;
  icon?: IconType;
  children: ReactNode;
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  showControls?: boolean;
}

export default function Window({ 
  title, 
  icon: Icon, 
  children, 
  onMinimize,
  onMaximize,
  onClose,
  showControls = true 
}: WindowProps) {
  return (
    <div className={`bg-[#c0c0c0] ${windows95Theme.borders.raised}`}>
      {/* Window Title Bar */}
      <div className="bg-[#000080] text-white p-1 flex justify-between items-center">
        <div className="flex items-center">
          {Icon && <Icon aria-hidden="true" />}
          <span className="text-sm ml-2">{title}</span>
        </div>
        <WindowControls 
          onMinimize={onMinimize}
          onMaximize={onMaximize}
          onClose={onClose}
          showControls={showControls}
        />
      </div>

      {/* Window Content */}
      <div className={`bg-[#f8f8f8] ${windows95Theme.borders.sunken}`}>
        {children}
      </div>
    </div>
  );
} 