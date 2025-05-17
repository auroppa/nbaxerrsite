/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    remotePatterns: [],
  },
  basePath: process.env.NODE_ENV === 'production' ? '/nbaxerrsite' : '',
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nbaxerrsite' : '',
  reactStrictMode: true,
  swcMinify: true,
  trailingSlash: true,
  webpack: (config) => {
    config.resolve.fallback = { fs: false, path: false };
    return config;
  },
}

module.exports = nextConfig 