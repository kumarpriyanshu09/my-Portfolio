# Deployment Guide

This guide provides instructions for deploying the portfolio application to various hosting platforms.

## Table of Contents

- [Prerequisites](#prerequisites)
- [Environment Variables](#environment-variables)
- [Local Development](#local-development)
- [Vercel Deployment](#vercel-deployment)
- [Netlify Deployment](#netlify-deployment)
- [Static Export](#static-export)
- [Environment Configuration](#environment-configuration)
- [Troubleshooting](#troubleshooting)

## Prerequisites

- Node.js 18.0.0 or later (as implied by modern Next.js usage)
- npm, yarn, or pnpm package manager (project uses `pnpm-lock.yaml`)
- Git
- Vercel or Netlify account (for deployment)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

\`\`\`env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX

# Contact Form
NEXT_PUBLIC_FORMSPREE_FORM_ID=your-form-id

# Optional: API Keys (use server-side environment variables for sensitive tokens)
# GITHUB_API_TOKEN=your-github-token (server-side only)
# LINKEDIN_API_TOKEN=your-linkedin-token (server-side only)
\`\`\`

## Local Development

1. Clone the repository:
   \`\`\`bash
   git clone https://github.com/kumarpriyanshu09/heyitspriyanshu.git
   cd heyitspriyanshu
   \`\`\`

2. Install dependencies:
   \`\`\`bash
   npm install
   # or
   yarn install
   # or
   pnpm install
   \`\`\`

3. Start the development server:
   \`\`\`bash
   npm run dev
   # or
   yarn dev
   # or
   pnpm dev
   \`\`\`

4. Open [http://localhost:3000](http://localhost:3000) in your browser.

## Vercel Deployment

### Automatic Deployment

1. Push your code to a GitHub, GitLab, or Bitbucket repository.
2. Import the repository to Vercel:
   - Go to [Vercel Dashboard](https://vercel.com/dashboard)
   - Click "Add New" > "Project"
   - Import your repository
   - Configure project settings:
     - Framework Preset: Next.js
     - Root Directory: (leave empty if root)
     - Build Command: `next build` (or `npm run build`, `yarn build`, `pnpm build`)
     - Output Directory: `.next` (default for Next.js)
     - Install Command: `npm install` or `yarn install` or `pnpm install`
   - Add environment variables in the Vercel project settings.
   - Click "Deploy"
   - The project uses Vercel Analytics (`@vercel/analytics`), Speed Insights (`@vercel/speed-insights`), and potentially Vercel Blob (`@vercel/blob`), which integrate well with Vercel deployments.

### Manual Deployment

1. Install Vercel CLI:
   \`\`\`bash
   npm install -g vercel
   \`\`\`

2. Run the following command and follow the prompts:
   \`\`\`bash
   vercel
   \`\`\`

## Netlify Deployment

### Automatic Deployment

1. Push your code to a Git repository.
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "Sites" > "Import an existing project"
4. Connect to your Git provider and select the repository
5. Configure build settings:
   - Build command: `next build` (or `npm run build`, `yarn build`, `pnpm build`)
   - Publish directory: `.next` (default for Next.js)
   - Add environment variables in Netlify site settings.
6. Click "Deploy site"

### Manual Deployment

1. Build the project:
   \`\`\`bash
   npm run build
   # or
   yarn build
   # or
   pnpm build
   \`\`\`

2. Install Netlify CLI:
   \`\`\`bash
   npm install -g netlify-cli
   \`\`\`

3. Deploy:
   \`\`\`bash
   netlify deploy --prod
   \`\`\`

## Static Export

To generate a static version of your site (e.g., for hosting on platforms that only serve static files):

1.  **Important**: The current `next.config.mjs` does **not** have `output: 'export'` configured. To enable static export, you would need to modify `next.config.mjs`:
    \`\`\`javascript
    // next.config.mjs
    /** @type {import('next').NextConfig} */
    const nextConfig = {
      output: 'export', // Add this line
      experimental: {
        scrollRestoration: false,
        optimizeCss: true,
      },
      reactStrictMode: true,
      // ... other configurations
    };
    export default nextConfig;
    \`\`\`
    *Note: Enabling static export may disable or change the behavior of certain Next.js features like API routes or dynamic rendering strategies.*

2.  Build and export the static site:
    \`\`\`bash
    npm run build && npx next export
    # or
    yarn build && yarn next export
    # or
    pnpm build && pnpm next export
    \`\`\`
    This will generate the static files in the `out` directory by default.

## Environment Configuration

### Development vs Production

- Development: Uses `.env.development` or `.env.local`
- Production: Uses `.env.production` or `.env`

### Required Environment Variables

| Variable | Description | Required | Default |
|----------|-------------|----------|---------|
| `NEXT_PUBLIC_SITE_URL` | Site URL | Yes | `http://localhost:3000` |
| `NEXT_PUBLIC_GA_MEASUREMENT_ID` | Google Analytics ID | No | - |
| `NEXT_PUBLIC_FORMSPREE_FORM_ID` | Formspree form ID | No | - |

### Optional Environment Variables

| Variable | Description | Default |
|----------|-------------|---------|
| `NEXT_PUBLIC_TWITTER_USERNAME` | Twitter username | - |
| `NEXT_PUBLIC_GITHUB_USERNAME` | GitHub username | - |
| `NEXT_PUBLIC_LINKEDIN_USERNAME` | LinkedIn username | - |

## Troubleshooting

### Build Failures

1. **Node.js Version Mismatch**
   - Ensure you're using Node.js 18.0.0 or later
   - Use `.nvmrc` or `engines` in `package.json` to specify the Node.js version

2. **Missing Dependencies**
   \`\`\`bash
   rm -rf node_modules package-lock.json yarn.lock pnpm-lock.yaml
   npm install # or yarn install or pnpm install
   \`\`\`

3. **Environment Variables**
   - Ensure all required environment variables are set
   - Check for typos in variable names

### Performance Issues

1. **Image Optimization**
   - Use the Next.js `Image` component
   - Optimize image sizes before uploading
   - Use WebP format when possible

2. **Bundle Size**
   - Analyze bundle size with `@next/bundle-analyzer`
   - Code split large components
   - Use dynamic imports for heavy dependencies

### Common Errors

1. **Module Not Found**
   - Clear npm/yarn cache
   - Reinstall dependencies

2. **Build Memory Issues**
   \`\`\`bash
   export NODE_OPTIONS=--max_old_space_size=4096
   npm run build
   \`\`\`

3. **Deployment Hanging**
   - Check build logs for errors
   - Increase build timeout in deployment settings if needed

## Monitoring

- **Vercel**: Provides built-in Analytics and Speed Insights, which this project utilizes (see `package.json`).
- **Sentry**: Not currently listed as a dependency. For error tracking, consider integrating a service like Sentry if needed.
- **Google Analytics**: Can be integrated if `NEXT_PUBLIC_GA_MEASUREMENT_ID` is configured.

## Security

1. **Environment Variables**
   - Never commit sensitive data to version control
   - Use platform secrets for production
   - Keep sensitive API tokens server-side only (without NEXT_PUBLIC_ prefix)

2. **Dependencies**
   - Regularly update dependencies
   - Use `npm audit` to check for vulnerabilities

3. **CORS**
   - Configure CORS headers if using external APIs
   - Use Next.js API routes as a proxy when needed

## Maintenance

1. **Updates**
   - Regularly update Next.js and other dependencies
   - Follow the [Next.js upgrade guide](https://nextjs.org/docs/upgrading)

2. **Backups**
   - Regularly backup your database (if any)
   - Use version control for all code changes

3. **Performance Monitoring**
   - Monitor Core Web Vitals
   - Set up alerts for performance regressions
