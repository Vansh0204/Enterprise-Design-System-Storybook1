import React, { useState, ReactNode } from 'react';

export interface AccordionItemProps {
  /**
   * Title of the accordion item
   */
  title: string;
  /**
   * Content to be displayed when accordion is expanded
   */
  children: ReactNode;
  /**
   * Whether the accordion item is initially expanded
   */
  initiallyExpanded?: boolean;
  /**
   * Whether the accordion item is disabled
   */
  disabled?: boolean;
  /**
   * Optional icon to display beside the title
   */
  icon?: ReactNode;
  /**
   * Custom CSS class for accordion item
   */
  className?: string;
  /**
   * Custom ID for the accordion item
   */
  id?: string;
}

export const AccordionItem: React.FC<AccordionItemProps> = ({
  title,
  children,
  initiallyExpanded = false,
  disabled = false,
  icon,
  className = '',
  id,
}) => {
  const [isExpanded, setIsExpanded] = useState(initiallyExpanded);

  const handleToggle = () => {
    if (!disabled) {
      setIsExpanded(!isExpanded);
    }
  };

  // Generate IDs for accessibility
  const headingId = id ? `${id}-heading` : `accordion-heading-${title.replace(/\s+/g, '-').toLowerCase()}`;
  const contentId = id ? `${id}-content` : `accordion-content-${title.replace(/\s+/g, '-').toLowerCase()}`;

  return (
    <div 
      className={`border border-neutral-200 dark:border-neutral-700 rounded-md overflow-hidden mb-2 ${className}`}
      data-testid="accordion-item"
    >
      <h3>
        <button
          type="button"
          className={`
            w-full flex items-center justify-between p-4 text-left
            ${disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer'}
            hover:bg-neutral-50 dark:hover:bg-neutral-800
            focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset
            ${isExpanded ? 'bg-neutral-50 dark:bg-neutral-800 font-medium' : 'bg-white dark:bg-neutral-900'}
          `}
          onClick={handleToggle}
          aria-expanded={isExpanded}
          aria-controls={contentId}
          id={headingId}
          disabled={disabled}
          aria-disabled={disabled}
        >
          <span className="flex items-center">
            {icon && <span className="mr-2">{icon}</span>}
            {title}
          </span>
          <svg 
            className={`w-5 h-5 transition-transform ${isExpanded ? 'transform rotate-180' : ''}`} 
            xmlns="http://www.w3.org/2000/svg" 
            viewBox="0 0 20 20" 
            fill="currentColor"
            aria-hidden="true"
          >
            <path 
              fillRule="evenodd" 
              d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
              clipRule="evenodd" 
            />
          </svg>
        </button>
      </h3>
      <div
        id={contentId}
        role="region"
        aria-labelledby={headingId}
        className={`
          transition-all duration-200 ease-in-out overflow-hidden 
          ${isExpanded ? 'max-h-screen opacity-100' : 'max-h-0 opacity-0'}
        `}
      >
        <div className="p-4 border-t border-neutral-200 dark:border-neutral-700 bg-white dark:bg-neutral-900">
          {children}
        </div>
      </div>
    </div>
  );
};

export interface AccordionProps {
  /**
   * Child AccordionItem components
   */
  children: ReactNode;
  /**
   * Whether only one accordion item can be expanded at a time
   */
  allowMultiple?: boolean;
  /**
   * Custom CSS class for accordion container
   */
  className?: string;
}

export const Accordion: React.FC<AccordionProps> = ({ 
  children, 
  allowMultiple = false,
  className = '',
}) => {
  return (
    <div 
      className={`w-full ${className}`} 
      role="tablist"
      data-testid="accordion"
    >
      {children}
    </div>
  );
};

export default Accordion; 