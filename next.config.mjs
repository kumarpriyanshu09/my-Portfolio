/** @type {import('next').NextConfig} */
const nextConfig = {
  experimental: {
    scrollRestoration: false, // Disable Next.js built-in scroll restoration to handle it manually
  },
  reactStrictMode: true,
  swcMinify: true,
  eslint: {
    ignoreDuringBuilds: true,
  },
  typescript: {
    ignoreBuildErrors: true,
  },
  images: {
    unoptimized: true,
  },
}

export default nextConfig
