# Component Guide

This document provides an overview of the component architecture and usage guidelines for the portfolio project.

## Component Structure

The project organizes components with a methodology similar to Atomic Design, but adapted for this specific project structure. Components are located primarily within the `components/` directory and its subdirectories.

### Core Component Directories:

*   **`components/atoms/`**: Basic, indivisible building blocks of the UI.
    *   Example: `nav-link.tsx`
*   **`components/layout/`**: Components responsible for structuring the layout of pages or sections.
    *   Examples: `container.tsx`, `header.tsx`
*   **`components/organisms/`**: More complex UI components, typically composed of atoms, molecules (if any), or other organisms.
    *   Example: `main-navigation.tsx`
*   **`components/sections/`**: Large, distinct parts of a page, often corresponding to a specific content area.
    *   Examples: `hero-section.tsx`, `about-section.tsx`, `projects-section.tsx`, `experience-section.tsx`, `education-section.tsx`, `certifications-section.tsx`, `what-can-i-do-section.tsx`, `get-in-touch-section.tsx`
*   **`components/templates/`**: Page-level structures or layouts that define the arrangement of sections and other components.
    *   Examples: `app-layout.tsx`, `section-layout.tsx`
*   **`components/ui/`**: UI primitive components, largely based on [shadcn/ui](https://ui.shadcn.com/). This directory contains a wide array of reusable elements like buttons, cards, dialogs, etc.
    *   Examples: `button.tsx`, `card.tsx`, `accordion.tsx`, `input.tsx`, `sheet.tsx`, `base-card.tsx` (custom extension)
*   **`components/` (root)**: Contains various specific-purpose components that might not fit neatly into the above categories or are widely used.
    *   Examples: `animated-text.tsx`, `scramble-text.tsx`, `project-card.tsx`, `certificate-card.tsx`, `skill-card.tsx`, `theme-provider.tsx`, `error-boundary.tsx`, `timeline-item.tsx`

*(Note: The `molecules` category is not explicitly present as a directory in the current structure.)*

## Component Props Documentation

### AppLayout

```tsx
interface AppLayoutProps {
  children: ReactNode;
  className?: string;
  withSpotlight?: boolean;
  spotlightPosition?: string;
  footerContent?: ReactNode;
}
```

### ProjectCard

```tsx
interface ProjectCardProps {
  title: string;
  description: string;
  tags: string[];
  image: string;
  githubUrl?: string;
  liveUrl?: string;
  className?: string;
}
```

### CertificateCard

```tsx
interface CertificateCardProps {
  title: string;
  issuer: string;
  issueDate: string;
  credentialUrl: string;
  image: string;
  className?: string;
}
```

## Best Practices

1. **Props Naming**: Use descriptive prop names that indicate their purpose
2. **Type Safety**: Always define TypeScript interfaces or types for component props.
3. **Styling**:
    *   Primarily use Tailwind CSS utility classes for styling.
    *   Leverage CSS variables defined in `app/globals.css` for theming, consistent with `tailwind.config.ts`.
    *   Use `clsx` or `tailwind-merge` (dependencies in `package.json`) for conditionally applying classes.
4. **Responsiveness**: Ensure components work well on all screen sizes using Tailwind's responsive modifiers.
5. **Accessibility**: Follow accessibility best practices (semantic HTML, ARIA attributes, keyboard navigation, focus management, etc.).
6. **Path Aliases**: Use path aliases like `@/components/...` for imports, as configured in `tsconfig.json`.

## Adding New Components

1.  Create a new `.tsx` file in the most appropriate subdirectory within `components/` (e.g., `components/atoms/`, `components/ui/`, `components/sections/`).
2.  Define TypeScript interfaces or types for the component's props.
3.  Implement the component logic and JSX structure.
4.  Style the component using Tailwind CSS utility classes.
5.  Add JSDoc comments for documentation, explaining the component's purpose and props.
6.  Export the component as a named export.
7.  If applicable, add unit tests for the component in a corresponding `__tests__` directory.

Example:

```tsx
/**
 * Button component for user interactions
 */
export function Button({
  children,
  variant = 'default',
  size = 'md',
  className = '',
  ...props
}: ButtonProps) {
  return (
    <button
      className={cn(
        'inline-flex items-center justify-center rounded-md font-medium',
        'focus:outline-none focus:ring-2 focus:ring-offset-2',
        'disabled:opacity-50 disabled:pointer-events-none',
        {
          'bg-primary text-primary-foreground hover:bg-primary/90': variant === 'default',
          'bg-destructive text-destructive-foreground hover:bg-destructive/90': variant === 'destructive',
          'h-9 px-4 py-2': size === 'md',
          'h-8 px-3 text-xs': size === 'sm',
          'h-10 px-8': size === 'lg',
        },
        className
      )}
      {...props}
    >
      {children}
    </button>
  )
}

type ButtonVariant = 'default' | 'destructive'
type ButtonSize = 'sm' | 'md' | 'lg'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {
  variant?: ButtonVariant
  size?: ButtonSize
}
```
