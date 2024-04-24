// /** @type {import('next').NextConfig} */
// const nextConfig = {};

// module.exports = nextConfig;

/** @type {import('next').NextConfig} */

module.exports = {
  swcMinify: true,
  images: {
    domains: ['imgix.cosmicjs.com'],
    formats: ['image/avif', 'image/webp'],
  },
};
