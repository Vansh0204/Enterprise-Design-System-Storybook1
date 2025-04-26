import React, { useState, useEffect, ReactNode } from 'react';

export interface TabProps {
  /**
   * Unique identifier for the tab
   */
  id: string;
  /**
   * The tab label content
   */
  label: ReactNode;
  /**
   * The content to display when tab is selected
   */
  children: ReactNode;
  /**
   * Whether the tab is disabled
   */
  disabled?: boolean;
  /**
   * Optional icon to display with the tab label
   */
  icon?: ReactNode;
  /**
   * Custom CSS class for the tab
   */
  className?: string;
}

export type TabsVariant = 'default' | 'underline' | 'contained' | 'pills';
export type TabsOrientation = 'horizontal' | 'vertical';
export type TabsSize = 'sm' | 'md' | 'lg';

export interface TabsProps {
  /**
   * Array of Tab components
   */
  children: React.ReactElement<TabProps>[];
  /**
   * ID of the initially selected tab
   */
  defaultTabId?: string;
  /**
   * ID of the controlled active tab
   */
  activeTabId?: string;
  /**
   * Function called when a tab is selected
   */
  onChange?: (tabId: string) => void;
  /**
   * Visual styling variant
   */
  variant?: TabsVariant;
  /**
   * Horizontal or vertical orientation
   */
  orientation?: TabsOrientation;
  /**
   * Size of the tabs
   */
  size?: TabsSize;
  /**
   * Custom CSS class for the tabs container
   */
  className?: string;
  /**
   * Whether tabs should stretch to fill the container width
   */
  fullWidth?: boolean;
  /**
   * ID for the tabs component for accessibility
   */
  id?: string;
}

const Tab: React.FC<TabProps> = ({ 
  id, 
  label, 
  disabled,
  icon,
  children, 
  className 
}) => {
  // This component is just a placeholder - all rendering happens in Tabs
  return <>{children}</>;
};

const Tabs: React.FC<TabsProps> = ({
  children,
  defaultTabId,
  activeTabId: controlledActiveTabId,
  onChange,
  variant = 'default',
  orientation = 'horizontal',
  size = 'md',
  className = '',
  fullWidth = false,
  id = 'tabs',
}) => {
  // Setup controlled or uncontrolled state for the active tab
  const isControlled = controlledActiveTabId !== undefined;
  const [activeTabId, setActiveTabId] = useState<string>(() => {
    // If controlled, use the provided ID, otherwise use default or first tab
    if (isControlled) return controlledActiveTabId;
    if (defaultTabId) return defaultTabId;
    return children?.[0]?.props?.id || '';
  });
  
  // Update internal state when controlled value changes
  useEffect(() => {
    if (isControlled && controlledActiveTabId) {
      setActiveTabId(controlledActiveTabId);
    }
  }, [isControlled, controlledActiveTabId]);

  // Handle tab selection
  const handleTabClick = (tabId: string, disabled?: boolean) => {
    if (disabled) return;
    
    if (!isControlled) {
      setActiveTabId(tabId);
    }
    
    if (onChange) {
      onChange(tabId);
    }
  };

  // Tabs styles based on variant, orientation, and size
  const getContainerClasses = () => {
    const base = 'flex';
    const orientationClasses = orientation === 'horizontal' 
      ? 'flex-row' 
      : 'flex-col';
    
    return `${base} ${orientationClasses} ${className}`;
  };

  const getTabListClasses = () => {
    let classes = 'flex border-neutral-200 dark:border-neutral-700 ';
    
    // Orientation
    if (orientation === 'horizontal') {
      classes += 'flex-row ';
      // Border style based on variant
      if (variant === 'underline') {
        classes += 'border-b ';
      } else if (variant === 'contained') {
        classes += 'border rounded-t-lg bg-neutral-50 dark:bg-neutral-800 ';
      }
    } else {
      classes += 'flex-col ';
      // Border style based on variant
      if (variant === 'underline') {
        classes += 'border-r ';
      } else if (variant === 'contained') {
        classes += 'border rounded-l-lg bg-neutral-50 dark:bg-neutral-800 ';
      }
    }
    
    if (fullWidth && orientation === 'horizontal') {
      classes += 'w-full ';
    }
    
    return classes;
  };

  const getTabClasses = (isActive: boolean, disabled?: boolean) => {
    let classes = '';
    
    // Common hover and focus styles
    let interactiveClasses = disabled
      ? 'cursor-not-allowed opacity-50 '
      : 'cursor-pointer hover:text-primary-700 dark:hover:text-primary-300 focus:outline-none focus:ring-2 focus:ring-primary-500 focus:ring-inset ';
    
    // Size classes
    const sizeClasses = {
      sm: 'py-1.5 px-3 text-sm ',
      md: 'py-2 px-4 ',
      lg: 'py-3 px-5 text-lg ',
    };
    
    // Horizontal or vertical specific styles
    const orientationSpecific = orientation === 'horizontal'
      ? 'inline-flex items-center '
      : 'flex items-center ';
    
    // Base classes
    classes += `${orientationSpecific} ${sizeClasses[size]} ${interactiveClasses} `;
    
    // Full width on horizontal
    if (fullWidth && orientation === 'horizontal') {
      classes += 'flex-1 justify-center ';
    }
    
    // Variant specific styles
    switch (variant) {
      case 'underline':
        classes += isActive
          ? 'text-primary-700 dark:text-primary-300 font-medium border-primary-500 '
          : 'text-neutral-600 dark:text-neutral-400 border-transparent ';
        
        if (orientation === 'horizontal') {
          classes += 'border-b-2 -mb-px ';
        } else {
          classes += 'border-r-2 -mr-px ';
        }
        break;
      
      case 'contained':
        classes += isActive
          ? 'bg-white dark:bg-neutral-900 text-primary-700 dark:text-primary-300 font-medium '
          : 'bg-neutral-50 dark:bg-neutral-800 text-neutral-600 dark:text-neutral-400 ';
        
        if (orientation === 'horizontal') {
          classes += isActive ? 'border-b-0 ' : '';
          classes += 'border-b border-l border-r first:border-l last:border-r ';
          classes += isActive ? 'rounded-t-lg ' : '';
        } else {
          classes += isActive ? 'border-r-0 ' : '';
          classes += 'border-r border-t border-b first:border-t last:border-b ';
          classes += isActive ? 'rounded-l-lg ' : '';
        }
        break;
      
      case 'pills':
        classes += isActive
          ? 'bg-primary-100 dark:bg-primary-900 text-primary-800 dark:text-primary-200 font-medium rounded-full '
          : 'text-neutral-700 dark:text-neutral-300 hover:bg-neutral-100 dark:hover:bg-neutral-800 rounded-full ';
        break;
      
      default: // Default tabs
        classes += isActive
          ? 'text-primary-700 dark:text-primary-300 font-medium '
          : 'text-neutral-600 dark:text-neutral-400 ';
        break;
    }
    
    return classes;
  };
  
  const getTabPanelClasses = () => {
    let classes = '';
    
    if (variant === 'contained') {
      classes += 'border border-t-0 rounded-b-lg p-4 bg-white dark:bg-neutral-900 ';
      if (orientation === 'vertical') {
        classes = 'border border-l-0 rounded-r-lg p-4 bg-white dark:bg-neutral-900 ';
      }
    } else {
      classes += 'pt-4 ';
    }
    
    return classes;
  };

  // Find the active tab
  const activeTab = React.Children.toArray(children).find(
    (child) => React.isValidElement(child) && (child as React.ReactElement<TabProps>).props.id === activeTabId
  ) as React.ReactElement<TabProps> | undefined;

  return (
    <div className={getContainerClasses()} data-testid="tabs">
      <div
        className={getTabListClasses()}
        role="tablist"
        aria-orientation={orientation}
      >
        {React.Children.map(children, (child) => {
          if (!React.isValidElement(child)) return null;
          
          const { id: tabId, label, disabled, icon } = child.props as TabProps;
          const isActive = tabId === activeTabId;
          
          return (
            <button
              id={`${id}-tab-${tabId}`}
              className={getTabClasses(isActive, disabled)}
              role="tab"
              aria-selected={isActive}
              aria-controls={`${id}-panel-${tabId}`}
              aria-disabled={disabled}
              tabIndex={isActive ? 0 : -1}
              onClick={() => handleTabClick(tabId, disabled)}
              data-testid={`tab-${tabId}`}
            >
              {icon && <span className="mr-2">{icon}</span>}
              {label}
            </button>
          );
        })}
      </div>
      
      <div className={orientation === 'vertical' ? 'flex-1' : 'w-full'}>
        {activeTab && (
          <div
            id={`${id}-panel-${activeTabId}`}
            role="tabpanel"
            aria-labelledby={`${id}-tab-${activeTabId}`}
            className={getTabPanelClasses()}
            data-testid={`tab-panel-${activeTabId}`}
          >
            {activeTab.props.children}
          </div>
        )}
      </div>
    </div>
  );
};

// Type declaration for the Tabs component with the Tab static property
interface TabsComponent extends React.FC<TabsProps> {
  Tab: React.FC<TabProps>;
}

// Cast Tabs as TabsComponent
const TabsWithStatic = Tabs as TabsComponent;
TabsWithStatic.Tab = Tab;

export { TabsWithStatic as Tabs, Tab };
export default TabsWithStatic; 