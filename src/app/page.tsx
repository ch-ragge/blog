import Link from 'next/link'
import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import Reveal from '@/components/Reveal'

export default function Home() {
  const posts = getAllPosts().slice(0, 3)

  return (
    <>
      {/* Hero */}
      <section className="bg-base px-6 pt-24 pb-20 sm:pt-32 sm:pb-28">
        <div className="mx-auto max-w-3xl text-center">
          <p className="hero-item-1 mb-6 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            フリーランスSE × AIツール × Claude Code
          </p>
          <h1 className="hero-title hero-item-1 text-ink">
            <span className="hero-phrase">現場で使えるノウハウ</span>
            <span className="hero-phrase">そのまま公開</span>
          </h1>
          <p className="hero-item-2 mx-auto mt-8 max-w-xl text-[1.0625rem] leading-relaxed text-subtle">
            元自衛隊・フリーランスSE13年目。Claude Codeで作った無料ツールやAI活用術、上流案件の取り方まで全部書きます。
          </p>
          <div className="hero-item-3 mt-12 flex flex-col items-center justify-center gap-5 sm:flex-row">
            <Link
              href="/posts"
              className="rounded-full bg-accent px-8 py-3 font-semibold text-dark transition-[filter] hover:brightness-105"
            >
              記事を読む
            </Link>
            <Link
              href="/tools"
              className="font-semibold text-accent transition-opacity hover:opacity-80"
            >
              無料ツールを使う →
            </Link>
          </div>
        </div>
      </section>

      {/* AdSense placeholder（審査通過後に有効化） */}
      {/* <div className="max-w-3xl mx-auto px-4 my-6">
        <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" />
      </div> */}

      {/* 最新記事 */}
      <section className="bg-surface px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-3xl">
          <Reveal>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-ink">最新記事</h2>
          </Reveal>
          <div className="flex flex-col gap-4">
            {posts.map((post, i) => (
              <Reveal key={post.slug} delay={i * 80}>
                <ArticleCard post={post} />
              </Reveal>
            ))}
          </div>
          <div className="mt-12 text-center">
            <Link
              href="/posts"
              className="inline-block rounded-full border border-ink/15 px-8 py-3 font-semibold text-ink transition-colors hover:bg-ink/5"
            >
              記事をすべて見る →
            </Link>
          </div>
        </div>
      </section>

      {/* 無料ツール */}
      <section className="bg-base px-6 py-24 sm:py-32">
        <div className="mx-auto max-w-4xl">
          <Reveal>
            <h2 className="mb-10 text-3xl font-bold tracking-tight text-ink">無料ツール</h2>
          </Reveal>
          <div className="grid grid-cols-1 gap-6 sm:grid-cols-3">
            <Reveal>
              <a
                href="https://ch-ragge.github.io/tech-stack-advisor/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-3xl bg-surface p-8 transition-transform duration-300 hover:scale-[1.02]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                  Free Tool
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">
                  技術スタック診断
                </h3>
                <p className="text-sm leading-relaxed text-subtle">
                  5問に答えるだけで、プロジェクトに最適な技術スタックを診断。理由付きでトップ3を提示。
                </p>
              </a>
            </Reveal>
            <Reveal delay={80}>
              <a
                href="https://ch-ragge.github.io/se-rate-simulator/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-3xl bg-surface p-8 transition-transform duration-300 hover:scale-[1.02]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                  Free Tool
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">
                  SE単価シミュレーター
                </h3>
                <p className="text-sm leading-relaxed text-subtle">
                  スキルと経験を入力するだけで市場単価の目安を算出。単価アップのアドバイス付き。
                </p>
              </a>
            </Reveal>
            <Reveal delay={160}>
              <a
                href="https://ch-ragge.github.io/claudemd-generator/"
                target="_blank"
                rel="noopener noreferrer"
                className="block h-full rounded-3xl bg-surface p-8 transition-transform duration-300 hover:scale-[1.02]"
              >
                <p className="mb-3 text-xs font-semibold uppercase tracking-[0.18em] text-subtle">
                  Free Tool
                </p>
                <h3 className="mb-3 text-xl font-bold tracking-tight text-ink">
                  CLAUDE.mdジェネレーター
                </h3>
                <p className="text-sm leading-relaxed text-subtle">
                  4ステップでCLAUDE.mdを自動生成。Claude Codeをすぐに使い始められる。
                </p>
              </a>
            </Reveal>
          </div>
        </div>
      </section>

      {/* note誘導（ダークセクション） */}
      <section className="bg-dark px-6 py-24">
        <div className="mx-auto max-w-3xl text-center">
          <p className="mb-3 text-xs font-semibold uppercase tracking-[0.2em] text-accent">
            Premium
          </p>
          <h2 className="mb-4 text-3xl font-bold tracking-tight text-white">深掘りはnoteで</h2>
          <p className="mx-auto mb-10 max-w-lg text-sm leading-relaxed text-gray-300">
            ブログには書ききれない実体験・ノウハウ・設計書の書き方は有料記事で公開中。
          </p>
          <a
            href="https://note.com/ch_ragga"
            target="_blank"
            rel="noopener noreferrer"
            className="inline-block rounded-full bg-accent px-8 py-3 font-semibold text-dark transition-[filter] hover:brightness-105"
          >
            noteを見る →
          </a>
        </div>
      </section>
    </>
  )
}
