import { Inter, Playfair_Display as Playfair } from 'next/font/google'
// import localFont from 'next/font/local'

const sans400 = Inter({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-sans400',
  display: 'swap',
})

const sans700 = Inter({
  weight: '700',
  subsets: ['latin'],
  variable: '--font-sans700',
  display: 'swap',
})

const serif400 = Playfair({
  weight: '400',
  subsets: ['latin'],
  variable: '--font-serif400',
  display: 'swap',
})

// To use personal fonts, add localFontName.woff2 in web/src/styles/fonts folder
// const localFont = localFont({
//   src: './localFontName.woff2',
//   variable: '--font-localFontName',
//   display: 'swap',
//   weight: '400',
// })
// Don't forget to export localFont below

export { sans400, sans700, serif400 }

