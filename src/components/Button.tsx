import { cn } from '@/utils/cn';
import { ButtonHTMLAttributes } from 'react';

interface ButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'primary' | 'secondary' | 'window-control';
  size?: 'default' | 'window-control';
}

export function Button({ 
  className, 
  variant = 'primary', 
  size = 'default',
  children,
  ...props 
}: ButtonProps) {
  const baseClasses = cn(
    'transition',
    {
      // Default size styles
      'px-4 py-1': size === 'default',
      'w-6 h-6 flex items-center justify-center': size === 'window-control',
    },
    {
      // Primary variant (default)
      'bg-[#c0c0c0] text-[#222266]': variant === 'primary',
      'border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]': variant === 'primary',
    },
    {
      // Window control variant
      'bg-[#c0c0c0] text-black text-sm': variant === 'window-control',
      'border-2 border-t-white border-l-white border-r-[#808080] border-b-[#808080]': variant === 'window-control',
    }
  );

  const hoverClasses = cn(
    {
      'hover:bg-[#e0e0e0]': variant === 'primary',
      'hover:border-t-[#808080] hover:border-l-[#808080]': variant === 'primary',
      'hover:border-r-white hover:border-b-white': variant === 'primary',
      'hover:cursor-pointer': !props.disabled,
      'hover:cursor-not-allowed': props.disabled,
    }
  );

  const activeClasses = cn(
    {
      'active:bg-[#b0b0b0]': variant === 'primary',
      'active:border-t-[#808080] active:border-l-[#808080]': variant === 'primary',
      'active:border-r-white active:border-b-white': variant === 'primary',
      'active:cursor-pointer': !props.disabled,
      'active:cursor-not-allowed': props.disabled,
    }
  );

  return (
    <button
      className={cn(baseClasses, hoverClasses, activeClasses, className)}
      {...props}
    >
      {children}
    </button>
  );
}

export default Button;
