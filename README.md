# Enterprise Design System

A scalable, reusable design system built with React, TypeScript, TailwindCSS, and Storybook.

## 🚀 Features

- Token-based color system
- WCAG-compliant accessibility 
- Responsive components
- Typed props with TypeScript
- Interactive documentation with Storybook

## 📦 Components

### 🎨 Color System
- Token-based color system with:
  - Primary, Secondary, and Tertiary color palettes
  - Neutral palette for text, backgrounds, and borders
  - Semantic colors (Success, Info, Warning, Error)
  - Surface and background colors

### 📊 Data Display Components
- **Accordion**: Expandable content panels for organizing information
- **Tag/Badge**: Compact elements for labels, categories, and statuses

### 🧭 Navigation Components
- **Tabs**: Content organization with different style variants
- **TopNavigation**: Responsive navigation bar with mobile support

## 🛠️ Tech Stack

- **React**: UI component library
- **TypeScript**: Type safety and improved developer experience
- **TailwindCSS**: Utility-first CSS framework
- **Storybook**: Component documentation and development environment

## 🚀 Getting Started

```bash
git clone <repository-url>
cd design-system
npm install
```

### Development

```bash
npm run storybook      # Start Storybook
npm run build          # Build the project
npm run build-storybook # Build Storybook static site
```

## 📚 Usage

### Accordion Component

```jsx
import { Accordion, AccordionItem } from './components/data-display/Accordion';

<Accordion>
  <AccordionItem title="Section 1">
    Content for section 1
  </AccordionItem>
  <AccordionItem title="Section 2">
    Content for section 2
  </AccordionItem>
</Accordion>
```

### Tag Component

```jsx
import { Tag } from './components/data-display/Tag';

<Tag>Default Tag</Tag>
<Tag variant="primary" isPill>Primary Pill</Tag>
<Tag variant="success" icon={<CheckIcon />}>Completed</Tag>
<Tag variant="error" dismissible onDismiss={() => handleDismiss()}>Error</Tag>
```

### Tabs Component

```jsx
import { Tabs, Tab } from './components/navigation/Tabs';

<Tabs variant="underline">
  <Tab id="tab1" label="First Tab">
    Content for first tab
  </Tab>
  <Tab id="tab2" label="Second Tab">
    Content for second tab
  </Tab>
</Tabs>
```

### TopNavigation Component

```jsx
import { TopNavigation } from './components/navigation/TopNavigation';

<TopNavigation
  brand={<Logo />}
  items={[
    { id: 'home', label: 'Home', href: '/', isActive: true },
    { id: 'products', label: 'Products', href: '/products' },
    { 
      id: 'services', 
      label: 'Services',
      subItems: [
        { id: 'consulting', label: 'Consulting', href: '/services/consulting' },
        { id: 'development', label: 'Development', href: '/services/development' }
      ]
    }
  ]}
  actions={<Button>Sign In</Button>}
/>
```

## 🧪 Accessibility

- Proper color contrast ratios
- Keyboard navigation support
- ARIA attributes
- Focus management
- Screen reader support

## 📱 Responsive Design

- Mobile-first approach
- Responsive layouts
- Touch-friendly interactions

## 🌓 Theme Support

**Note:**
This design system currently supports **light mode only**.

## 📃 License

MIT
