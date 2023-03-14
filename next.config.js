/** @type {import('next').NextConfig} */
const nextConfig = {
  reactStrictMode: true,
  images: {
    remotePatterns: [
      {
        protocol: 'https',
        hostname: '**.dl.dropboxusercontent.com',
      },
    ],
  },
}

module.exports = nextConfig
