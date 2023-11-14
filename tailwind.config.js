/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
    },
    colors: {
      color: {
        primary: '#0E0E0E',
        ascend: '#D1ECF1',
        secondary: '#F45C43',
        etc: '#1C1C1C',
        grading: '#94E1EF',
        putih: '#FFFFFF',
        darksec: '#9F2B00',
        lightsec: '#ff5d00',
        coalcolor: '#0e171a',
      }
    }
  },
  plugins: [],
}
