import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import Tag from './Tag';

const meta = {
  title: 'Design System/Data Display/Tag',
  component: Tag,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'Tags are compact elements that represent an input, attribute, or action. They can be used for filtering, selections, and categorizing items.',
      },
    },
  },
  tags: ['autodocs'],
  argTypes: {
    variant: {
      control: 'select',
      options: ['default', 'primary', 'secondary', 'tertiary', 'success', 'info', 'warning', 'error'],
      description: 'The visual style variant of the tag',
    },
    size: {
      control: 'radio',
      options: ['sm', 'md', 'lg'],
      description: 'The size of the tag',
    },
    isPill: {
      control: 'boolean',
      description: 'Whether the tag should be pill-shaped (fully rounded)',
    },
    dismissible: {
      control: 'boolean',
      description: 'Whether the tag is dismissible (displays an X button)',
    },
    disabled: {
      control: 'boolean',
      description: 'Whether the tag is in a disabled state',
    },
  },
} satisfies Meta<typeof Tag>;

export default meta;
type Story = StoryObj<typeof meta>;

// Default Tag
export const Default: Story = {
  args: {
    children: 'Default Tag',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="tertiary">Tertiary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </div>
  ),
};

// All Variants
export const Variants: Story = {
  args: {
    children: 'Variant',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag variant="default">Default</Tag>
      <Tag variant="primary">Primary</Tag>
      <Tag variant="secondary">Secondary</Tag>
      <Tag variant="tertiary">Tertiary</Tag>
      <Tag variant="success">Success</Tag>
      <Tag variant="info">Info</Tag>
      <Tag variant="warning">Warning</Tag>
      <Tag variant="error">Error</Tag>
    </div>
  ),
};

// All Sizes
export const Sizes: Story = {
  args: {
    children: 'Size',
  },
  render: () => (
    <div className="flex flex-wrap items-center gap-2">
      <Tag size="sm">Small</Tag>
      <Tag size="md">Medium</Tag>
      <Tag size="lg">Large</Tag>
    </div>
  ),
};

// Pill Shape
export const Pill: Story = {
  args: {
    children: 'Pill',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag isPill>Regular Tag</Tag>
      <Tag isPill variant="primary">Primary Tag</Tag>
      <Tag isPill variant="success">Success Tag</Tag>
      <Tag isPill variant="error">Error Tag</Tag>
    </div>
  ),
};

// With Icons
export const WithIcons: Story = {
  args: {
    children: 'Icon',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag 
        variant="success"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
          </svg>
        }
      >
        Completed
      </Tag>
      <Tag 
        variant="info"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        }
      >
        Information
      </Tag>
      <Tag 
        variant="warning"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        }
      >
        Warning
      </Tag>
      <Tag 
        variant="error"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zM8.707 7.293a1 1 0 00-1.414 1.414L8.586 10l-1.293 1.293a1 1 0 101.414 1.414L10 11.414l1.293 1.293a1 1 0 001.414-1.414L11.414 10l1.293-1.293a1 1 0 00-1.414-1.414L10 8.586 8.707 7.293z" clipRule="evenodd" />
          </svg>
        }
        isPill
      >
        Error
      </Tag>
    </div>
  ),
};

// Interactive (Clickable) Tags
export const Interactive: Story = {
  args: {
    children: 'Interactive',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag 
        onClick={() => alert('Tag clicked!')}
        variant="primary"
      >
        Clickable Tag
      </Tag>
      <Tag 
        onClick={() => alert('Primary tag clicked!')}
        variant="secondary"
        isPill
      >
        Clickable Pill
      </Tag>
      <Tag 
        onClick={() => alert('Tag with icon clicked!')}
        variant="info"
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path d="M15 8a3 3 0 10-2.977-2.63l-4.94 2.47a3 3 0 100 4.319l4.94 2.47a3 3 0 10.895-1.789l-4.94-2.47a3.027 3.027 0 000-.74l4.94-2.47C13.456 7.68 14.19 8 15 8z" />
          </svg>
        }
      >
        Share
      </Tag>
      <Tag 
        onClick={() => alert('Cannot click when disabled')}
        variant="primary"
        disabled
      >
        Disabled
      </Tag>
    </div>
  ),
};

// Dismissible Tags
export const Dismissible: Story = {
  args: {
    children: 'Dismissible',
  },
  render: () => {
    const [tags, setTags] = React.useState([
      { id: 1, text: 'React', variant: 'primary' as const },
      { id: 2, text: 'TypeScript', variant: 'secondary' as const },
      { id: 3, text: 'TailwindCSS', variant: 'tertiary' as const },
      { id: 4, text: 'Storybook', variant: 'info' as const },
    ]);

    const handleDismiss = (id: number) => {
      setTags(tags.filter(tag => tag.id !== id));
    };

    return (
      <div>
        <div className="flex flex-wrap gap-2 mb-4">
          {tags.map(tag => (
            <Tag 
              key={tag.id}
              variant={tag.variant}
              dismissible
              onDismiss={() => handleDismiss(tag.id)}
              isPill
            >
              {tag.text}
            </Tag>
          ))}
        </div>
        {tags.length === 0 && (
          <div className="text-neutral-500 italic">All tags have been removed</div>
        )}
      </div>
    );
  },
};

// Disabled Tags
export const Disabled: Story = {
  args: {
    children: 'Disabled',
  },
  render: () => (
    <div className="flex flex-wrap gap-2">
      <Tag disabled>Disabled Tag</Tag>
      <Tag disabled variant="primary" isPill>Disabled Pill</Tag>
      <Tag 
        disabled 
        variant="info" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        }
      >
        Disabled with Icon
      </Tag>
      <Tag 
        disabled 
        dismissible 
        onDismiss={() => alert('Will not be called when disabled')}
        variant="error"
      >
        Disabled Dismissible
      </Tag>
    </div>
  ),
};

// Tag Groups (Common Use Case)
export const TagGroups: Story = {
  args: {
    children: 'Group',
  },
  render: () => (
    <div className="space-y-6">
      <div>
        <h3 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-300">Categories:</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary" isPill>Design Systems</Tag>
          <Tag variant="primary" isPill>Components</Tag>
          <Tag variant="primary" isPill>Frontend</Tag>
          <Tag variant="primary" isPill>UX</Tag>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-300">Status:</h3>
        <div className="flex flex-wrap gap-2">
          <Tag variant="success">Completed</Tag>
          <Tag variant="warning">In Progress</Tag>
          <Tag variant="info">Under Review</Tag>
          <Tag variant="error">Blocked</Tag>
          <Tag variant="default">Backlog</Tag>
        </div>
      </div>
      
      <div>
        <h3 className="text-sm font-medium mb-2 text-neutral-600 dark:text-neutral-300">Team Members:</h3>
        <div className="flex flex-wrap gap-2">
          <Tag 
            variant="tertiary"
            isPill
            icon={
              <span className="w-4 h-4 rounded-full bg-tertiary-400 flex items-center justify-center text-white text-xs font-bold">
                A
              </span>
            }
          >
            Alice
          </Tag>
          <Tag 
            variant="secondary"
            isPill
            icon={
              <span className="w-4 h-4 rounded-full bg-secondary-400 flex items-center justify-center text-white text-xs font-bold">
                B
              </span>
            }
          >
            Bob
          </Tag>
          <Tag 
            variant="primary"
            isPill
            icon={
              <span className="w-4 h-4 rounded-full bg-primary-400 flex items-center justify-center text-white text-xs font-bold">
                C
              </span>
            }
          >
            Charlie
          </Tag>
        </div>
      </div>
    </div>
  ),
}; 