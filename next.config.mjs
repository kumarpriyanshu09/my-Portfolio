/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: false, // Disable Next.js built-in scroll restoration to handle it manually
    optimizeCss: true, // Enable CSS optimization with critters
  },
  reactStrictMode: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  // Enable image optimization for better performance, especially on mobile
  images: {
    unoptimized: false,
    domains: ['7qd5tdgxs26x480g.public.blob.vercel-storage.com'],
    formats: ['image/avif', 'image/webp'],
  },
  // Configure headers for better caching of static assets
  async headers() {
    return [
      {
        source: '/:path*',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
      {
        // Add specific caching for video files
        source: '/:path*.mp4',
        headers: [
          {
            key: 'Cache-Control',
            value: 'public, max-age=31536000, immutable',
          },
        ],
      },
    ];
  },
}

export default nextConfig
