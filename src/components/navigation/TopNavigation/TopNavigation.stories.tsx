import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import TopNavigation from './TopNavigation';
import { Tag } from '../../data-display/Tag';

const meta = {
  title: 'Design System/Navigation/TopNavigation',
  component: TopNavigation,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'A top navigation bar component that provides navigation options and responsiveness for mobile and desktop views.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['light', 'dark', 'primary', 'transparent'],
      description: 'The visual style of the navigation',
    },
    isSticky: {
      control: 'boolean',
      description: 'Whether the navigation sticks to the top when scrolling',
    },
    hasShadow: {
      control: 'boolean',
      description: 'Whether the navigation has a shadow',
    },
    mobileBreakpoint: {
      control: 'select',
      options: ['sm', 'md', 'lg', 'xl'],
      description: 'The breakpoint at which the mobile menu is used',
    },
  },
} satisfies Meta<typeof TopNavigation>;

export default meta;
type Story = StoryObj<typeof meta>;

// Logo component for all examples
const Logo = () => (
  <div className="flex items-center">
    <svg 
      className="h-8 w-8 text-primary-500" 
      xmlns="http://www.w3.org/2000/svg" 
      viewBox="0 0 20 20" 
      fill="currentColor"
    >
      <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
    </svg>
    <span className="ml-2 text-xl font-bold">Design System</span>
  </div>
);

// Default TopNavigation
export const Default: Story = {
  args: {
    brand: <Logo />,
    items: [
      { id: 'home', label: 'Home', href: '#', isActive: true },
      { id: 'products', label: 'Products', href: '#' },
      { id: 'services', label: 'Services', href: '#' },
      { id: 'about', label: 'About', href: '#' },
      { id: 'contact', label: 'Contact', href: '#' },
    ],
  },
};

// With different variants
export const Variants: Story = {
  args: {
    brand: <div>Brand</div>,
    items: [
      { id: 'home', label: 'Home', href: '#', isActive: true },
      { id: 'products', label: 'Products', href: '#' },
      { id: 'about', label: 'About', href: '#' },
    ]
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="p-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">Light Variant (Default)</h3>
        <TopNavigation 
          variant="light"
          brand={<Logo />}
          items={[
            { id: 'home', label: 'Home', href: '#', isActive: true },
            { id: 'products', label: 'Products', href: '#' },
            { id: 'about', label: 'About', href: '#' },
          ]}
        />
      </div>
      
      <div>
        <h3 className="p-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">Dark Variant</h3>
        <TopNavigation 
          variant="dark"
          brand={
            <div className="flex items-center">
              <svg 
                className="h-8 w-8 text-primary-300" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">Design System</span>
            </div>
          }
          items={[
            { id: 'home', label: 'Home', href: '#', isActive: true },
            { id: 'products', label: 'Products', href: '#' },
            { id: 'about', label: 'About', href: '#' },
          ]}
        />
      </div>
      
      <div>
        <h3 className="p-2 text-sm font-medium text-neutral-600 dark:text-neutral-300">Primary Variant</h3>
        <TopNavigation 
          variant="primary"
          brand={
            <div className="flex items-center">
              <svg 
                className="h-8 w-8 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">Design System</span>
            </div>
          }
          items={[
            { id: 'home', label: 'Home', href: '#', isActive: true },
            { id: 'products', label: 'Products', href: '#' },
            { id: 'about', label: 'About', href: '#' },
          ]}
        />
      </div>
      
      <div className="bg-gradient-to-r from-primary-500 to-tertiary-500 p-10">
        <h3 className="p-2 text-sm font-medium text-white">Transparent Variant (on gradient background)</h3>
        <TopNavigation 
          variant="transparent"
          hasShadow={false}
          brand={
            <div className="flex items-center">
              <svg 
                className="h-8 w-8 text-white" 
                xmlns="http://www.w3.org/2000/svg" 
                viewBox="0 0 20 20" 
                fill="currentColor"
              >
                <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM4.332 8.027a6.012 6.012 0 011.912-2.706C6.512 5.73 6.974 6 7.5 6A1.5 1.5 0 019 7.5V8a2 2 0 004 0 2 2 0 011.523-1.943A5.977 5.977 0 0116 10c0 .34-.028.675-.083 1H15a2 2 0 00-2 2v2.197A5.973 5.973 0 0110 16v-2a2 2 0 00-2-2 2 2 0 01-2-2 2 2 0 00-1.668-1.973z" clipRule="evenodd" />
              </svg>
              <span className="ml-2 text-xl font-bold text-white">Design System</span>
            </div>
          }
          items={[
            { id: 'home', label: 'Home', href: '#', isActive: true },
            { id: 'products', label: 'Products', href: '#' },
            { id: 'about', label: 'About', href: '#' },
          ]}
        />
      </div>
    </div>
  ),
};

// With submenu items
export const WithSubmenus: Story = {
  args: {
    brand: <Logo />,
    items: [
      { id: 'home', label: 'Home', href: '#', isActive: true },
      { 
        id: 'products', 
        label: 'Products', 
        subItems: [
          { id: 'product-1', label: 'Product 1', href: '#' },
          { id: 'product-2', label: 'Product 2', href: '#' },
          { id: 'product-3', label: 'Product 3', href: '#' },
        ] 
      },
      { 
        id: 'services', 
        label: 'Services', 
        subItems: [
          { id: 'service-1', label: 'Consulting', href: '#' },
          { id: 'service-2', label: 'Development', href: '#' },
          { id: 'service-3', label: 'Support', href: '#', isActive: true },
        ] 
      },
      { id: 'about', label: 'About', href: '#' },
      { id: 'contact', label: 'Contact', href: '#' },
    ],
  },
};

// With icons
export const WithIcons: Story = {
  args: {
    brand: <Logo />,
    variant: 'light',
    items: [
      { 
        id: 'home', 
        label: 'Home', 
        href: '#', 
        isActive: true,
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        )
      },
      { 
        id: 'dashboard', 
        label: 'Dashboard', 
        href: '#',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M2 10a8 8 0 018-8v8h8a8 8 0 11-16 0z" />
            <path d="M12 2.252A8.014 8.014 0 0117.748 8H12V2.252z" />
          </svg>
        )
      },
      { 
        id: 'users', 
        label: 'Users', 
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M9 6a3 3 0 11-6 0 3 3 0 016 0zM17 6a3 3 0 11-6 0 3 3 0 016 0zM12.93 17c.046-.327.07-.66.07-1a6.97 6.97 0 00-1.5-4.33A5 5 0 0119 16v1h-6.07zM6 11a5 5 0 015 5v1H1v-1a5 5 0 015-5z" />
          </svg>
        ),
        subItems: [
          { id: 'users-admin', label: 'Administrators', href: '#' },
          { id: 'users-editors', label: 'Editors', href: '#' },
          { id: 'users-viewers', label: 'Viewers', href: '#' },
        ]
      },
      { 
        id: 'settings', 
        label: 'Settings', 
        href: '#',
        icon: (
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        )
      },
    ],
  },
};

// With actions on the right
export const WithActions: Story = {
  args: {
    brand: <Logo />,
    items: [
      { id: 'home', label: 'Home', href: '#', isActive: true },
      { id: 'features', label: 'Features', href: '#' },
      { id: 'pricing', label: 'Pricing', href: '#' },
      { id: 'about', label: 'About', href: '#' },
    ],
    actions: (
      <div className="flex items-center space-x-3">
        <Tag variant="success" size="sm">
          New
        </Tag>
        <button className="px-3 py-1.5 text-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded">
          Sign in
        </button>
        <button className="px-3 py-1.5 text-sm bg-primary-500 hover:bg-primary-600 text-white rounded">
          Get Started
        </button>
      </div>
    ),
  },
};

// With disabled items
export const WithDisabledItems: Story = {
  args: {
    brand: <Logo />,
    items: [
      { id: 'home', label: 'Home', href: '#', isActive: true },
      { id: 'products', label: 'Products', href: '#' },
      { id: 'premium', label: 'Premium Features', href: '#', disabled: true },
      { 
        id: 'services', 
        label: 'Services', 
        subItems: [
          { id: 'service-1', label: 'Consulting', href: '#' },
          { id: 'service-2', label: 'Development', href: '#' },
          { id: 'service-3', label: 'Support', href: '#', disabled: true },
        ] 
      },
      { id: 'about', label: 'About', href: '#' },
    ],
  },
};

// With programmatic navigation (onClick handlers)
export const WithProgrammaticNavigation: Story = {
  args: {
    brand: <div>Brand</div>,
    items: [
      { 
        id: 'home', 
        label: 'Home', 
        onClick: () => console.log('Home clicked'),
        isActive: true 
      },
      { 
        id: 'dashboard', 
        label: 'Dashboard', 
        onClick: () => console.log('Dashboard clicked') 
      }
    ]
  },
  render: () => {
    const handleNavigation = (destination: string) => {
      alert(`Navigating to ${destination}`);
    };
    
    return (
      <TopNavigation
        brand={<Logo />}
        items={[
          { 
            id: 'home', 
            label: 'Home', 
            onClick: () => handleNavigation('Home'),
            isActive: true 
          },
          { 
            id: 'dashboard', 
            label: 'Dashboard', 
            onClick: () => handleNavigation('Dashboard') 
          },
          { 
            id: 'reports', 
            label: 'Reports', 
            subItems: [
              { 
                id: 'yearly', 
                label: 'Yearly Reports', 
                onClick: () => handleNavigation('Yearly Reports') 
              },
              { 
                id: 'monthly', 
                label: 'Monthly Reports', 
                onClick: () => handleNavigation('Monthly Reports') 
              },
            ] 
          },
          { 
            id: 'settings', 
            label: 'Settings', 
            onClick: () => handleNavigation('Settings') 
          },
        ]}
        actions={
          <button 
            onClick={() => alert('Logging out...')}
            className="px-3 py-1.5 text-sm bg-neutral-100 hover:bg-neutral-200 dark:bg-neutral-700 dark:hover:bg-neutral-600 rounded"
          >
            Logout
          </button>
        }
      />
    );
  },
}; 