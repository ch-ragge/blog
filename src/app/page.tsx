import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section style={{ background: '#1A1A2E' }} className="text-white py-16 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <p className="text-sm font-bold mb-3" style={{ color: '#00B4D8' }}>
            フリーランスSE × AIツール × Claude Code
          </p>
          <h1 className="text-3xl md:text-4xl font-black leading-tight mb-4">
            現場で使えるノウハウを、<br />そのまま公開する。
          </h1>
          <p className="text-gray-300 text-base leading-relaxed mb-8">
            元自衛隊・フリーランスSE13年目。<br />
            Claude Codeで作った無料ツールやAI活用術、<br />
            上流案件の取り方まで全部書きます。
          </p>
          <div className="flex flex-col sm:flex-row gap-3 justify-center">
            <Link
              href="/posts"
              className="px-6 py-3 rounded-lg font-bold text-white"
              style={{ background: '#00B4D8' }}
            >
              記事を読む
            </Link>
            <Link
              href="/tools"
              className="px-6 py-3 rounded-lg font-bold border border-white text-white hover:bg-white hover:text-[#1A1A2E] transition-colors"
            >
              無料ツールを使う
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense placeholder（審査通過後に有効化） */}
      {/* <div className="max-w-3xl mx-auto px-4 my-6">
        <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" />
      </div> */}

      {/* 最新記事 */}
      <section className="max-w-3xl mx-auto px-4 py-12">
        <h2 className="text-xl font-black mb-6" style={{ color: '#1A1A2E' }}>
          最新記事
        </h2>
        <div className="flex flex-col gap-4">
          {posts.map(post => (
            <ArticleCard key={post.slug} post={post} />
          ))}
        </div>
        <div className="mt-8 text-center">
          <Link
            href="/posts"
            className="inline-block px-6 py-3 rounded-lg font-bold text-white"
            style={{ background: '#1A1A2E' }}
          >
            記事をすべて見る →
          </Link>
        </div>
      </section>

      {/* 無料ツール */}
      <section className="py-12 px-4" style={{ background: '#f0fbff' }}>
        <div className="max-w-3xl mx-auto">
          <h2 className="text-xl font-black mb-6" style={{ color: '#1A1A2E' }}>
            無料ツール
          </h2>
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <a
              href="https://ch-ragge.github.io/se-rate-simulator/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-white rounded-xl border-2 hover:shadow-md transition-shadow"
              style={{ borderColor: '#00B4D8' }}
            >
              <p className="text-xs font-bold mb-1" style={{ color: '#00B4D8' }}>FREE TOOL</p>
              <h3 className="font-black text-base mb-2" style={{ color: '#1A1A2E' }}>
                SE単価シミュレーター
              </h3>
              <p className="text-sm text-gray-600">
                スキルと経験を入力するだけで市場単価の目安を算出。単価アップのアドバイス付き。
              </p>
            </a>
            <a
              href="https://ch-ragge.github.io/claudemd-generator/"
              target="_blank"
              rel="noopener noreferrer"
              className="block p-5 bg-white rounded-xl border-2 hover:shadow-md transition-shadow"
              style={{ borderColor: '#00B4D8' }}
            >
              <p className="text-xs font-bold mb-1" style={{ color: '#00B4D8' }}>FREE TOOL</p>
              <h3 className="font-black text-base mb-2" style={{ color: '#1A1A2E' }}>
                CLAUDE.mdジェネレーター
              </h3>
              <p className="text-sm text-gray-600">
                4ステップでCLAUDE.mdを自動生成。Claude Codeをすぐに使い始められる。
              </p>
            </a>
          </div>
        </div>
      </section>

      {/* note誘導 */}
      <section className="py-12 px-4">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="text-xl font-black mb-3" style={{ color: '#1A1A2E' }}>
            深掘りはnoteで
          </h2>
          <p className="text-gray-600 text-sm mb-6">
            ブログには書ききれない実体験・ノウハウ・設計書の書き方は有料記事で公開中。
          </p>
          <a
            href="https://note.com/ch_ragga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block px-6 py-3 rounded-lg font-bold text-white"
            style={{ background: '#00B4D8' }}
          >
            noteを見る →
          </a>
        </div>
      </section>
    </>
  )
}
