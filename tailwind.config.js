/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#FF9400',
          dark: '#CC7700',
          light: '#FFAD33',
        },
        dark: {
          DEFAULT: '#1A1A1A',
          light: '#2D2D2D',
          lighter: '#3D3D3D',
          dark: '#111111',
        }
      },
      gridTemplateColumns: {
        'cards': 'repeat(auto-fit, minmax(300px, 1fr))',
      },
      spacing: {
        '128': '32rem',
      }
    },
  },
  plugins: [],
} 