# Component Guide

This document provides an overview of the component architecture and usage guidelines for the portfolio project.

## Component Structure

The project follows Atomic Design principles with the following component categories:

### 1. Atoms

Basic building blocks of the UI:

- **AnimatedText**: Text with animation effects
- **CharacterIcon**: Icon components for characters/avatars
- **ScrambleText**: Text that scrambles and unscrambles

### 2. Molecules

Groups of atoms functioning together:
- (Add your molecules here)

### 3. Organisms

Complex UI components composed of molecules/atoms:
- (Add your organisms here)

### 4. Templates

Page-level layout components:

- **AppLayout**: Main application layout with header, main content, and footer
- **SectionLayout**: Reusable section wrapper with consistent styling

### 5. Sections

Page sections used in the main layout:

- **HeroSection**: Introduction/hero section
- **AboutSection**: About me section
- **ProjectsSection**: Showcase of projects
- **ExperienceSection**: Work experience timeline
- **EducationSection**: Education history
- **CertificationsSection**: Certifications and badges
- **WhatCanIDoSection**: Skills and capabilities
- **GetInTouchSection**: Contact information

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
2. **Type Safety**: Always define TypeScript interfaces for component props
3. **Styling**: Use Tailwind CSS utility classes for styling
4. **Responsiveness**: Ensure components work well on all screen sizes
5. **Accessibility**: Follow accessibility best practices (ARIA attributes, keyboard navigation, etc.)

## Adding New Components

1. Create a new file in the appropriate directory
2. Define TypeScript interfaces for props
3. Add JSDoc comments for documentation
4. Export the component as a named export
5. Add the component to the appropriate index.ts file

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
