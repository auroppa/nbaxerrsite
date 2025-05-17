/** @type {import('next').NextConfig} */
const nextConfig = {
  output: 'export',
  images: {
    unoptimized: true,
    loader: 'custom',
    loaderFile: './src/utils/imageLoader.ts',
  },
  basePath: '/nbaxerrsite',
  assetPrefix: '/nbaxerrsite',
  trailingSlash: true,
}

module.exports = nextConfig 