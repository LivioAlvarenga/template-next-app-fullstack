import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        inter400: 'var(--font-inter400)',
        inter700: 'var(--font-inter700)',
        playfair400: 'var(--font-playfair400)',
      },
      colors: {
        'l-100': '#f2f2f2',
        'l-200': '#ececec',
        'l-300': '#e6e6e6',
        'l-400': '#e0e0e0',
        'l-500': '#cacaca',
        'l-600': '#a8a8a8',
        'l-700': '#8f8f8f',
        'l-800': '#7d7d7d',
        'l-900': '#666666',
        'l-1000': '#171717',
        'd-100': '#1A1A1A',
        'd-200': '#1F1F1F',
        'd-300': '#292929',
        'd-400': '#2E2E2E',
        'd-500': '#454545',
        'd-600': '#878787',
        'd-700': '#8F8F8F',
        'd-800': '#7D7D7D',
        'd-900': '#A0A0A0',
        'd-1000': '#EEEEEE',
        primary: '#26a9e0',
        secondary: '#57585a',
        tertiary: '#1f87b5',
        'green-300': '#00B37E',
        'green-500': '#00875F',
        'green-700': '#015F43',
        'red-300': '#F75A68',
        'red-500': '#AB222E',
        'red-700': '#7A1921',
      },
    },
  },
  plugins: [],
}
export default config
