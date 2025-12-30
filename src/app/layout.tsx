import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Octolabs | Desenvolvimento de Software em São Paulo',
  description: 'Desenvolvimento de software personalizado: aplicações web, mobile, integrações e consultoria tech. Soluções digitais que abraçam seu negócio por completo.',
  keywords: 'desenvolvimento software, aplicativo mobile, sistema web, react, next.js, são paulo, consultoria tech',
  authors: [{ name: 'Octolabs' }],
  icons: {
    icon: [
      { url: '/favicon.svg', type: 'image/svg+xml' },
      { url: '/logo.png', type: 'image/png' },
    ],
    apple: '/logo.png',
    shortcut: '/favicon.svg',
  },
  openGraph: {
    title: 'Octolabs - Software que abraça seu negócio',
    description: 'Desenvolvimento web, mobile e integrações com qualidade e precisão.',
    type: 'website',
    locale: 'pt_BR',
    siteName: 'Octolabs',
    images: ['/logo.png'],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Octolabs - Desenvolvimento de Software',
    description: '8 braços trabalhando no seu projeto. Zero bugs.',
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="pt-BR">
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify({
              '@context': 'https://schema.org',
              '@type': 'ProfessionalService',
              name: 'Octolabs',
              description: 'Desenvolvimento de software personalizado - Web, Mobile e Integrações',
              url: 'https://octolabs.com.br',
              logo: 'https://octolabs.com.br/logo.png',
              image: 'https://octolabs.com.br/logo.png',
              telephone: '+55-31-99150-8940',
              email: 'ejrocha07@gmail.com',
              priceRange: '$$',
              contactPoint: {
                '@type': 'ContactPoint',
                telephone: '+55-31-99150-8940',
                contactType: 'sales',
                availableLanguage: ['Portuguese'],
              },
              address: {
                '@type': 'PostalAddress',
                addressLocality: 'Belo Horizonte',
                addressRegion: 'MG',
                addressCountry: 'BR',
              },
              geo: {
                '@type': 'GeoCoordinates',
                latitude: -19.9167,
                longitude: -43.9345,
              },
              aggregateRating: {
                '@type': 'AggregateRating',
                ratingValue: '5.0',
                reviewCount: '30',
                bestRating: '5',
                worstRating: '1',
              },
              sameAs: [
                'https://www.linkedin.com/in/enokjrocha/',
                'https://github.com/enokjanuario',
              ],
            }),
          }}
        />
      </head>
      <body className="antialiased">
        <div className="noise-overlay" />
        {children}
      </body>
    </html>
  )
}
