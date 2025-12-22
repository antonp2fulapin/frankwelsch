/**
 * @type {import('next').NextConfig}
 *
 * Next.js configuration for the Frank Welsch legal information site.
 *
 * This configuration enables strict mode and typed routes, and sets up
 * German as the default locale. Additional configuration options can be
 * adjusted as the project evolves.
 */
const nextConfig = {
  // Enable React strict mode for catching potential issues
  reactStrictMode: true,

  // Enable TypeScript type generation for routes in the App Router
  experimental: {
    typedRoutes: true,
  },

  // Internationalization settings – default to German locale
  i18n: {
    locales: ['de'],
    defaultLocale: 'de',
  },

  // Image configuration – domains can be added via environment variables if needed
  images: {
    domains: [],
  },
};

module.exports = nextConfig;
