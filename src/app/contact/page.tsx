import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'お問い合わせ',
  description: 'らがSEへのお問い合わせページ。ブログへのご意見・Webサイト制作のご相談・取材依頼などはこちらからお気軽にどうぞ。',
  alternates: { canonical: 'https://ch-ragge.github.io/blog/contact/' },
}

export default function ContactPage() {
  return (
    <div className="mx-auto max-w-2xl px-6 py-20 sm:py-24">
      <h1 className="mb-4 text-4xl font-bold tracking-tight text-ink">
        お問い合わせ
      </h1>
      <p className="mb-12 text-sm text-subtle">
        ブログへのご意見・ご感想、Webサイト制作のご相談、取材・コラボレーションのご依頼など、お気軽にご連絡ください。
      </p>

      <div className="space-y-4">
        {/* X DM */}
        <div className="rounded-3xl bg-surface p-6">
          <h2 className="mb-1 text-base font-bold text-ink">
            X（旧Twitter）DM
          </h2>
          <p className="mb-4 text-sm text-subtle">最も早く対応できます（通常24時間以内）</p>
          <a
            href="https://x.com/0mcEq1"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
          >
            @0mcEq1 にDMを送る
          </a>
        </div>

        {/* Threads */}
        <div className="rounded-3xl bg-surface p-6">
          <h2 className="mb-1 text-base font-bold text-ink">
            Threads
          </h2>
          <p className="mb-4 text-sm text-subtle">記事の感想・コメントはこちらでも受け付けています</p>
          <a
            href="https://www.threads.net/@ch_ragge"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-dark px-5 py-2 text-sm font-semibold text-white transition-[filter] hover:brightness-110"
          >
            @ch_ragge に送る
          </a>
        </div>

        {/* note */}
        <div className="rounded-3xl bg-surface p-6">
          <h2 className="mb-1 text-base font-bold text-ink">
            note コメント
          </h2>
          <p className="mb-4 text-sm text-subtle">有料記事・無料記事へのコメントも歓迎しています</p>
          <a
            href="https://note.com/ch_ragga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-5 py-2 text-sm font-semibold text-dark transition-[filter] hover:brightness-105"
          >
            noteを見る
          </a>
        </div>
      </div>

      {/* FAQ */}
      <div className="mt-16">
        <h2 className="mb-6 text-xl font-bold tracking-tight text-ink">よくある質問</h2>
        <div className="space-y-4">
          <div className="rounded-3xl bg-surface p-6">
            <p className="mb-1 text-sm font-bold text-ink">
              Webサイト制作の相談はできますか？
            </p>
            <p className="text-sm text-subtle">
              はい、対応しています。シンプルなHTMLサイトから、Next.jsを使ったWebアプリまでご相談ください。まずはX（@0mcEq1）のDMでお気軽にどうぞ。
            </p>
          </div>
          <div className="rounded-3xl bg-surface p-6">
            <p className="mb-1 text-sm font-bold text-ink">
              記事の内容について質問があります
            </p>
            <p className="text-sm text-subtle">
              X（@0mcEq1）またはThreads（@ch_ragge）にて受け付けています。内容によっては記事として取り上げることもあります。
            </p>
          </div>
          <div className="rounded-3xl bg-surface p-6">
            <p className="mb-1 text-sm font-bold text-ink">
              返信にはどのくらいかかりますか？
            </p>
            <p className="text-sm text-subtle">
              通常は24〜48時間以内に返信しています。メイン案件の状況によっては数日お時間をいただく場合があります。
            </p>
          </div>
        </div>
      </div>
    </div>
  )
}
