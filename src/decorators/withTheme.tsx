import React, { useEffect } from 'react';
import { useGlobals } from '@storybook/preview-api';

// Create a proper component that uses the hooks
const ThemeWrapper = ({ children }: { children: React.ReactNode }) => {
  const [{ theme }] = useGlobals();
  
  // Update the HTML class when the theme changes
  useEffect(() => {
    // Default to light theme if none set
    const currentTheme = theme || 'light';
    
    // Apply the appropriate class to the html element
    if (currentTheme === 'dark') {
      document.documentElement.classList.add('dark');
    } else {
      document.documentElement.classList.remove('dark');
    }
  }, [theme]);
  
  return <>{children}</>;
};

// Storybook decorator that uses our component
export const withTheme = (StoryFn: Function) => {
  return (
    <ThemeWrapper>
      <StoryFn />
    </ThemeWrapper>
  );
}; 