import React from 'react';
import type { Meta, StoryObj } from '@storybook/react';

interface ColorSwatchProps {
  colorName: string;
  colorValue: string;
  textClass?: string;
}

const ColorSwatch: React.FC<ColorSwatchProps> = ({ 
  colorName, 
  colorValue,
  textClass = 'text-white'
}) => (
  <div className="mb-2">
    <div 
      className={`h-16 rounded flex items-end p-2 ${textClass}`}
      style={{ backgroundColor: colorValue }}
    >
      <div>
        <div className="font-medium">{colorName}</div>
        <div className="text-xs opacity-90">{colorValue}</div>
      </div>
    </div>
  </div>
);

interface ColorPaletteProps {
  title: string;
  colors: {
    name: string;
    value: string;
    textClass?: string;
  }[];
}

const ColorPalette: React.FC<ColorPaletteProps> = ({ title, colors }) => (
  <div className="mb-8">
    <h3 className="text-lg font-semibold mb-3">{title}</h3>
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-5 gap-4">
      {colors.map((color) => (
        <ColorSwatch 
          key={color.name} 
          colorName={color.name} 
          colorValue={color.value}
          textClass={color.textClass}
        />
      ))}
    </div>
  </div>
);

// The Colors documentation component
const ColorTokens: React.FC = () => {
  // Get computed styles to display actual color values
  const getComputedColor = (varName: string): string => {
    if (typeof window !== 'undefined') {
      return getComputedStyle(document.documentElement).getPropertyValue(varName);
    }
    return '';
  };

  // Primary palette
  const primaryColors = [
    { name: 'primary-50', value: 'var(--color-primary-50)', textClass: 'text-neutral-900' },
    { name: 'primary-100', value: 'var(--color-primary-100)', textClass: 'text-neutral-900' },
    { name: 'primary-200', value: 'var(--color-primary-200)', textClass: 'text-neutral-900' },
    { name: 'primary-300', value: 'var(--color-primary-300)', textClass: 'text-neutral-900' },
    { name: 'primary-400', value: 'var(--color-primary-400)', textClass: 'text-neutral-900' },
    { name: 'primary-500', value: 'var(--color-primary-500)', textClass: 'text-white' },
    { name: 'primary-600', value: 'var(--color-primary-600)', textClass: 'text-white' },
    { name: 'primary-700', value: 'var(--color-primary-700)', textClass: 'text-white' },
    { name: 'primary-800', value: 'var(--color-primary-800)', textClass: 'text-white' },
    { name: 'primary-900', value: 'var(--color-primary-900)', textClass: 'text-white' },
  ];

  // Secondary palette
  const secondaryColors = [
    { name: 'secondary-50', value: 'var(--color-secondary-50)', textClass: 'text-neutral-900' },
    { name: 'secondary-100', value: 'var(--color-secondary-100)', textClass: 'text-neutral-900' },
    { name: 'secondary-200', value: 'var(--color-secondary-200)', textClass: 'text-neutral-900' },
    { name: 'secondary-300', value: 'var(--color-secondary-300)', textClass: 'text-neutral-900' },
    { name: 'secondary-400', value: 'var(--color-secondary-400)', textClass: 'text-neutral-900' },
    { name: 'secondary-500', value: 'var(--color-secondary-500)', textClass: 'text-white' },
    { name: 'secondary-600', value: 'var(--color-secondary-600)', textClass: 'text-white' },
    { name: 'secondary-700', value: 'var(--color-secondary-700)', textClass: 'text-white' },
    { name: 'secondary-800', value: 'var(--color-secondary-800)', textClass: 'text-white' },
    { name: 'secondary-900', value: 'var(--color-secondary-900)', textClass: 'text-white' },
  ];

  // Tertiary palette
  const tertiaryColors = [
    { name: 'tertiary-50', value: 'var(--color-tertiary-50)', textClass: 'text-neutral-900' },
    { name: 'tertiary-100', value: 'var(--color-tertiary-100)', textClass: 'text-neutral-900' },
    { name: 'tertiary-200', value: 'var(--color-tertiary-200)', textClass: 'text-neutral-900' },
    { name: 'tertiary-300', value: 'var(--color-tertiary-300)', textClass: 'text-neutral-900' },
    { name: 'tertiary-400', value: 'var(--color-tertiary-400)', textClass: 'text-neutral-900' },
    { name: 'tertiary-500', value: 'var(--color-tertiary-500)', textClass: 'text-white' },
    { name: 'tertiary-600', value: 'var(--color-tertiary-600)', textClass: 'text-white' },
    { name: 'tertiary-700', value: 'var(--color-tertiary-700)', textClass: 'text-white' },
    { name: 'tertiary-800', value: 'var(--color-tertiary-800)', textClass: 'text-white' },
    { name: 'tertiary-900', value: 'var(--color-tertiary-900)', textClass: 'text-white' },
  ];

  // Neutral palette
  const neutralColors = [
    { name: 'neutral-50', value: 'var(--color-neutral-50)', textClass: 'text-neutral-900' },
    { name: 'neutral-100', value: 'var(--color-neutral-100)', textClass: 'text-neutral-900' },
    { name: 'neutral-200', value: 'var(--color-neutral-200)', textClass: 'text-neutral-900' },
    { name: 'neutral-300', value: 'var(--color-neutral-300)', textClass: 'text-neutral-900' },
    { name: 'neutral-400', value: 'var(--color-neutral-400)', textClass: 'text-neutral-900' },
    { name: 'neutral-500', value: 'var(--color-neutral-500)', textClass: 'text-white' },
    { name: 'neutral-600', value: 'var(--color-neutral-600)', textClass: 'text-white' },
    { name: 'neutral-700', value: 'var(--color-neutral-700)', textClass: 'text-white' },
    { name: 'neutral-800', value: 'var(--color-neutral-800)', textClass: 'text-white' },
    { name: 'neutral-900', value: 'var(--color-neutral-900)', textClass: 'text-white' },
  ];

  // Semantic colors
  const semanticColors = [
    { name: 'success-50', value: 'var(--color-success-50)', textClass: 'text-neutral-900' },
    { name: 'success-100', value: 'var(--color-success-100)', textClass: 'text-neutral-900' },
    { name: 'success-500', value: 'var(--color-success-500)', textClass: 'text-white' },
    { name: 'success-700', value: 'var(--color-success-700)', textClass: 'text-white' },
    { name: 'success-900', value: 'var(--color-success-900)', textClass: 'text-white' },
    
    { name: 'info-50', value: 'var(--color-info-50)', textClass: 'text-neutral-900' },
    { name: 'info-100', value: 'var(--color-info-100)', textClass: 'text-neutral-900' },
    { name: 'info-500', value: 'var(--color-info-500)', textClass: 'text-white' },
    { name: 'info-700', value: 'var(--color-info-700)', textClass: 'text-white' },
    { name: 'info-900', value: 'var(--color-info-900)', textClass: 'text-white' },
    
    { name: 'warning-50', value: 'var(--color-warning-50)', textClass: 'text-neutral-900' },
    { name: 'warning-100', value: 'var(--color-warning-100)', textClass: 'text-neutral-900' },
    { name: 'warning-500', value: 'var(--color-warning-500)', textClass: 'text-neutral-900' },
    { name: 'warning-700', value: 'var(--color-warning-700)', textClass: 'text-white' },
    { name: 'warning-900', value: 'var(--color-warning-900)', textClass: 'text-white' },
    
    { name: 'error-50', value: 'var(--color-error-50)', textClass: 'text-neutral-900' },
    { name: 'error-100', value: 'var(--color-error-100)', textClass: 'text-neutral-900' },
    { name: 'error-500', value: 'var(--color-error-500)', textClass: 'text-white' },
    { name: 'error-700', value: 'var(--color-error-700)', textClass: 'text-white' },
    { name: 'error-900', value: 'var(--color-error-900)', textClass: 'text-white' },
  ];

  // Surface & Background colors
  const surfaceColors = [
    { name: 'surface-light', value: 'var(--color-surface-light)', textClass: 'text-neutral-900 border border-neutral-200' },
    { name: 'background-light', value: 'var(--color-background-light)', textClass: 'text-neutral-900 border border-neutral-200' },
    { name: 'surface-dark', value: 'var(--color-surface-dark)', textClass: 'text-white' },
    { name: 'background-dark', value: 'var(--color-background-dark)', textClass: 'text-white' },
  ];

  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold mb-8">Color System</h1>
      
      <div className="mb-6">
        <p className="mb-4">
          Our color system is built around a token-based architecture that supports both light and dark themes.
          The colors are WCAG-compliant with appropriate contrast ratios for accessibility.
        </p>
        
        <h2 className="text-xl font-semibold mt-6 mb-4">Usage</h2>
        <p className="mb-4">
          Colors can be used via CSS variables or Tailwind utility classes:
        </p>
        <pre className="bg-neutral-100 dark:bg-neutral-800 p-3 rounded mb-4 text-sm overflow-auto">
          <code>{`/* CSS Variables */
.my-element {
  color: var(--color-primary-500);
  background-color: var(--color-neutral-50);
}

<!-- Tailwind Classes -->
<div class="text-primary-500 bg-neutral-50">Content</div>`}</code>
        </pre>
      </div>

      <h2 className="text-xl font-semibold mt-6 mb-4">Primary Colors</h2>
      <p className="mb-4">
        The primary color palette is used for primary actions, links, and key UI elements.
      </p>
      <ColorPalette title="Primary" colors={primaryColors} />
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Secondary Colors</h2>
      <p className="mb-4">
        The secondary color palette is used for secondary actions and emphasis.
      </p>
      <ColorPalette title="Secondary" colors={secondaryColors} />
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Tertiary Colors</h2>
      <p className="mb-4">
        The tertiary color palette provides additional visual hierarchy and accent options.
      </p>
      <ColorPalette title="Tertiary" colors={tertiaryColors} />
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Neutral Colors</h2>
      <p className="mb-4">
        Neutral colors are used for text, backgrounds, borders, and UI scaffolding.
      </p>
      <ColorPalette title="Neutral" colors={neutralColors} />
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Semantic Colors</h2>
      <p className="mb-4">
        Semantic colors convey meaning and are used for feedback, alerts, and status indicators.
      </p>
      <ColorPalette title="Success" colors={semanticColors.slice(0, 5)} />
      <ColorPalette title="Info" colors={semanticColors.slice(5, 10)} />
      <ColorPalette title="Warning" colors={semanticColors.slice(10, 15)} />
      <ColorPalette title="Error" colors={semanticColors.slice(15, 20)} />
      
      <h2 className="text-xl font-semibold mt-6 mb-4">Surface & Background Colors</h2>
      <p className="mb-4">
        Surface and background colors define different elevation levels and containers.
      </p>
      <ColorPalette title="Surface & Background" colors={surfaceColors} />
      
      <h2 className="text-xl font-semibold mt-8 mb-4">Accessibility</h2>
      <div className="p-4 bg-neutral-100 dark:bg-neutral-800 rounded">
        <h3 className="font-semibold mb-2">WCAG Compliance</h3>
        <p className="mb-4">
          Our color system is designed to meet WCAG 2.1 AA standards for contrast ratio:
        </p>
        <ul className="list-disc list-inside mb-4">
          <li>Normal text (below 18pt): minimum contrast ratio of 4.5:1</li>
          <li>Large text (18pt or 14pt bold and above): minimum contrast ratio of 3:1</li>
          <li>UI components and graphical objects: minimum contrast ratio of 3:1</li>
        </ul>
        <p>
          When using these colors, ensure proper contrast between text and background colors.
          The primary and neutral color scales offer a range of options to maintain accessibility.
        </p>
      </div>
    </div>
  );
};

const meta = {
  title: 'Design System/Tokens/Colors',
  component: ColorTokens,
  parameters: {
    layout: 'fullscreen',
    docs: {
      description: {
        component: 'Color tokens documentation for the design system.',
      },
    },
  },
} satisfies Meta<typeof ColorTokens>;

export default meta;
type Story = StoryObj<typeof meta>;

export const Default: Story = {}; 