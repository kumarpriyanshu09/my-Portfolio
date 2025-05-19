---
trigger: always_on
description: 
globs: 
---
# Project Structure Guide

This document outlines the main directories in this Next.js project and their typical purposes.

## Core Directories

* **`app/`**: Core directory for the Next.js App Router. Contains pages, layouts, API routes, and other application-specific files. Follows the Next.js 13+ App Router conventions. ([app/](mdc:app))
* **`components/`**: Houses reusable UI components organized by atomic design principles. ([components/](mdc:components))
  * `atoms/`: Basic building blocks (buttons, inputs, etc.)
  * `molecules/`: Groups of atoms functioning together
  * `organisms/`: Complex UI components composed of molecules and/or atoms
  * `templates/`: Page-level templates
  * `sections/`: Larger page sections
  * `ui/`: Reusable UI components (often from shadcn/ui)
  * `layout/`: Layout-related components
* **`public/`**: Stores static assets like images, fonts, and other files that are served directly. ([public/](mdc:public))
* **`styles/`**: Contains global styles, CSS variables, and theme configurations. ([styles/](mdc:styles))
* **`lib/`**: Utility functions, helper scripts, and shared library code. ([lib/](mdc:lib))
* **`hooks/`: Custom React hooks for reusable stateful logic. ([hooks/](mdc:hooks))

## Configuration Files

* **`next.config.mjs`**: Next.js configuration file. ([next.config.mjs](mdc:next.config.mjs))
* **`tailwind.config.ts`**: Tailwind CSS configuration with custom theme settings. ([tailwind.config.ts](mdc:tailwind.config.ts))
* **`tsconfig.json`**: TypeScript configuration with strict type checking. ([tsconfig.json](mdc:tsconfig.json))
* **`package.json`**: Project dependencies and scripts. ([package.json](mdc:package.json))
* **`postcss.config.mjs`**: PostCSS configuration. ([postcss.config.mjs](mdc:postcss.config.mjs))

## Generated Directories (Do not commit)

* **`.next/`**: Next.js build output. Automatically generated and should not be committed.
* **`node_modules/`**: Project dependencies installed via package manager.
* **`.git/`**: Git version control directory.
* **`.cursor/`**: Cursor IDE configuration.
