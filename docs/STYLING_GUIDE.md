# Styling Guide

This document outlines the styling system, theming, and design tokens used in the portfolio project.

## Table of Contents

- [Color System](#color-system)
- [Typography](#typography)
- [Spacing](#spacing)
- [Breakpoints](#breakpoints)
- [Animations](#animations)
- [Dark Mode](#dark-mode)
- [Custom Utilities](#custom-utilities)

## Color System

The project uses a semantic color system defined in `tailwind.config.ts`. Colors are defined using HSL values and CSS variables for better theming support.

### Primary Colors

- `--primary`: Primary brand color
- `--primary-foreground`: Text color on primary background
- `--primary-hover`: Hover state for primary color

### Background Colors

- `--background`: Main background color
- `--foreground`: Main text color
- `--muted`: Muted background color
- `--muted-foreground`: Muted text color
- `--card`: Card background color
- `--card-foreground`: Card text color

### Semantic Colors

- `--destructive`: Error/destructive actions
- `--destructive-foreground`: Text on destructive background
- `--success`: Success state
- `--warning`: Warning state
- `--info`: Informational state

## Typography

The project uses the following font families:

- **Sans-serif**: System UI, -apple-system, sans-serif
- **Mono**: Menlo, Monaco, monospace

### Text Sizes

| Name      | Size (rem) | Line Height | Font Weight |
|-----------|------------|-------------|-------------|
| xs        | 0.75rem    | 1rem        | 400         |
| sm        | 0.875rem   | 1.25rem     | 400         |
| base      | 1rem       | 1.5rem      | 400         |
| lg        | 1.125rem   | 1.75rem     | 400         |
| xl        | 1.25rem    | 1.75rem     | 500         |
| 2xl       | 1.5rem     | 2rem        | 600         |
| 3xl       | 1.875rem   | 2.25rem     | 700         |
| 4xl       | 2.25rem    | 2.5rem      | 800         |
| 5xl       | 3rem       | 1           | 800         |

## Spacing

The project uses a 4px base unit for consistent spacing. The following scale is used:

| Name   | Value  | Pixels |
|--------|--------|--------|
| 0      | 0      | 0px    |
| px     | 1px    | 1px    |
| 0.5    | 0.125rem | 2px   |
| 1      | 0.25rem | 4px   |
| 1.5    | 0.375rem | 6px   |
| 2      | 0.5rem  | 8px   |
| 2.5    | 0.625rem | 10px  |
| 3      | 0.75rem | 12px  |
| 3.5    | 0.875rem | 14px  |
| 4      | 1rem    | 16px  |
| 5      | 1.25rem | 20px  |
| 6      | 1.5rem  | 24px  |
| 7      | 1.75rem | 28px  |
| 8      | 2rem    | 32px  |
| 9      | 2.25rem | 36px  |
| 10     | 2.5rem  | 40px  |


## Breakpoints

The project uses the following responsive breakpoints:

| Name      | Min-width | CSS Media Query      |
|-----------|-----------|----------------------|
| sm        | 640px     | `@media (min-width: 640px)` |
| md        | 768px     | `@media (min-width: 768px)` |
| lg        | 1024px    | `@media (min-width: 1024px)` |
| xl        | 1280px    | `@media (min-width: 1280px)` |
| 2xl       | 1536px    | `@media (min-width: 1536px)` |

## Animations

The project uses Framer Motion for animations. Common animation variants are defined in `lib/animation.ts`.

### Fade In

```tsx
const fadeIn = {
  hidden: { opacity: 0 },
  visible: { 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
```

### Slide Up

```tsx
const slideUp = {
  hidden: { y: 20, opacity: 0 },
  visible: { 
    y: 0, 
    opacity: 1,
    transition: { duration: 0.5 }
  }
};
```

### Stagger Children

```tsx
const container = {
  hidden: { opacity: 0 },
  visible: {
    opacity: 1,
    transition: {
      staggerChildren: 0.1
    }
  }
};
```

## Dark Mode

The project supports dark mode using the `next-themes` library. The theme can be toggled using the theme switcher component.

### Theme Variables

Dark mode variables are defined in `styles/globals.css` and are automatically applied when the dark class is present on the HTML element.

```css
:root {
  /* Light theme variables */
  --background: 0 0% 100%;
  --foreground: 222.2 47.4% 11.2%;
  /* ... */
}

.dark {
  /* Dark theme variables */
  --background: 224 71% 4%;
  --foreground: 213 31% 91%;
  /* ... */
}
```

## Custom Utilities

The project includes several custom utility classes defined in `tailwind.config.ts`:

### Container

```js
container: {
  center: true,
  padding: '2rem',
  screens: {
    '2xl': '1400px',
  },
},
```

### Custom Animations

```js
keyframes: {
  'accordion-down': {
    from: { height: 0 },
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: 0 },
  },
},
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
},
```

### Custom Screens

```js
screens: {
  '2xl': '1400px',
},
```

## Best Practices

1. **Use Utility Classes**: Prefer Tailwind utility classes over custom CSS
2. **Responsive Design**: Use responsive variants (e.g., `md:text-lg`)
3. **Dark Mode**: Test components in both light and dark themes
4. **Accessibility**: Ensure sufficient color contrast and proper focus states
5. **Performance**: Use `@apply` sparingly and prefer utility classes in the markup
