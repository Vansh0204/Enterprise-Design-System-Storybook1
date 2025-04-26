import React, { useState, useEffect } from 'react';

export interface ThemeToggleProps {
  /**
   * Default theme ('light' or 'dark')
   */
  defaultTheme?: 'light' | 'dark';
  /**
   * Optional callback when theme changes
   */
  onThemeChange?: (theme: 'light' | 'dark') => void;
  /**
   * Custom CSS class
   */
  className?: string;
}

const ThemeToggle: React.FC<ThemeToggleProps> = ({
  defaultTheme = 'light',
  onThemeChange,
  className = '',
}) => {
  const [theme, setTheme] = useState<'light' | 'dark'>(defaultTheme);

  // Apply theme to document
  useEffect(() => {
    if (theme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
    
    // Call callback if provided
    onThemeChange?.(theme);
  }, [theme, onThemeChange]);

  const toggleTheme = () => {
    setTheme(prev => prev === 'light' ? 'dark' : 'light');
  };

  return (
    <button
      type="button"
      onClick={toggleTheme}
      className={`
        p-2 rounded-full 
        bg-neutral-100 dark:bg-neutral-800
        text-neutral-700 dark:text-neutral-300
        hover:bg-neutral-200 dark:hover:bg-neutral-700
        focus:outline-none focus:ring-2 focus:ring-primary-500
        transition-colors
        ${className}
      `}
      aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} theme`}
    >
      {theme === 'light' ? (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path d="M17.293 13.293A8 8 0 016.707 2.707a8.001 8.001 0 1010.586 10.586z" />
        </svg>
      ) : (
        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
          <path fillRule="evenodd" d="M10 2a1 1 0 011 1v1a1 1 0 11-2 0V3a1 1 0 011-1zm4 8a4 4 0 11-8 0 4 4 0 018 0zm-.464 4.95l.707.707a1 1 0 001.414-1.414l-.707-.707a1 1 0 00-1.414 1.414zm2.12-10.607a1 1 0 010 1.414l-.706.707a1 1 0 11-1.414-1.414l.707-.707a1 1 0 011.414 0zM17 11a1 1 0 100-2h-1a1 1 0 100 2h1zm-7 4a1 1 0 011 1v1a1 1 0 11-2 0v-1a1 1 0 011-1zM5.05 6.464A1 1 0 106.465 5.05l-.708-.707a1 1 0 00-1.414 1.414l.707.707zm1.414 8.486l-.707.707a1 1 0 01-1.414-1.414l.707-.707a1 1 0 011.414 1.414zM4 11a1 1 0 100-2H3a1 1 0 000 2h1z" clipRule="evenodd" />
        </svg>
      )}
    </button>
  );
};

export default ThemeToggle; 