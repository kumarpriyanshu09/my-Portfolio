# Architecture Overview

This document provides a high-level overview of the portfolio application's architecture, design decisions, and code organization.

## Table of Contents

- [Project Structure](#project-structure)
- [Architecture Diagram](#architecture-diagram)
- [Design Decisions](#design-decisions)
- [State Management](#state-management)
- [Data Flow](#data-flow)
- [Performance Considerations](#performance-considerations)
- [Testing Strategy](#testing-strategy)
- [Security Considerations](#security-considerations)

## Project Structure

\`\`\`
heyitspriyanshu/
├── app/                             # App Router: Pages, layouts, and global styles
│   ├── globals.css                  # Global stylesheets
│   ├── layout.tsx                   # Root layout
│   ├── page.tsx                     # Home page (or other root page)
│   └── projects/                    # Project-specific pages
│       ├── [project-name]/          # Individual project page
│       │   ├── page.tsx
│       │   ├── AIDashboardClient.tsx  # Example client component
│       │   └── __tests__/             # Project-specific tests
│       └── layout.tsx                 # Layout for project pages
│
├── components/                      # Reusable UI components
│   ├── atoms/                       # Atomic design: basic building blocks (e.g., nav-link.tsx)
│   ├── layout/                      # Layout-specific components (e.g., container.tsx, header.tsx)
│   ├── organisms/                   # Atomic design: complex components (e.g., main-navigation.tsx)
│   ├── sections/                    # Page sections (e.g., about-section.tsx, hero-section.tsx)
│   │   └── __tests__/               # Tests for section components
│   ├── templates/                   # Page-level layout structures (e.g., app-layout.tsx)
│   ├── ui/                          # UI primitives, likely from shadcn/ui (e.g., button.tsx, card.tsx)
│   │   └── __tests__/               # Tests for UI primitive components
│   ├── animated-text.tsx            # Example direct components
│   ├── certificate-card.tsx
│   └── __tests__/                   # General component tests
│
├── docs/                            # Project documentation
│   ├── ARCHITECTURE.md
│   ├── COMPONENT_GUIDE.md
│   ├── DEPLOYMENT_GUIDE.md
│   └── STYLING_GUIDE.md
│
├── hooks/                           # Custom React hooks
│   ├── use-mobile.tsx
│   ├── use-scroll-animation.ts
│   ├── use-scroll-top.ts
│   ├── use-toast.ts
│   └── useVideoAutoplay.ts
│
├── lib/                             # Utility functions, shared code, and contexts
│   ├── contexts/                    # React Context API providers
│   │   └── theme-context.tsx        # Theme management context
│   ├── types.ts                     # Shared TypeScript type definitions
│   └── utils.ts                     # General utility functions
│
├── public/                          # Static assets served directly
│   ├── assets/                      # General assets
│   │   ├── certificates/
│   │   ├── education/
│   │   ├── skills/
│   │   ├── ui/
│   │   └── vibe-code/
│   └── videos/                      # Video assets
│
├── styles/                          # (Potentially legacy or for specific overrides, globals in app/)
│   └── globals.css                  # Global styles (primary in app/globals.css)
│
├── .env.local                       # Environment variables (gitignored)
├── .gitignore
├── components.json                  # Likely for shadcn/ui configuration
├── jest.config.cjs                  # Jest test runner configuration
├── next.config.mjs                  # Next.js configuration
├── package.json                     # Project metadata and dependencies
├── pnpm-lock.yaml                   # PNPM lockfile
├── postcss.config.mjs               # PostCSS configuration
├── README.md
├── tailwind.config.ts               # Tailwind CSS configuration
└── tsconfig.json                    # TypeScript configuration
\`\`\`

## Architecture Diagram

\`\`\`mermaid
graph TD
    A[Pages] -->|Compose| B[Components]
    B -->|Use| C[Hooks]
    B -->|Import| D[Lib/Utils]
    C -->|Use| D
    B -->|Style with| E[Tailwind CSS]
    A -->|API Routes| F[External Services]
    G[Public Assets] -->|Serve| B
\`\`\`

## Design Decisions

### 1. Component Architecture

- **Atomic Design**: Components are organized following Atomic Design principles, with directories like `atoms/`, `molecules/` (if present), `organisms/`.
- **Reusable UI Primitives**: Extensive use of `components/ui/` which likely houses components from `shadcn/ui`, promoting consistency.
- **Specialized Components**: Dedicated directories for `layout/` and `sections/` components.
- **Composition**: Components are composed together to build complex UIs.
- **Reusability**: Common UI patterns are abstracted into reusable components.
- **Separation of Concerns**: UI, logic, and styles are co-located where appropriate.

### 2. Styling

- **Tailwind CSS**: Utility-first CSS framework for styling, configured in `tailwind.config.ts`.
- **CSS Variables**: Extensive use of HSL-based CSS variables for theming (light/dark modes) and design tokens, defined in `app/globals.css` and referenced in `tailwind.config.ts`.
- **Dark Mode**: Implemented using a `class` strategy via `next-themes` and Tailwind's `darkMode: ["class"]` configuration. CSS variables are updated within the `.dark {}` scope.
- **Responsive Design**: Mobile-first approach leveraging Tailwind's responsive utilities.
- **CSS Optimization**: `critters` is used for optimizing CSS, as specified in `next.config.mjs`.
- **Plugins**: `tailwindcss-animate` for animations and `@tailwindcss/typography` for rich text styling.

### 3. State Management

State in this project is managed at both the local (component) and global (application) levels, using a combination of React primitives and Next.js features.

#### Local State

- **useState**: For simple component state.
- **useReducer**: For complex state logic.
- **useImmer**: For nested state updates.

#### Global State

- **Context API**: Used for application-wide state, such as theme management (e.g., via `next-themes` and custom contexts like `lib/contexts/theme-context.tsx`).
- **URL State**: For shareable and bookmarkable UI states, leveraging Next.js routing.
- **Server State**: Managed via Next.js data fetching methods (see Data Fetching section). No explicit client-side server state libraries like React Query or SWR are listed in `package.json`—data fetching and caching primarily rely on Next.js built-in mechanisms.

### 4. Data Fetching

- **Static Generation (SSG)**: For pages with content that doesn't change often
- **Server-Side Rendering (SSR)**: For dynamic content
- **Incremental Static Regeneration (ISR)**: For pages that can be revalidated
- **Client-Side Fetching**: For highly dynamic data

## Data Flow

1. **Static Generation**
   - Data fetched at build time
   - Cached and served as static HTML

2. **Server-Side Rendering**
   - Data fetched on each request
   - Rendered on the server

3. **Client-Side Data Fetching**
   - Data fetched after component mounts
   - Handles loading and error states

## Performance Considerations

### Code Splitting

- **Dynamic Imports**: For code splitting
- **Lazy Loading**: For below-the-fold content
- **Route-based Splitting**: Automatically handled by Next.js

### Image Optimization

- **next/image**: Utilized for automatic image optimization, as configured in `next.config.mjs` (`unoptimized: false`).
- **Formats**: Optimized to `image/avif` and `image/webp`.
- **External Domains**: Configured for images from `7qd5tdgxs26x480g.public.blob.vercel-storage.com`.
- **Responsive Images**: Standard `next/image` features like `sizes` and `srcSet` are available.
- **Lazy Loading**: Default behavior for offscreen images with `next/image`.

### Bundle Optimization

- **Tree Shaking**: Standard with modern bundlers used by Next.js.
- **Code Splitting**: Automatic route-based code splitting by Next.js.
- **CSS Optimization**: `critters` is used to inline critical CSS, as per `next.config.mjs`.
- **Deduplication**: Handled by the package manager (e.g., npm, pnpm).

## Testing Strategy

### Unit Testing

- **Jest**: Test runner, configured in `jest.config.cjs`.
- **React Testing Library**: For component testing (`@testing-library/react`).
- **@testing-library/jest-dom**: For custom Jest matchers for DOM elements.
- **`ts-jest`**: For TypeScript support in Jest.
- **`identity-obj-proxy`**: Used for mocking CSS modules in Jest tests.
- **Test Files**: Located in `__tests__` subdirectories within `app/` and `components/`.

### Integration Testing

- No dedicated integration testing tools like Cypress or MSW are explicitly listed in `package.json`. Testing seems focused on unit and component level with Jest and RTL.

### Visual Regression Testing

- No dedicated visual regression testing tools like Storybook with Chromatic are explicitly listed in `package.json`.

## Security Considerations

### Data Sanitization

- **DOMPurify**: For sanitizing HTML content
- **Input Validation**: Validate all user inputs

### Authentication

- **NextAuth.js**: For authentication
- **JWT**: For session management

### API Security

- **CORS**: Configured on the API routes
- **Rate Limiting**: Implement rate limiting
- **CSRF Protection**: Built-in with Next.js

## Performance Monitoring

- **Web Vitals**: Next.js has built-in support for measuring Core Web Vitals.
- **Vercel Speed Insights**: Used for performance monitoring, as indicated by `@vercel/speed-insights` in `package.json`.
- **Sentry**: Not explicitly listed in `package.json`.

## Error Handling

- **Error Boundaries**: Catch JavaScript errors
- **Global Error Handler**: For uncaught exceptions
- **User-Friendly Messages**: Show helpful error messages

## Accessibility (a11y)

- **Semantic HTML**: Use proper HTML elements
- **ARIA Attributes**: For enhanced accessibility
- **Keyboard Navigation**: Ensure all interactive elements are keyboard accessible
- **Screen Reader Testing**: Test with screen readers
- **Color Contrast**: Ensure sufficient contrast ratios

## Internationalization (i18n)

- No specific i18n libraries like `next-intl` are listed in `package.json`. This feature might not be implemented yet.

## Analytics

- **Vercel Analytics**: Used for traffic analysis, as indicated by `@vercel/analytics` in `package.json`.
- **Google Analytics**: Environment variable `NEXT_PUBLIC_GA_MEASUREMENT_ID` suggests potential integration.
- **Facebook Pixel**: Environment variable `NEXT_PUBLIC_FACEBOOK_PIXEL_ID` suggests potential integration.
- **Custom Events**: Can be implemented with chosen analytics tools.

## Continuous Integration/Deployment (CI/CD)

- **GitHub Actions**: For CI/CD pipelines
- **Automated Testing**: Run tests on push/pull request
- **Preview Deployments**: For pull requests
- **Automated Versioning**: Semantic versioning

## Documentation

- **Storybook**: For component documentation
- **JSDoc**: For code documentation
- **README.md**: Project overview and setup
- **ARCHITECTURE.md**: This document

## Future Improvements

1. **Performance**
   - Implement code splitting for larger components
   - Optimize bundle size
   - Add service worker for offline support

2. **Testing**
   - Increase test coverage for components and pages.
   - Consider adding integration tests (e.g., with Playwright, since `playwright-core` is a dependency, though it might be for other purposes like Browserbase SDK).
   - Explore visual regression testing if UI consistency is critical.

3. **Features**
   - Implement i18n if multi-language support is needed.
   - Add search functionality if applicable.
   - Further enhance accessibility features.

4. **Developer Experience**
   - Add more detailed documentation
   - Improve error messages
   - Add more TypeScript types

## Conclusion

This architecture provides a solid foundation for building a maintainable, performant, and scalable portfolio application. By following these principles and best practices, we can ensure the application remains easy to develop, test, and maintain as it grows.
