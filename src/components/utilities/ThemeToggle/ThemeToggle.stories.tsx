import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import ThemeToggle from './ThemeToggle';

const meta = {
  title: 'Design System/Utilities/ThemeToggle',
  component: ThemeToggle,
  parameters: {
    layout: 'centered',
    docs: {
      description: {
        component: 'A theme toggle button for switching between light and dark themes.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof ThemeToggle>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default theme toggle
export const Default: Story = {
  args: {
    defaultTheme: 'light',
  },
};

// Initially dark theme
export const InitiallyDark: Story = {
  args: {
    defaultTheme: 'dark',
  },
};

// With callback
export const WithCallback: Story = {
  args: {
    defaultTheme: 'light',
    onThemeChange: (theme) => console.log(`Theme changed to: ${theme}`),
  },
};

// ThemeToggle with content to demonstrate the theme change effect
export const WithThemedContent: Story = {
  args: {
    defaultTheme: 'light',
  },
  render: (args) => (
    <div className="flex flex-col items-center space-y-4 p-6 bg-white dark:bg-neutral-900 rounded-lg transition-colors duration-300 min-w-80">
      <h3 className="text-neutral-900 dark:text-white text-lg font-medium">Theme Demo</h3>
      
      <div className="flex flex-col gap-4 w-full">
        <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded-md text-neutral-800 dark:text-neutral-200 transition-colors duration-300">
          This content will change with theme
        </div>
        
        <div className="flex space-x-2">
          <button className="px-4 py-2 bg-primary-500 text-white rounded-md hover:bg-primary-600 transition-colors">
            Primary Button
          </button>
          <button className="px-4 py-2 bg-secondary-500 text-white rounded-md hover:bg-secondary-600 transition-colors">
            Secondary Button
          </button>
        </div>
        
        <div className="flex items-center justify-between px-4 py-3 bg-neutral-50 dark:bg-neutral-800 rounded-md border border-neutral-200 dark:border-neutral-700 transition-colors">
          <span className="text-neutral-700 dark:text-neutral-300">Card example</span>
          <span className="text-xs px-2 py-1 bg-success-100 dark:bg-success-900 text-success-800 dark:text-success-100 rounded-full">
            Active
          </span>
        </div>
      </div>
      
      <div className="mt-4">
        <ThemeToggle {...args} />
      </div>
      
      <p className="text-sm text-neutral-500 dark:text-neutral-400 mt-4">
        Click the toggle button to switch themes
      </p>
    </div>
  ),
}; 