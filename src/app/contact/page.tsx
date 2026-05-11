import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'らがSEへのお問い合わせページ。ブログへのご意見・Webサイト制作のご相談・取材依頼などはこちらからお気軽にどうぞ。',
}

export default function ContactPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black mb-4" style={{ color: '#1A1A2E' }}>
        お問い合わせ
      </h1>
      <p className="text-gray-600 text-sm mb-10">
        ブログへのご意見・ご感想、Webサイト制作のご相談、取材・コラボレーションのご依頼など、お気軽にご連絡ください。
      </p>

      <div className="space-y-6">
        {/* X DM */}
        <div className="p-6 bg-white rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
          <h2 className="font-black text-base mb-1" style={{ color: '#1A1A2E' }}>
            X（旧Twitter）DM
          </h2>
          <p className="text-sm text-gray-500 mb-3">最も早く対応できます（通常24時間以内）</p>
          <a
            href="https://x.com/0mcEq1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg font-bold text-white text-sm"
            style={{ background: '#1A1A2E' }}
          >
            @0mcEq1 にDMを送る
          </a>
        </div>

        {/* Threads */}
        <div className="p-6 bg-white rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
          <h2 className="font-black text-base mb-1" style={{ color: '#1A1A2E' }}>
            Threads
          </h2>
          <p className="text-sm text-gray-500 mb-3">記事の感想・コメントはこちらでも受け付けています</p>
          <a
            href="https://www.threads.net/@ch_ragge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg font-bold text-white text-sm"
            style={{ background: '#1A1A2E' }}
          >
            @ch_ragge に送る
          </a>
        </div>

        {/* note */}
        <div className="p-6 bg-white rounded-xl border" style={{ borderColor: '#e5e7eb' }}>
          <h2 className="font-black text-base mb-1" style={{ color: '#1A1A2E' }}>
            note コメント
          </h2>
          <p className="text-sm text-gray-500 mb-3">有料記事・無料記事へのコメントも歓迎しています</p>
          <a
            href="https://note.com/ch_ragga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-5 py-2 rounded-lg font-bold text-white text-sm"
            style={{ background: '#00B4D8' }}
          >
            noteを見る
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-12">
        <h2 className="text-lg font-black mb-6" style={{ color: '#1A1A2E' }}>よくある質問</h2>
        <div className="space-y-4">
          <div className="p-5 rounded-xl" style={{ background: '#f0fbff' }}>
            <p className="font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
              Webサイト制作の相談はできますか？
            </p>
            <p className="text-sm text-gray-600">
              はい、対応しています。シンプルなHTMLサイトから、Next.jsを使ったWebアプリまでご相談ください。まずはX（@0mcEq1）のDMでお気軽にどうぞ。
            </p>
          </div>
          <div className="p-5 rounded-xl" style={{ background: '#f0fbff' }}>
            <p className="font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
              記事の内容について質問があります
            </p>
            <p className="text-sm text-gray-600">
              X（@0mcEq1）またはThreads（@ch_ragge）にて受け付けています。内容によっては記事として取り上げることもあります。
            </p>
          </div>
          <div className="p-5 rounded-xl" style={{ background: '#f0fbff' }}>
            <p className="font-bold text-sm mb-1" style={{ color: '#1A1A2E' }}>
              返信にはどのくらいかかりますか？
            </p>
            <p className="text-sm text-gray-600">
              通常は24〜48時間以内に返信しています。メイン案件の状況によっては数日お時間をいただく場合があります。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
