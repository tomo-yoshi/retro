import { windows95Theme } from '@/styles/theme';

interface WindowControlsProps {
  onMinimize?: () => void;
  onMaximize?: () => void;
  onClose?: () => void;
  showControls?: boolean;
}

export default function WindowControls({ 
  onMinimize, 
  onMaximize, 
  onClose, 
  showControls = true 
}: WindowControlsProps) {
  if (!showControls) return null;

  const buttonBaseClass = `bg-[#c0c0c0] ${windows95Theme.borders.raised} w-6 h-6 flex items-center justify-center text-black ${windows95Theme.hover.raised} ${windows95Theme.focus.ring} transition-colors`;

  return (
    <div className="flex">
      <button 
        onClick={onMinimize}
        className={buttonBaseClass}
        aria-label="Minimize window"
        tabIndex={0}
        type="button"
      >
        <span aria-hidden="true">_</span>
      </button>
      <button 
        onClick={onMaximize}
        className={`${buttonBaseClass} ml-1`}
        aria-label="Maximize window"
        tabIndex={0}
        type="button"
      >
        <span aria-hidden="true">□</span>
      </button>
      <button 
        onClick={onClose}
        className={`${buttonBaseClass} ml-1`}
        aria-label="Close window"
        tabIndex={0}
        type="button"
      >
        <span aria-hidden="true">×</span>
      </button>
    </div>
  );
}