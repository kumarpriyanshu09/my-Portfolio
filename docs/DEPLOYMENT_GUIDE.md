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

- Node.js 18.0.0 or later
- npm or yarn package manager
- Git
- Vercel or Netlify account (for deployment)

## Environment Variables

Create a `.env.local` file in the root directory with the following variables:

```env
# Analytics
NEXT_PUBLIC_GA_MEASUREMENT_ID=G-XXXXXXXXXX
NEXT_PUBLIC_FACEBOOK_PIXEL_ID=XXXXXXXXXX

# Contact Form
NEXT_PUBLIC_FORMSPREE_FORM_ID=your-form-id

# Optional: API Keys
NEXT_PUBLIC_GITHUB_TOKEN=your-github-token
NEXT_PUBLIC_LINKEDIN_TOKEN=your-linkedin-token
```

## Local Development

1. Clone the repository:
   ```bash
   git clone https://github.com/kumarpriyanshu09/heyitspriyanshu.git
   cd heyitspriyanshu
   ```

2. Install dependencies:
   ```bash
   npm install
   # or
   yarn install
   ```

3. Start the development server:
   ```bash
   npm run dev
   # or
   yarn dev
   ```

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
     - Build Command: `npm run build` or `yarn build`
     - Output Directory: `.next`
     - Install Command: `npm install` or `yarn install`
   - Add environment variables
   - Click "Deploy"

### Manual Deployment

1. Install Vercel CLI:
   ```bash
   npm install -g vercel
   ```

2. Run the following command and follow the prompts:
   ```bash
   vercel
   ```

## Netlify Deployment

### Automatic Deployment

1. Push your code to a Git repository.
2. Log in to [Netlify](https://app.netlify.com/)
3. Click "Sites" > "Import an existing project"
4. Connect to your Git provider and select the repository
5. Configure build settings:
   - Build command: `npm run build` or `yarn build`
   - Publish directory: `.next`
   - Add environment variables
6. Click "Deploy site"

### Manual Deployment

1. Build the project:
   ```bash
   npm run build
   # or
   yarn build
   ```

2. Install Netlify CLI:
   ```bash
   npm install -g netlify-cli
   ```

3. Deploy:
   ```bash
   netlify deploy --prod
   ```

## Static Export

To generate a static version of your site:

1. Update `next.config.js` to enable static exports:
   ```js
   /** @type {import('next').NextConfig} */
   const nextConfig = {
     output: 'export',
     // Optional: Add a trailing slash for GitHub Pages
     // trailingSlash: true,
   }
   
   module.exports = nextConfig
   ```

2. Build the static site:
   ```bash
   npm run build
   # or
   yarn build
   ```

3. The static files will be in the `out` directory.

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
   ```bash
   rm -rf node_modules package-lock.json
   npm install
   ```

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
   ```bash
   export NODE_OPTIONS=--max_old_space_size=4096
   npm run build
   ```

3. **Deployment Hanging**
   - Check build logs for errors
   - Increase build timeout in deployment settings if needed

## Monitoring

- **Vercel**: Built-in analytics and monitoring
- **Sentry**: Error tracking
- **Google Analytics**: Traffic and user behavior

## Security

1. **Environment Variables**
   - Never commit sensitive data to version control
   - Use platform secrets for production

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
