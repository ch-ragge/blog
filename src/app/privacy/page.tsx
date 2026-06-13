import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プライバシーポリシー',
  description: 'らがSE（当サイト）のプライバシーポリシー。Cookie・Google AdSense・アクセス解析・アフィリエイト・免責事項について記載しています。',
  alternates: { canonical: 'https://ch-ragge.github.io/blog/privacy/' },
}

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
      <h1 className="mb-10 text-4xl font-bold tracking-tight text-ink">プライバシーポリシー</h1>

      <div className="max-w-none space-y-8 leading-relaxed text-ink">
        <section>
          <p>らがSE（以下「当サイト」）は、ユーザーの個人情報の取り扱いについて以下のとおりプライバシーポリシーを定めます。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">広告について</h2>
          <p>当サイトでは、Google AdSenseを利用した広告を掲載しています。Google AdSenseはCookieを使用して、ユーザーがそのサイトや他のサイトにアクセスした際の情報に基づいて広告を配信します。</p>
          <p className="mt-2">Googleによる広告のCookieの使用はオプトアウトできます。詳しくは<a href="https://policies.google.com/technologies/ads" target="_blank" rel="noopener noreferrer" className="text-accent underline">Googleの広告ポリシー</a>をご覧ください。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">アクセス解析について</h2>
          <p>当サイトでは、サイトの改善を目的としてGoogle Analyticsを使用する場合があります。Google Analyticsはトラフィックデータの収集にCookieを使用します。このデータは匿名で収集されており、個人を特定するものではありません。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">アフィリエイトについて</h2>
          <p>当サイトは、Amazonアソシエイト・プログラムの参加者です。当サイトのリンクを通じてAmazonで商品を購入した場合、当サイトに報酬が支払われることがあります。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">免責事項</h2>
          <p>当サイトの情報は可能な限り正確なものを掲載しておりますが、内容の正確性・安全性を保証するものではありません。掲載情報によって生じたいかなる損害についても、当サイトは一切の責任を負いません。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">著作権</h2>
          <p>当サイトの文章・画像等の著作権は運営者に帰属します。無断転載・複製はお断りします。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">プライバシーポリシーの変更</h2>
          <p>本ポリシーの内容は予告なく変更することがあります。変更後のポリシーは当ページに掲載した時点から効力を生じるものとします。</p>
        </section>

        <section>
          <h2 className="mb-3 text-xl font-bold text-ink">お問い合わせ</h2>
          <p>当サイトへのお問い合わせは、<a href="https://x.com/0mcEq1" target="_blank" rel="noopener noreferrer" className="text-accent underline">X（@0mcEq1）</a>のDMにてご連絡ください。</p>
        </section>

        <p className="text-sm text-subtle">制定日：2026年4月22日</p>
      </div>
    </main>
  )
}
