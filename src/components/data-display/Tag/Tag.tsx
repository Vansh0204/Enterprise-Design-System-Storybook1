import React, { ReactNode } from 'react';

// Available variants
export type TagVariant = 
  | 'default' 
  | 'primary' 
  | 'secondary' 
  | 'tertiary' 
  | 'success' 
  | 'info' 
  | 'warning' 
  | 'error';

// Available sizes
export type TagSize = 'sm' | 'md' | 'lg';

export interface TagProps {
  /**
   * The content to display inside the tag
   */
  children: ReactNode;
  /**
   * The visual style variant of the tag
   */
  variant?: TagVariant;
  /**
   * The size of the tag
   */
  size?: TagSize;
  /**
   * Whether the tag should be pill-shaped (fully rounded)
   */
  isPill?: boolean;
  /**
   * Optional icon to display at the start of the tag
   */
  icon?: ReactNode;
  /**
   * Whether the tag is in a disabled state
   */
  disabled?: boolean;
  /**
   * Additional CSS classes to apply
   */
  className?: string;
  /**
   * Optional click handler
   */
  onClick?: () => void;
  /**
   * Whether the tag is dismissible (displays an X button)
   */
  dismissible?: boolean;
  /**
   * Function called when the dismiss button is clicked
   */
  onDismiss?: () => void;
  /**
   * For accessibility labeling when the tag content is an icon or non-descriptive
   */
  ariaLabel?: string;
  /**
   * Element ID
   */
  id?: string;
}

const Tag: React.FC<TagProps> = ({
  children,
  variant = 'default',
  size = 'md',
  isPill = false,
  icon,
  disabled = false,
  className = '',
  onClick,
  dismissible = false,
  onDismiss,
  ariaLabel,
  id,
}) => {
  // Variant styling maps
  const variantClasses = {
    default: 'bg-neutral-100 text-neutral-800 dark:bg-neutral-700 dark:text-neutral-200',
    primary: 'bg-primary-100 text-primary-800 dark:bg-primary-800 dark:text-primary-100',
    secondary: 'bg-secondary-100 text-secondary-800 dark:bg-secondary-800 dark:text-secondary-100',
    tertiary: 'bg-tertiary-100 text-tertiary-800 dark:bg-tertiary-800 dark:text-tertiary-100',
    success: 'bg-success-100 text-success-800 dark:bg-success-800 dark:text-success-100',
    info: 'bg-info-100 text-info-800 dark:bg-info-800 dark:text-info-100',
    warning: 'bg-warning-100 text-warning-800 dark:bg-warning-800 dark:text-warning-100',
    error: 'bg-error-100 text-error-800 dark:bg-error-800 dark:text-error-100',
  };

  // Size classes
  const sizeClasses = {
    sm: 'text-xs py-0.5 px-2',
    md: 'text-sm py-1 px-2.5',
    lg: 'text-base py-1.5 px-3',
  };

  // Shape classes
  const shapeClass = isPill ? 'rounded-full' : 'rounded';

  // Interactive classes
  const isInteractive = onClick && !disabled;
  const interactiveClasses = isInteractive 
    ? 'cursor-pointer hover:bg-opacity-80 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-opacity-50' 
    : '';
  
  // Focus ring color based on variant
  const focusRingClasses = {
    default: 'focus:ring-neutral-500',
    primary: 'focus:ring-primary-500',
    secondary: 'focus:ring-secondary-500',
    tertiary: 'focus:ring-tertiary-500',
    success: 'focus:ring-success-500',
    info: 'focus:ring-info-500',
    warning: 'focus:ring-warning-500',
    error: 'focus:ring-error-500',
  };

  // Handler for main tag click
  const handleClick = () => {
    if (isInteractive) {
      onClick?.();
    }
  };

  // Handler for dismiss button click
  const handleDismiss = (e: React.MouseEvent) => {
    e.stopPropagation(); // Prevent triggering the tag's onClick
    onDismiss?.();
  };

  return (
    <span
      id={id}
      className={`
        inline-flex items-center justify-center 
        ${sizeClasses[size]}
        ${shapeClass}
        ${variantClasses[variant]}
        ${isInteractive ? interactiveClasses : ''}
        ${isInteractive ? focusRingClasses[variant] : ''}
        ${disabled ? 'opacity-50 cursor-not-allowed' : ''}
        transition-colors duration-150
        ${className}
      `}
      onClick={handleClick}
      role={isInteractive ? 'button' : undefined}
      tabIndex={isInteractive && !disabled ? 0 : undefined}
      aria-disabled={disabled}
      aria-label={ariaLabel}
      data-testid="tag"
    >
      {icon && (
        <span className="mr-1.5 inline-flex">
          {icon}
        </span>
      )}
      
      {children}
      
      {dismissible && onDismiss && (
        <button
          type="button"
          className={`
            ml-1.5 -mr-1 p-0.5 rounded-full 
            hover:bg-black hover:bg-opacity-10 dark:hover:bg-white dark:hover:bg-opacity-10
            focus:outline-none focus:ring-2 focus:ring-offset-1 ${focusRingClasses[variant]}
          `}
          onClick={handleDismiss}
          disabled={disabled}
          aria-label="Dismiss"
        >
          <svg 
            xmlns="http://www.w3.org/2000/svg" 
            className={`
              ${size === 'sm' ? 'h-3 w-3' : size === 'md' ? 'h-3.5 w-3.5' : 'h-4 w-4'}
            `}
            viewBox="0 0 20 20" 
            fill="currentColor"
          >
            <path 
              fillRule="evenodd" 
              d="M4.293 4.293a1 1 0 011.414 0L10 8.586l4.293-4.293a1 1 0 111.414 1.414L11.414 10l4.293 4.293a1 1 0 01-1.414 1.414L10 11.414l-4.293 4.293a1 1 0 01-1.414-1.414L8.586 10 4.293 5.707a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      )}
    </span>
  );
};

export default Tag; 