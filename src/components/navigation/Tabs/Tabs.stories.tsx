import React, { useState } from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Tabs, Tab } from './Tabs';

const meta = {
  title: 'Design System/Navigation/Tabs',
  component: Tabs,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tabs organize content into different sections and allow users to navigate between them.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'underline', 'contained', 'pills'],
      description: 'The visual style of the tabs',
    },
    orientation: {
      control: 'radio',
      options: ['horizontal', 'vertical'],
      description: 'The orientation of the tabs',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tabs',
    },
    fullWidth: {
      control: 'boolean',
      description: 'Whether tabs should fill the full width of the container',
    },
  },
} satisfies Meta<typeof Tabs>;

export default meta;
type Story = StoryObj<typeof meta>;

// Base default tabs
export const Default: Story = {
  args: {
    children: [],
  },
  render: () => (
    <Tabs>
      <Tab id="tab1" label="First Tab">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">First Tab Content</h3>
          <p>This is the content for the first tab.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Second Tab">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Second Tab Content</h3>
          <p>This is the content for the second tab.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Third Tab">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Third Tab Content</h3>
          <p>This is the content for the third tab.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Underline variant
export const UnderlineVariant: Story = {
  args: {
    children: [],
  },
  render: () => (
    <Tabs variant="underline">
      <Tab id="tab1" label="Dashboard">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Dashboard</h3>
          <p>Welcome to your dashboard overview.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Analytics">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Analytics</h3>
          <p>View your performance metrics and statistics.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Reports">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Reports</h3>
          <p>Download and manage your reports.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Contained variant
export const ContainedVariant: Story = {
  args: {
    children: [],
    variant: 'contained'
  },
  render: () => (
    <Tabs variant="contained">
      <Tab id="tab1" label="Account">
        <div>
          <h3 className="text-lg font-medium mb-2">Account Settings</h3>
          <p>Manage your account preferences and personal information.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Security">
        <div>
          <h3 className="text-lg font-medium mb-2">Security Settings</h3>
          <p>Update your password and security preferences.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Notifications">
        <div>
          <h3 className="text-lg font-medium mb-2">Notification Settings</h3>
          <p>Control your email and app notification preferences.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Pills variant
export const PillsVariant: Story = {
  args: {
    children: [],
    variant: 'pills'
  },
  render: () => (
    <Tabs variant="pills">
      <Tab id="tab1" label="Overview">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Project Overview</h3>
          <p>Get a high-level view of your project status.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Tasks">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Project Tasks</h3>
          <p>View and manage all project tasks.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Timeline">
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Project Timeline</h3>
          <p>View project milestones and deadlines.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Vertical orientation
export const VerticalOrientation: Story = {
  args: {
    children: [],
    orientation: 'vertical',
    variant: 'contained'
  },
  render: () => (
    <Tabs orientation="vertical" variant="contained" className="h-64">
      <Tab id="tab1" label="Personal Info">
        <div>
          <h3 className="text-lg font-medium mb-2">Personal Information</h3>
          <p>Update your name, email, and personal details.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Address">
        <div>
          <h3 className="text-lg font-medium mb-2">Address Information</h3>
          <p>Update your shipping and billing addresses.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Payment">
        <div>
          <h3 className="text-lg font-medium mb-2">Payment Methods</h3>
          <p>Manage your saved payment methods.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Different sizes
export const Sizes: Story = {
  args: {
    children: [],
    size: 'md'
  },
  render: () => (
    <div className="space-y-8">
      <div>
        <h3 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-300">Small Tabs</h3>
        <Tabs size="sm" variant="underline">
          <Tab id="small1" label="Tab 1">
            <div className="p-4">
              <p>Content for small Tab 1.</p>
            </div>
          </Tab>
          <Tab id="small2" label="Tab 2">
            <div className="p-4">
              <p>Content for small Tab 2.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-300">Medium Tabs (Default)</h3>
        <Tabs size="md" variant="underline">
          <Tab id="medium1" label="Tab 1">
            <div className="p-4">
              <p>Content for medium Tab 1.</p>
            </div>
          </Tab>
          <Tab id="medium2" label="Tab 2">
            <div className="p-4">
              <p>Content for medium Tab 2.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-300">Large Tabs</h3>
        <Tabs size="lg" variant="underline">
          <Tab id="large1" label="Tab 1">
            <div className="p-4">
              <p>Content for large Tab 1.</p>
            </div>
          </Tab>
          <Tab id="large2" label="Tab 2">
            <div className="p-4">
              <p>Content for large Tab 2.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    </div>
  ),
};

// With icons
export const WithIcons: Story = {
  args: {
    children: [],
    variant: 'pills'
  },
  render: () => (
    <Tabs variant="pills">
      <Tab 
        id="home" 
        label="Home"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M10.707 2.293a1 1 0 00-1.414 0l-7 7a1 1 0 001.414 1.414L4 10.414V17a1 1 0 001 1h2a1 1 0 001-1v-2a1 1 0 011-1h2a1 1 0 011 1v2a1 1 0 001 1h2a1 1 0 001-1v-6.586l.293.293a1 1 0 001.414-1.414l-7-7z" />
          </svg>
        }
      >
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Home</h3>
          <p>Welcome to the home page.</p>
        </div>
      </Tab>
      <Tab 
        id="profile" 
        label="Profile"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 9a3 3 0 100-6 3 3 0 000 6zm-7 9a7 7 0 1114 0H3z" clipRule="evenodd" />
          </svg>
        }
      >
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Profile</h3>
          <p>Manage your profile information.</p>
        </div>
      </Tab>
      <Tab 
        id="settings" 
        label="Settings"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M11.49 3.17c-.38-1.56-2.6-1.56-2.98 0a1.532 1.532 0 01-2.286.948c-1.372-.836-2.942.734-2.106 2.106.54.886.061 2.042-.947 2.287-1.561.379-1.561 2.6 0 2.978a1.532 1.532 0 01.947 2.287c-.836 1.372.734 2.942 2.106 2.106a1.532 1.532 0 012.287.947c.379 1.561 2.6 1.561 2.978 0a1.533 1.533 0 012.287-.947c1.372.836 2.942-.734 2.106-2.106a1.533 1.533 0 01.947-2.287c1.561-.379 1.561-2.6 0-2.978a1.532 1.532 0 01-.947-2.287c.836-1.372-.734-2.942-2.106-2.106a1.532 1.532 0 01-2.287-.947zM10 13a3 3 0 100-6 3 3 0 000 6z" clipRule="evenodd" />
          </svg>
        }
      >
        <div className="p-4">
          <h3 className="text-lg font-medium mb-2">Settings</h3>
          <p>Configure your application settings.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Full width tabs
export const FullWidth: Story = {
  args: {
    children: [],
    variant: 'contained',
    fullWidth: true
  },
  render: () => (
    <Tabs variant="contained" fullWidth>
      <Tab id="tab1" label="First">
        <div>
          <p>Content for the first tab stretched across full width.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Second">
        <div>
          <p>Content for the second tab stretched across full width.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Third">
        <div>
          <p>Content for the third tab stretched across full width.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// With disabled tab
export const WithDisabledTab: Story = {
  args: {
    children: [],
    variant: 'underline'
  },
  render: () => (
    <Tabs variant="underline">
      <Tab id="tab1" label="Active Tab">
        <div className="p-4">
          <p>This tab is active and can be interacted with.</p>
        </div>
      </Tab>
      <Tab id="tab2" label="Disabled Tab" disabled>
        <div className="p-4">
          <p>This content won't be visible as the tab is disabled.</p>
        </div>
      </Tab>
      <Tab id="tab3" label="Another Active Tab">
        <div className="p-4">
          <p>This tab is also active and can be interacted with.</p>
        </div>
      </Tab>
    </Tabs>
  ),
};

// Controlled tabs (with external state)
export const ControlledTabs: Story = {
  args: {
    children: [],
    activeTabId: 'tab2'
  },
  render: () => {
    // Use useState to manage the active tab
    const [activeTab, setActiveTab] = useState('tab2');
    
    return (
      <div>
        <div className="mb-4">
          <p className="mb-2 text-sm text-neutral-600 dark:text-neutral-400">
            Click the buttons below to programmatically change tabs:
          </p>
          <div className="flex space-x-2">
            <button
              className="px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
              onClick={() => setActiveTab('tab1')}
            >
              Activate Tab 1
            </button>
            <button
              className="px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
              onClick={() => setActiveTab('tab2')}
            >
              Activate Tab 2
            </button>
            <button
              className="px-3 py-1 bg-primary-500 text-white rounded hover:bg-primary-600"
              onClick={() => setActiveTab('tab3')}
            >
              Activate Tab 3
            </button>
          </div>
        </div>
        
        <Tabs 
          variant="contained" 
          activeTabId={activeTab} 
          onChange={(tabId) => {
            console.log(`Tab changed to: ${tabId}`);
            setActiveTab(tabId);
          }}
        >
          <Tab id="tab1" label="Tab 1">
            <div>
              <h3 className="text-lg font-medium mb-2">First Tab Content</h3>
              <p>This tab is externally controlled.</p>
            </div>
          </Tab>
          <Tab id="tab2" label="Tab 2">
            <div>
              <h3 className="text-lg font-medium mb-2">Second Tab Content</h3>
              <p>This tab is externally controlled and initially active.</p>
            </div>
          </Tab>
          <Tab id="tab3" label="Tab 3">
            <div>
              <h3 className="text-lg font-medium mb-2">Third Tab Content</h3>
              <p>This tab is externally controlled.</p>
            </div>
          </Tab>
        </Tabs>
      </div>
    );
  },
}; 