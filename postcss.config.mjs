/** @type {import('postcss-load-config').Config} */
const config = {
  plugins: {
    // Tailwind v4 doesn't use PostCSS plugins
    // All Tailwind processing is handled via @import "tailwindcss"
  },
};

export default config;
