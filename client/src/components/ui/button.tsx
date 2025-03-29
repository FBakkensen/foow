import * as React from 'react';
import { cn } from '../../utilities/utils';

export interface ButtonProps
  extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: 'default' | 'outline' | 'ghost';
}

const Button = React.forwardRef<HTMLButtonElement, ButtonProps>(
  ({ className, variant = 'default', children, ...props }, ref) => {
    const handleKeyDown = (event: React.KeyboardEvent<HTMLButtonElement>) => {
      if ((event.key === 'Enter' || event.key === ' ') && props.onClick) {
        props.onClick(event as unknown as React.MouseEvent<HTMLButtonElement>);
      }
    };

    return (
      <button
        className={cn(
          'inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 disabled:opacity-50 disabled:pointer-events-none ring-offset-background',
          variant === 'default'
            ? 'bg-primary text-primary-foreground hover:bg-primary/90'
            : '',
          variant === 'outline'
            ? 'border border-input hover:bg-accent hover:text-accent-foreground'
            : '',
          variant === 'ghost'
            ? 'hover:bg-accent hover:text-accent-foreground'
            : '',
          className
        )}
        ref={ref}
        aria-label={props['aria-label'] || 'Button'}
        tabIndex={0}
        onKeyDown={handleKeyDown}
        {...props}
      >
        {children}
      </button>
    );
  }
);
Button.displayName = 'Button';

export { Button };
