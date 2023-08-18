import { withTV } from 'tailwind-variants/transformer'
import plugin from 'tailwindcss/plugin'
import {
  accessibilityFocus,
  animation,
  borderRadius,
  colors,
  fontFamily,
  fontSize,
  keyframes,
  lineHeight,
  utilities,
} from './src/styles/theme/tokens'

/** @type {import('tailwindcss').Config} */
module.exports = withTV({
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
    './src/styles/theme/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: 'class',
  theme: {
    extend: {
      borderRadius,
      colors,
      fontFamily,
      fontSize,
      lineHeight,
      keyframes,
    },
    animation,
  },
  plugins: [
    plugin(function ({ addUtilities, addComponents }) {
      addUtilities(utilities)
      addComponents(accessibilityFocus)
    }),
  ],
})
