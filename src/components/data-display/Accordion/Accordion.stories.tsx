import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from './Accordion';

const meta = {
  title: 'Design System/Data Display/Accordion',
  component: Accordion,
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'An accordion component that allows users to expand and collapse content sections.',
      },
    },
  },
  tags: ['autodocs'],
} satisfies Meta<typeof Accordion>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {
  args: {
    children: [],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="What is an accordion?">
        <p>An accordion is a vertically stacked set of interactive headings that each reveal a section of content.</p>
      </AccordionItem>
      <AccordionItem title="When to use">
        <p>Use accordions to organize related information in a limited space. They are useful for FAQ sections, product details, or any content that can be logically divided into discrete chunks.</p>
      </AccordionItem>
      <AccordionItem title="Accessibility">
        <p>This accordion component follows WAI-ARIA Authoring Practices with proper ARIA attributes and keyboard navigation support.</p>
        <ul className="list-disc list-inside mt-2">
          <li>Use <code>Tab</code> to navigate between accordion items</li>
          <li>Use <code>Space</code> or <code>Enter</code> to expand/collapse the focused item</li>
          <li>Each accordion header is properly associated with its content panel</li>
        </ul>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithIcons: Story = {
  args: {
    children: [],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem 
        title="Information" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-info-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M18 10a8 8 0 11-16 0 8 8 0 0116 0zm-7-4a1 1 0 11-2 0 1 1 0 012 0zM9 9a1 1 0 000 2v3a1 1 0 001 1h1a1 1 0 100-2v-3a1 1 0 00-1-1H9z" clipRule="evenodd" />
          </svg>
        }
      >
        <p>This accordion item has an information icon.</p>
      </AccordionItem>
      <AccordionItem 
        title="Warning" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-warning-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M8.257 3.099c.765-1.36 2.722-1.36 3.486 0l5.58 9.92c.75 1.334-.213 2.98-1.742 2.98H4.42c-1.53 0-2.493-1.646-1.743-2.98l5.58-9.92zM11 13a1 1 0 11-2 0 1 1 0 012 0zm-1-8a1 1 0 00-1 1v3a1 1 0 002 0V6a1 1 0 00-1-1z" clipRule="evenodd" />
          </svg>
        }
      >
        <p>This accordion item has a warning icon.</p>
      </AccordionItem>
      <AccordionItem 
        title="Success" 
        icon={
          <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-success-500" viewBox="0 0 20 20" fill="currentColor">
            <path fillRule="evenodd" d="M10 18a8 8 0 100-16 8 8 0 000 16zm3.707-9.293a1 1 0 00-1.414-1.414L9 10.586 7.707 9.293a1 1 0 00-1.414 1.414l2 2a1 1 0 001.414 0l4-4z" clipRule="evenodd" />
          </svg>
        }
      >
        <p>This accordion item has a success icon.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const InitiallyExpanded: Story = {
  args: {
    children: [],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="First item (collapsed by default)">
        <p>This item starts collapsed.</p>
      </AccordionItem>
      <AccordionItem title="Second item (expanded by default)" initiallyExpanded>
        <p>This item starts expanded.</p>
        <p className="mt-2">You can control which items start expanded by using the <code>initiallyExpanded</code> prop.</p>
      </AccordionItem>
      <AccordionItem title="Third item (collapsed by default)">
        <p>This item starts collapsed.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithDisabledItem: Story = {
  args: {
    children: [],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Enabled item">
        <p>This item is enabled and can be interacted with.</p>
      </AccordionItem>
      <AccordionItem title="Disabled item" disabled>
        <p>This item is disabled and cannot be expanded or collapsed.</p>
      </AccordionItem>
      <AccordionItem title="Another enabled item">
        <p>This item is also enabled.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const CustomStyling: Story = {
  args: {
    children: [],
    className: "border border-primary-300 rounded-lg p-1 bg-primary-50"
  },
  render: (args) => (
    <Accordion className="border border-primary-300 rounded-lg p-1 bg-primary-50 dark:bg-primary-900 dark:border-primary-700" {...args}>
      <AccordionItem 
        title="Custom styled accordion" 
        className="border-primary-300 dark:border-primary-700"
      >
        <p>This accordion has custom styling applied to both the container and individual items.</p>
        <p className="mt-2">You can customize the appearance using the <code>className</code> prop on both the <code>Accordion</code> and <code>AccordionItem</code> components.</p>
      </AccordionItem>
      <AccordionItem 
        title="Another custom item" 
        className="border-primary-300 dark:border-primary-700"
      >
        <p>More customized content here.</p>
      </AccordionItem>
    </Accordion>
  ),
};

export const WithRichContent: Story = {
  args: {
    children: [],
  },
  render: (args) => (
    <Accordion {...args}>
      <AccordionItem title="Rich content example">
        <div>
          <h4 className="text-lg font-medium mb-2">Nested heading</h4>
          <p className="mb-2">Accordions can contain rich, complex content including:</p>
          <ul className="list-disc list-inside mb-4">
            <li>Lists</li>
            <li>Images</li>
            <li>Interactive elements</li>
          </ul>
          <div className="p-3 bg-info-50 dark:bg-info-900 rounded text-info-800 dark:text-info-100 mb-4">
            You can even include alert boxes or other complex UI components.
          </div>
          <div className="flex justify-end">
            <button 
              className="px-4 py-2 bg-primary-500 hover:bg-primary-600 text-white rounded"
              onClick={() => alert('Button in accordion clicked!')}
            >
              Interactive Button
            </button>
          </div>
        </div>
      </AccordionItem>
    </Accordion>
  ),
}; 