/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: process.env.NODE_ENV === 'production' ? '/nbaxerrsite' : '',
  images: {
    unoptimized: true,
  },
  assetPrefix: process.env.NODE_ENV === 'production' ? '/nbaxerrsite' : '',
  distDir: 'dist',
  trailingSlash: true,
  reactStrictMode: true,
}

module.exports = nextConfig 