import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';
import { Accordion, AccordionItem } from '../../data-display/Accordion';
import { Tag } from '../../data-display/Tag';

const meta = {
  title: 'Design System/Examples/ThemeDemo',
  parameters: {
    layout: 'padded',
    docs: {
      description: {
        component: 'A demonstration of the design system components',
      },
    },
  },
} satisfies Meta;

export default meta;
type Story = StoryObj<typeof meta>;

export const ComponentShowcase: Story = {
  args: {},
  render: () => (
    <div className="p-6 bg-white rounded-lg transition-colors duration-300 max-w-3xl">
      <div className="flex justify-between items-center mb-6">
        <h2 className="text-xl font-semibold text-neutral-900">Design System Component Demo</h2>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-neutral-800">Tags</h3>
        <div className="flex flex-wrap gap-2 mb-4">
          <Tag variant="primary">Primary</Tag>
          <Tag variant="secondary">Secondary</Tag>
          <Tag variant="success">Success</Tag>
          <Tag variant="warning">Warning</Tag>
          <Tag variant="error">Error</Tag>
          <Tag variant="info">Info</Tag>
        </div>
        <div className="flex flex-wrap gap-2">
          <Tag variant="primary" isPill>Primary Pill</Tag>
          <Tag variant="info" isPill dismissible onDismiss={() => {}}>Dismissible</Tag>
          <Tag 
            variant="success" 
            icon={
              <svg xmlns="http://www.w3.org/2000/svg" className="h-3.5 w-3.5" viewBox="0 0 20 20" fill="currentColor">
                <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
              </svg>
            }
          >
            With Icon
          </Tag>
        </div>
      </div>
      
      <div className="mb-8">
        <h3 className="text-lg font-medium mb-3 text-neutral-800">Accordions</h3>
        <Accordion className="mb-4">
          <AccordionItem title="What is a design system?">
            <p className="text-neutral-700">
              A design system is a collection of reusable components, guided by clear standards, that can be assembled to build any number of applications.
            </p>
          </AccordionItem>
          <AccordionItem title="Why use component libraries?">
            <p className="text-neutral-700">
              Component libraries provide consistent UIs, improve developer productivity, and create better user experiences across applications.
            </p>
          </AccordionItem>
          <AccordionItem title="How does this system work?">
            <div className="space-y-2 text-neutral-700">
              <p>
                This design system includes:
              </p>
              <ul className="list-disc pl-5">
                <li>CSS variables for our color tokens</li>
                <li>Tailwind utilities for styling</li>
                <li>React components for building UIs</li>
              </ul>
            </div>
          </AccordionItem>
        </Accordion>
      </div>
      
      <div className="grid grid-cols-1 md:grid-cols-2 gap-4 mb-8">
        <div className="p-4 bg-white rounded-lg border border-neutral-200 shadow-sm transition-colors">
          <h3 className="font-medium text-neutral-900 mb-2">Standard Card</h3>
          <p className="text-neutral-600 text-sm">
            Cards provide a container for content and actions related to a single subject.
          </p>
        </div>
        <div className="p-4 bg-primary-50 rounded-lg border border-primary-200 shadow-sm transition-colors">
          <h3 className="font-medium text-primary-900 mb-2">Primary Accent Card</h3>
          <p className="text-primary-700 text-sm">
            Themed components maintain brand colors while ensuring proper contrast.
          </p>
        </div>
      </div>
    </div>
  ),
}; 