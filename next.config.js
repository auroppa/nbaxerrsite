/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  basePath: '/nbaxerrsite',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './image-loader.js'
  },
  assetPrefix: '/nbaxerrsite',
  trailingSlash: true,
}

module.exports = nextConfig 