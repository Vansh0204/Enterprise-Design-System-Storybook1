import React, { ReactNode, useState } from 'react';

// Types for menu items
export interface TopNavigationItem {
  /**
   * Unique identifier for the item
   */
  id: string;
  /**
   * The label text for the menu item
   */
  label: string;
  /**
   * Optional icon for the menu item
   */
  icon?: ReactNode;
  /**
   * URL for the menu item (if it's a link)
   */
  href?: string;
  /**
   * Whether the item is currently active
   */
  isActive?: boolean;
  /**
   * Whether the item is disabled
   */
  disabled?: boolean;
  /**
   * Submenu items (if any)
   */
  subItems?: TopNavigationItem[];
  /**
   * Function to call when item is clicked (alternative to href)
   */
  onClick?: () => void;
}

export interface TopNavigationProps {
  /**
   * The brand/logo element to display
   */
  brand: ReactNode;
  /**
   * Array of navigation items
   */
  items: TopNavigationItem[];
  /**
   * Actions to display on the right side
   */
  actions?: ReactNode;
  /**
   * Whether the navigation is sticky
   */
  isSticky?: boolean;
  /**
   * Additional CSS classes
   */
  className?: string;
  /**
   * Background variant
   */
  variant?: 'light' | 'dark' | 'primary' | 'transparent';
  /**
   * Mobile menu breakpoint
   */
  mobileBreakpoint?: 'sm' | 'md' | 'lg' | 'xl';
  /**
   * Whether the component has a drop shadow
   */
  hasShadow?: boolean;
}

const TopNavigation: React.FC<TopNavigationProps> = ({
  brand,
  items,
  actions,
  isSticky = false,
  className = '',
  variant = 'light',
  mobileBreakpoint = 'md',
  hasShadow = true,
}) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [openSubmenuId, setOpenSubmenuId] = useState<string | null>(null);

  // Toggle mobile menu
  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
    // Close any open submenus when toggling the menu
    setOpenSubmenuId(null);
  };

  // Toggle submenu
  const toggleSubmenu = (id: string) => {
    setOpenSubmenuId(openSubmenuId === id ? null : id);
  };

  // Handle click on a menu item
  const handleItemClick = (item: TopNavigationItem) => {
    if (item.disabled) return;
    
    if (item.onClick) {
      item.onClick();
    }
    
    // If it has subitems and we're on mobile, toggle the submenu
    if (item.subItems && item.subItems.length > 0) {
      toggleSubmenu(item.id);
    } else {
      // Close the mobile menu when clicking a regular item
      setIsMobileMenuOpen(false);
    }
  };

  // Get variant classes
  const getVariantClasses = () => {
    switch (variant) {
      case 'dark':
        return 'bg-neutral-800 text-white';
      case 'primary':
        return 'bg-primary-600 text-white';
      case 'transparent':
        return 'bg-transparent text-neutral-800 dark:text-white';
      case 'light':
      default:
        return 'bg-white text-neutral-800 dark:bg-neutral-900 dark:text-white';
    }
  };

  // Base container classes
  const containerClasses = `
    ${getVariantClasses()}
    ${isSticky ? 'sticky top-0 z-50' : ''}
    ${hasShadow ? 'shadow-md' : ''}
    ${className}
  `;

  // Mobile breakpoint classes
  const mobileBreakpointMap = {
    sm: 'sm:flex-row sm:items-center',
    md: 'md:flex-row md:items-center',
    lg: 'lg:flex-row lg:items-center',
    xl: 'xl:flex-row xl:items-center',
  };

  const mobileMenuBreakpoints = {
    sm: 'sm:hidden',
    md: 'md:hidden',
    lg: 'lg:hidden',
    xl: 'xl:hidden',
  };

  const desktopMenuBreakpoints = {
    sm: 'hidden sm:flex',
    md: 'hidden md:flex',
    lg: 'hidden lg:flex',
    xl: 'hidden xl:flex',
  };

  return (
    <nav className={containerClasses} aria-label="Main Navigation">
      <div className="px-4 sm:px-6 lg:px-8">
        <div className={`flex flex-col ${mobileBreakpointMap[mobileBreakpoint]} justify-between`}>
          {/* Top bar with logo and mobile menu toggle */}
          <div className="flex justify-between items-center h-16">
            {/* Brand/Logo */}
            <div className="flex-shrink-0">
              {brand}
            </div>

            {/* Mobile menu button */}
            <div className={`${mobileMenuBreakpoints[mobileBreakpoint]}`}>
              <button
                type="button"
                className={`
                  inline-flex items-center justify-center p-2 rounded-md
                  ${variant === 'light' ? 'text-neutral-500 hover:text-neutral-800 hover:bg-neutral-100' : ''}
                  ${variant === 'dark' ? 'text-neutral-200 hover:text-white hover:bg-neutral-700' : ''}
                  ${variant === 'primary' ? 'text-primary-100 hover:text-white hover:bg-primary-500' : ''}
                  ${variant === 'transparent' ? 'text-neutral-600 hover:text-neutral-900 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:text-white dark:hover:bg-neutral-700' : ''}
                  focus:outline-none focus:ring-2 focus:ring-inset focus:ring-primary-500
                `}
                aria-expanded={isMobileMenuOpen}
                onClick={toggleMobileMenu}
                aria-label="Toggle mobile menu"
              >
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? 'hidden' : 'block'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M4 6h16M4 12h16M4 18h16"
                  />
                </svg>
                <svg
                  className={`h-6 w-6 ${isMobileMenuOpen ? 'block' : 'hidden'}`}
                  xmlns="http://www.w3.org/2000/svg"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                  aria-hidden="true"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M6 18L18 6M6 6l12 12"
                  />
                </svg>
              </button>
            </div>

            {/* Desktop navigation items */}
            <div className={`${desktopMenuBreakpoints[mobileBreakpoint]} items-center space-x-4`}>
              {items.map((item) => (
                <React.Fragment key={item.id}>
                  {item.subItems && item.subItems.length > 0 ? (
                    <div className="relative group">
                      <button
                        onClick={() => handleItemClick(item)}
                        className={`
                          flex items-center px-3 py-2 rounded-md text-sm font-medium
                          ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                          ${item.isActive 
                            ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                            : `${variant === 'light' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}
                               ${variant === 'dark' ? 'hover:bg-neutral-700' : ''}
                               ${variant === 'primary' ? 'hover:bg-primary-500' : ''}
                               ${variant === 'transparent' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}`
                          }
                        `}
                        aria-haspopup="true"
                        aria-expanded={openSubmenuId === item.id}
                      >
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.label}
                        <svg 
                          className="ml-2 h-4 w-4"
                          xmlns="http://www.w3.org/2000/svg" 
                          viewBox="0 0 20 20" 
                          fill="currentColor"
                        >
                          <path 
                            fillRule="evenodd" 
                            d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                            clipRule="evenodd" 
                          />
                        </svg>
                      </button>
                      <div 
                        className={`
                          absolute left-0 mt-2 w-48 rounded-md shadow-lg bg-white dark:bg-neutral-800 ring-1 ring-black ring-opacity-5
                          transform origin-top-left transition
                          ${openSubmenuId === item.id ? 'opacity-100 scale-100 pointer-events-auto' : 'opacity-0 scale-95 pointer-events-none group-hover:opacity-100 group-hover:scale-100 group-hover:pointer-events-auto'}
                          z-10
                        `}
                        role="menu"
                        aria-orientation="vertical"
                        aria-labelledby={`menu-button-${item.id}`}
                      >
                        <div className="py-1" role="none">
                          {item.subItems.map((subItem) => (
                            <a
                              key={subItem.id}
                              href={subItem.href}
                              onClick={(e) => {
                                if (subItem.onClick) {
                                  e.preventDefault();
                                  subItem.onClick();
                                }
                              }}
                              className={`
                                block px-4 py-2 text-sm
                                ${subItem.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                                ${subItem.isActive 
                                  ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                                  : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700'}
                              `}
                              role="menuitem"
                              tabIndex={-1}
                              aria-disabled={subItem.disabled}
                            >
                              {subItem.icon && <span className="mr-2 inline-block">{subItem.icon}</span>}
                              {subItem.label}
                            </a>
                          ))}
                        </div>
                      </div>
                    </div>
                  ) : (
                    <a
                      href={item.href}
                      onClick={(e) => {
                        if (item.onClick) {
                          e.preventDefault();
                          handleItemClick(item);
                        }
                      }}
                      className={`
                        flex items-center px-3 py-2 rounded-md text-sm font-medium
                        ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        ${item.isActive 
                          ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                          : `${variant === 'light' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}
                             ${variant === 'dark' ? 'hover:bg-neutral-700' : ''}
                             ${variant === 'primary' ? 'hover:bg-primary-500' : ''}
                             ${variant === 'transparent' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}`
                        }
                      `}
                      aria-disabled={item.disabled}
                    >
                      {item.icon && <span className="mr-2">{item.icon}</span>}
                      {item.label}
                    </a>
                  )}
                </React.Fragment>
              ))}

              {/* Actions */}
              {actions && (
                <div className="ml-2">
                  {actions}
                </div>
              )}
            </div>
          </div>

          {/* Mobile menu */}
          <div
            className={`
              ${mobileMenuBreakpoints[mobileBreakpoint]}
              ${isMobileMenuOpen ? 'block' : 'hidden'}
              pt-2 pb-4 space-y-1
            `}
          >
            {items.map((item) => (
              <div key={item.id}>
                {item.subItems && item.subItems.length > 0 ? (
                  <>
                    <button
                      onClick={() => handleItemClick(item)}
                      className={`
                        w-full flex items-center justify-between px-4 py-2 text-base font-medium rounded-md
                        ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                        ${item.isActive 
                          ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                          : `${variant === 'light' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}
                             ${variant === 'dark' ? 'hover:bg-neutral-700' : ''}
                             ${variant === 'primary' ? 'hover:bg-primary-500' : ''}
                             ${variant === 'transparent' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}`
                        }
                      `}
                      aria-haspopup="true"
                      aria-expanded={openSubmenuId === item.id}
                    >
                      <span className="flex items-center">
                        {item.icon && <span className="mr-2">{item.icon}</span>}
                        {item.label}
                      </span>
                      <svg 
                        className={`h-4 w-4 transform transition-transform duration-200 ${openSubmenuId === item.id ? 'rotate-180' : ''}`}
                        xmlns="http://www.w3.org/2000/svg" 
                        viewBox="0 0 20 20" 
                        fill="currentColor"
                      >
                        <path 
                          fillRule="evenodd" 
                          d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" 
                          clipRule="evenodd" 
                        />
                      </svg>
                    </button>
                    {openSubmenuId === item.id && (
                      <div className="pl-4 pr-2 mt-1 space-y-1">
                        {item.subItems.map((subItem) => (
                          <a
                            key={subItem.id}
                            href={subItem.href}
                            onClick={(e) => {
                              if (subItem.onClick) {
                                e.preventDefault();
                                subItem.onClick();
                              }
                              setIsMobileMenuOpen(false);
                            }}
                            className={`
                              block py-2 pl-4 pr-2 text-base font-medium rounded-md
                              ${subItem.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                              ${subItem.isActive 
                                ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                                : 'text-neutral-700 hover:bg-neutral-100 dark:text-neutral-200 dark:hover:bg-neutral-700'}
                            `}
                            aria-disabled={subItem.disabled}
                          >
                            {subItem.icon && <span className="mr-2 inline-block">{subItem.icon}</span>}
                            {subItem.label}
                          </a>
                        ))}
                      </div>
                    )}
                  </>
                ) : (
                  <a
                    href={item.href}
                    onClick={(e) => {
                      if (item.onClick) {
                        e.preventDefault();
                        handleItemClick(item);
                      }
                    }}
                    className={`
                      block px-4 py-2 text-base font-medium rounded-md
                      ${item.disabled ? 'opacity-50 cursor-not-allowed' : 'cursor-pointer'}
                      ${item.isActive 
                        ? 'bg-primary-100 text-primary-900 dark:bg-primary-900 dark:text-primary-100' 
                        : `${variant === 'light' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}
                           ${variant === 'dark' ? 'hover:bg-neutral-700' : ''}
                           ${variant === 'primary' ? 'hover:bg-primary-500' : ''}
                           ${variant === 'transparent' ? 'hover:bg-neutral-100 dark:hover:bg-neutral-800' : ''}`
                      }
                    `}
                    aria-disabled={item.disabled}
                  >
                    {item.icon && <span className="mr-2 inline-block">{item.icon}</span>}
                    {item.label}
                  </a>
                )}
              </div>
            ))}

            {/* Mobile actions */}
            {actions && (
              <div className="px-4 py-2">
                {actions}
              </div>
            )}
          </div>
        </div>
      </div>
    </nav>
  );
};

export default TopNavigation; 