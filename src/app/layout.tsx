import type { Metadata } from 'next'
import './globals.css'
import Header from '@/components/Header'
import Footer from '@/components/Footer'

export const metadata: Metadata = {
  title: {
    default: 'らがSE｜フリーランスSE × AIツール × Claude Code',
    template: '%s | らがSE',
  },
  description:
    'フリーランスSE13年目が実践するAIツール活用・Claude Code・上流案件獲得のノウハウを発信。SE単価シミュレーターなど無料ツールも公開中。',
  openGraph: {
    type: 'website',
    locale: 'ja_JP',
    siteName: 'らがSE',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <head>
        <script
          async
          src="https://pagead2.googlesyndication.com/pagead/js/adsbygoogle.js?client=ca-pub-8605756757695015"
          crossOrigin="anonymous"
        />
      </head>
      <body className="min-h-screen flex flex-col">
        <Header />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
