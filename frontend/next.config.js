/** @type {import('next').NextConfig} */
const nextConfig = {
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**',
      },
    ],
  },
  // Experimental features
  // experimental: {
  //   optimizeCss: true,
  // },
}

module.exports = nextConfig
