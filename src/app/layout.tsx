import { inter400, inter700, playfair400 } from '@/styles/fonts'
import '@/styles/globals.css'
import { Metadata } from 'next'

export const metadata: Metadata = {
  title: {
    default: 'Template FULLSTACK Nextjs por Livio Alvarenga | ',
    template: 'Template FULLSTACK Nextjs por Livio Alvarenga | %s',
  },
  description:
    'O Template FULLSTACK Nextjs de Livio Alvarenga é um template altamente eficaz. Desenvolvido com tecnologias modernas como Nextjs 13, React, TypeScript, Tailwindcss e Axios, este template oferece uma maneira eficiente de iniciar seu projeto.',
  keywords:
    'nextjs, react, typescript, tailwindcss, axios, template, fullstack, livio alvarenga',
  manifest: '/manifest.json',
  appleWebApp: {
    title: 'Template FULLSTACK Nextjs por Livio Alvarenga',
    statusBarStyle: 'black-translucent',
    startupImage: [
      '/apple_splash_2048.png',
      {
        url: '/apple_splash_1668.png',
        media: '(min-device-width: 1536px) and (max-device-width: 1668px)',
      },
      {
        url: '/apple_splash_1536.png',
        media: '(min-device-width: 1242px) and (max-device-width: 1536px)',
      },
      {
        url: '/apple_splash_1242.png',
        media: '(min-device-width: 1125px) and (max-device-width: 1242px)',
      },
      {
        url: '/apple_splash_1125.png',
        media: '(min-device-width: 750px) and (max-device-width: 1125px)',
      },
      {
        url: '/apple_splash_750.png',
        media: '(min-device-width: 640px) and (max-device-width: 750px)',
      },
      {
        url: '/apple_splash_640.png',
        media: '(max-device-width: 640px)',
      },
    ],
  },
  openGraph: {
    title: 'Template FULLSTACK Nextjs por Livio Alvarenga',
    description:
      'O Template FULLSTACK Nextjs de Livio Alvarenga é um template altamente eficaz. Desenvolvido com tecnologias modernas como Nextjs 13, React, TypeScript, Tailwindcss e Axios, este template oferece uma maneira eficiente de iniciar seu projeto.',
    url: 'https://', // ! TODO: Change this URL
    siteName: 'Template FULLSTACK Nextjs por Livio Alvarenga',
    images: [
      // TODO: Update these image URLs and dimensions
      {
        url: '/logo-og-800-600.png',
        width: 800,
        height: 600,
        alt: 'Logo Livio Alvarenga',
      },
      {
        url: '/logo-og-1800-1600.png',
        width: 1800,
        height: 1600,
        alt: 'Logo Livio Alvarenga',
      },
    ],
    locale: 'pt_BR',
    type: 'website',
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  themeColor: [
    { media: '(prefers-color-scheme: light)', color: '#e5e7eb' },
    { media: '(prefers-color-scheme: dark)', color: '#39322f' },
  ],
  twitter: {
    card: 'summary_large_image',
    title: 'Template FULLSTACK Nextjs por Livio Alvarenga',
    description:
      'O Template FULLSTACK Nextjs de Livio Alvarenga é um template altamente eficaz. Desenvolvido com tecnologias modernas como Nextjs 13, React, TypeScript, Tailwindcss e Axios, este template oferece uma maneira eficiente de iniciar seu projeto.',
    creator: '@AlvarengaLivio',
    creatorId: 'https://twitter.com/AlvarengaLivio',
    images: [
      '/logo-og-800-600.png', // TODO: Update this image URL
    ],
  },
  viewport: {
    width: 'device-width',
    initialScale: 1,
  },
  verification: {
    google: 'your-google-verification-code', // ! TODO: Change this
  },
  alternates: {
    canonical: 'https://', // ! TODO: Change this URL
    languages: {
      'pt-BR': 'https://', // ! TODO: Change this URL
    },
  },
  category: 'Template FULLSTACK Nextjs por Livio Alvarenga',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-br">
      <body
        className={`${inter400.variable} ${inter700.variable} ${playfair400.variable} min-h-screen scroll-smooth bg-l-100 font-inter400 text-base font-normal leading-normal tracking-[.031rem] text-l-1000 selection:bg-primary selection:text-white`}
      >
        {children}
      </body>
    </html>
  )
}
