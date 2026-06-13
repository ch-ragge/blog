import type { Metadata } from 'next'
import { getAllPosts, getPost } from '@/lib/posts'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

const SITE_URL = 'https://ch-ragge.github.io/blog'

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  const url = `${SITE_URL}/posts/${slug}/`
  return {
    title: post.title,
    description: post.excerpt,
    alternates: { canonical: url },
    openGraph: {
      type: 'article',
      url,
      title: post.title,
      description: post.excerpt,
      publishedTime: post.date || undefined,
    },
  }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)
  const url = `${SITE_URL}/posts/${slug}/`

  // 記事の構造化データ（Article）
  const articleJsonLd = {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: post.title,
    description: post.excerpt,
    datePublished: post.date || undefined,
    dateModified: post.date || undefined,
    inLanguage: 'ja',
    mainEntityOfPage: { '@type': 'WebPage', '@id': url },
    author: { '@type': 'Person', name: 'らがSE', url: `${SITE_URL}/about/` },
    publisher: { '@type': 'Person', name: 'らがSE', url: `${SITE_URL}/about/` },
  }

  return (
    <div className="mx-auto max-w-2xl px-6 py-16 sm:py-20">
      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd) }}
      />
      {/* パンくず */}
      <nav className="mb-8 text-sm text-subtle">
        <Link href="/" className="hover:text-ink">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:text-ink">記事一覧</Link>
        <span className="mx-2">/</span>
        <span className="text-ink">{post.title}</span>
      </nav>

      {/* タグ */}
      <div className="mb-4 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent"
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="mb-3 text-3xl font-bold leading-tight tracking-tight text-ink">
        {post.title}
      </h1>
      <p className="mb-10 text-sm text-subtle">{post.date}</p>

      {/* 本文 */}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* AdSense placeholder（審査通過後に有効化） */}
      {/* <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" /> */}

      {/* note誘導 */}
      <div className="mt-16 rounded-3xl bg-dark p-8 text-center text-white">
        <p className="mb-2 text-xs font-semibold uppercase tracking-[0.2em] text-accent">深掘りはnoteで</p>
        <p className="mb-6 text-base font-bold">実体験・設計書の書き方・上流案件の取り方を有料記事で公開中</p>
        <a
          href="https://note.com/ch_ragga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block rounded-full bg-accent px-6 py-2.5 font-semibold text-dark transition-[filter] hover:brightness-105"
        >
          noteを見る →
        </a>
      </div>

      <div className="mt-10 text-center">
        <Link href="/posts" className="text-sm font-semibold text-accent hover:opacity-80">
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  )
}
