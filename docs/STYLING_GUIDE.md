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

The project employs a comprehensive color system based on CSS variables defined in `app/globals.css` and utilized within `tailwind.config.ts`. This system supports both light and dark themes. Colors are defined using HSL values.

Key color categories and their CSS variables (example for light theme, dark theme has corresponding overrides):

*   **Core Palette:**
    *   `--background`: (e.g., `0 0% 100%`) - Main background
    *   `--foreground`: (e.g., `0 0% 3.9%`) - Main text color
*   **Primary:**
    *   `--primary`: (e.g., `0 0% 9%`)
    *   `--primary-foreground`: (e.g., `0 0% 98%`)
*   **Secondary:**
    *   `--secondary`: (e.g., `0 0% 96.1%`)
    *   `--secondary-foreground`: (e.g., `0 0% 9%`)
*   **Muted:**
    *   `--muted`: (e.g., `0 0% 96.1%`)
    *   `--muted-foreground`: (e.g., `0 0% 45.1%`)
*   **Accent:**
    *   `--accent`: (e.g., `0 0% 96.1%`)
    *   `--accent-foreground`: (e.g., `0 0% 9%`)
*   **Destructive (Errors/Warnings):**
    *   `--destructive`: (e.g., `0 84.2% 60.2%`)
    *   `--destructive-foreground`: (e.g., `0 0% 98%`)
*   **UI Elements:**
    *   `--card`: (e.g., `0 0% 100%`) - Card background
    *   `--card-foreground`: (e.g., `0 0% 3.9%`) - Card text
    *   `--popover`: (e.g., `0 0% 100%`) - Popover background
    *   `--popover-foreground`: (e.g., `0 0% 3.9%`) - Popover text
    *   `--border`: (e.g., `0 0% 89.8%`) - Default border color
    *   `--input`: (e.g., `0 0% 89.8%`) - Input field border/background
    *   `--ring`: (e.g., `0 0% 3.9%`) - Focus ring color
*   **Chart Colors:**
    *   `--chart-1` through `--chart-5`
*   **Sidebar Specific Colors:**
    *   `--sidebar-background`, `--sidebar-foreground`, etc.

Refer to `app/globals.css` for the complete list and their dark theme counterparts. The `tailwind.config.ts` maps these CSS variables to Tailwind utility classes (e.g., `bg-primary`, `text-destructive-foreground`).

## Typography

*   **Default Font Family**: The primary font stack is `Arial, Helvetica, sans-serif`, as defined in `app/globals.css`.
*   **Monospace Font Family**: Tailwind's default monospace stack (e.g., Menlo, Monaco) is used if `font-mono` utility is applied.
*   **Rich Text**: The `@tailwindcss/typography` plugin is used for styling HTML generated from Markdown or a CMS.

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

| Name      | Min-width | CSS Media Query             |
|-----------|-----------|-----------------------------|
| sm        | 640px     | `@media (min-width: 640px)` |
| md        | 768px     | `@media (min-width: 768px)` |
| lg        | 1024px    | `@media (min-width: 1024px)` |
| xl        | 1280px    | `@media (min-width: 1280px)` |
| 2xl       | 1536px    | `@media (min-width: 1536px)` |
*(Note: These are Tailwind's default breakpoints. The project uses a custom `1400px` breakpoint for the `container` utility, not as a general screen size.)*

## Animations

The project utilizes:
- **Framer Motion**: For complex JavaScript-driven animations (dependency in `package.json`).
- **`tailwindcss-animate`**: A Tailwind plugin for creating animations with CSS, configured in `tailwind.config.ts`.

### Tailwind CSS Animations (from `tailwind.config.ts`)

```javascript
// tailwind.config.ts
keyframes: {
  'accordion-down': {
    from: { height: '0' }, // Note: original doc had 0, actual config has "0"
    to: { height: 'var(--radix-accordion-content-height)' },
  },
  'accordion-up': {
    from: { height: 'var(--radix-accordion-content-height)' },
    to: { height: '0' }, // Note: original doc had 0, actual config has "0"
  },
},
animation: {
  'accordion-down': 'accordion-down 0.2s ease-out',
  'accordion-up': 'accordion-up 0.2s ease-out',
},
```

### Framer Motion Example Variants (Illustrative)
Common animation variants can be defined for Framer Motion. While `lib/animation.ts` was mentioned in the original docs, it's not present in the current file structure. If you create such a file, here are examples:

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
// app/globals.css
:root {
  /* Light theme variables */
  --background: 0 0% 100%;
  --foreground: 0 0% 3.9%;
  --card: 0 0% 100%;
  --card-foreground: 0 0% 3.9%;
  --popover: 0 0% 100%;
  --popover-foreground: 0 0% 3.9%;
  --primary: 0 0% 9%;
  --primary-foreground: 0 0% 98%;
  /* ... many more variables ... */
  --radius: 0.5rem;
}

.dark {
  /* Dark theme variables */
  --background: 0 0% 3.9%;
  --foreground: 0 0% 98%;
  --card: 0 0% 3.9%;
  --card-foreground: 0 0% 98%;
  --popover: 0 0% 3.9%;
  --popover-foreground: 0 0% 98%;
  --primary: 0 0% 98%;
  --primary-foreground: 0 0% 9%;
  /* ... many more variables ... */
}
```
The `theme-provider.tsx` component likely handles the theme switching logic using `next-themes`.

## Custom Utilities & Configurations

### Container Utility (from `tailwind.config.ts`)

```javascript
// tailwind.config.ts
theme: {
  container: {
    center: true,
    padding: '2rem',
    screens: {
      '2xl': '1400px', // Max width for the container on 2xl screens
    },
  },
  // ...
}
```

### Text Balance Utility (from `app/globals.css`)
A utility class for balanced text wrapping:
```css
/* app/globals.css */
@layer utilities {
  .text-balance {
    text-wrap: balance;
  }
}
```

### Border Radius (from `tailwind.config.ts`)
Border radius values are mapped to the `--radius` CSS variable:
```javascript
// tailwind.config.ts
borderRadius: {
  lg: "var(--radius)",        // 0.5rem
  md: "calc(var(--radius) - 2px)", // 0.5rem - 2px
  sm: "calc(var(--radius) - 4px)", // 0.5rem - 4px
},
```

## Best Practices

1.  **Utility-First**: Prefer Tailwind CSS utility classes directly in your JSX over custom CSS or `@apply`.
2.  **Theming with CSS Variables**: Leverage the established CSS variables for colors, border radius, etc., to maintain consistency with the theme.
3.  **Responsive Design**: Use Tailwind's responsive prefixes (e.g., `md:text-lg`, `lg:hidden`) to ensure adaptability across screen sizes.
4.  **Dark Mode**: Always test components in both light and dark themes. Use Tailwind's `dark:` variant for dark mode specific styles.
5.  **Accessibility (a11y)**:
    *   Ensure sufficient color contrast using the theme's foreground/background pairs.
    *   Verify focus states are clear and visible, utilizing the `--ring` variable.
6.  **Performance**:
    *   Be mindful of bundle size. `tailwindcss-animate` and Framer Motion can add to it if not used judiciously.
    *   `@apply` should be used sparingly, typically within global styles or for very complex, repeated patterns not achievable with simple utilities.
7.  **Typography Plugin**: Utilize the classes provided by `@tailwindcss/typography` (e.g., `prose`) for styling blocks of rich text content.
