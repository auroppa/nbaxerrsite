/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nbaxerrsite',
  assetPrefix: '/nbaxerrsite',
  images: { unoptimized: true },
  distDir: 'dist',
  trailingSlash: true,
}

module.exports = nextConfig 