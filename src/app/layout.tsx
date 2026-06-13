import type { Metadata } from 'next'
import { Inter, Noto_Sans_JP } from 'next/font/google'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const notoSansJP = Noto_Sans_JP({
  subsets: ['latin'],
  variable: '--font-noto-sans-jp',
  display: 'swap',
})

const SITE_URL = 'https://ch-ragge.github.io/blog'

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: 'らがSE｜フリーランスSE × AIツール × Claude Code',
    template: '%s | らがSE',
  },
  description:
    'フリーランスSEが実践するAIツール活用・Claude Code・上流案件獲得のノウハウを発信。SE単価シミュレーターなど無料ツールも公開中。',
  alternates: {
    canonical: `${SITE_URL}/`,
  },
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'らがSE',
    url: SITE_URL,
    title: 'らがSE｜フリーランスSE × AIツール × Claude Code',
    description:
      'フリーランスSEが実践するAIツール活用・Claude Code・上流案件獲得のノウハウを発信。SE単価シミュレーターなど無料ツールも公開中。',
  },
}

// サイト全体の構造化データ（WebSite + 運営者 Person）
const siteJsonLd = {
  '@context': 'https://schema.org',
  '@graph': [
    {
      '@type': 'WebSite',
      '@id': `${SITE_URL}/#website`,
      url: `${SITE_URL}/`,
      name: 'らがSE',
      description:
        'フリーランスSEが実践するAIツール活用・Claude Code・上流案件獲得のノウハウを発信するブログ。',
      inLanguage: 'ja',
    },
    {
      '@type': 'Person',
      '@id': `${SITE_URL}/#person`,
      name: 'らがSE',
      url: `${SITE_URL}/about/`,
      jobTitle: 'フリーランスシステムエンジニア',
      description:
        '元自衛官のフリーランスSE。サーバー設計・構築・移行などの上流工程を中心に、Claude Code・AIツール活用のノウハウを発信。',
      sameAs: [
        'https://x.com/0mcEq1',
        'https://www.threads.net/@ch_ragge',
        'https://www.instagram.com/ch_ragge',
        'https://note.com/ch_ragga',
      ],
    },
  ],
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja" className={`${inter.variable} ${notoSansJP.variable}`}>
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8605756757695015"
          crossOrigin="anonymous"
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(siteJsonLd) }}
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1 pt-12">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
