import React from 'react';
import { cn } from '../../utils/cn';

type BadgeProps = {
  variant?: 'default' | 'primary' | 'secondary' | 'success' | 'warning' | 'error';
  children: React.ReactNode;
  className?: string;
};

const Badge = ({ 
  variant = 'default', 
  children, 
  className 
}: BadgeProps) => {
  const variantStyles = {
    default: 'bg-gray-100 text-gray-800',
    primary: 'bg-primary/10 text-primary-dark',
    secondary: 'bg-secondary/10 text-secondary-dark',
    success: 'bg-success/10 text-success-dark',
    warning: 'bg-warning/10 text-warning-dark',
    error: 'bg-error/10 text-error-dark',
  };

  return (
    <span
      className={cn(
        'inline-flex items-center px-2.5 py-0.5 rounded-full text-xs font-medium',
        variantStyles[variant],
        className
      )}
    >
      {children}
    </span>
  );
};

export default Badge;