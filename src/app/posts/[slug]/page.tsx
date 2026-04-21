import type { Metadata } from 'next'
import { getAllPosts, getPost } from '@/lib/posts'
import Link from 'next/link'

type Props = { params: Promise<{ slug: string }> }

export async function generateStaticParams() {
  return getAllPosts().map(p => ({ slug: p.slug }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { slug } = await params
  const post = await getPost(slug)
  return { title: post.title, description: post.excerpt }
}

export default async function PostPage({ params }: Props) {
  const { slug } = await params
  const post = await getPost(slug)

  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      {/* パンくず */}
      <nav className="text-sm text-gray-400 mb-6">
        <Link href="/" className="hover:underline">ホーム</Link>
        <span className="mx-2">/</span>
        <Link href="/posts" className="hover:underline">記事一覧</Link>
        <span className="mx-2">/</span>
        <span className="text-gray-600">{post.title}</span>
      </nav>

      {/* タグ */}
      <div className="flex flex-wrap gap-2 mb-4">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="text-xs font-bold px-2 py-1 rounded text-white"
            style={{ background: '#00B4D8' }}
          >
            {tag}
          </span>
        ))}
      </div>

      <h1 className="text-2xl font-black leading-tight mb-3" style={{ color: '#1A1A2E' }}>
        {post.title}
      </h1>
      <p className="text-sm text-gray-400 mb-10">{post.date}</p>

      {/* 本文 */}
      <article
        className="prose max-w-none"
        dangerouslySetInnerHTML={{ __html: post.content }}
      />

      {/* AdSense placeholder（審査通過後に有効化） */}
      {/* <ins className="adsbygoogle" style={{display:'block'}} data-ad-client="ca-pub-XXXXXXXXXXXXXXXX" data-ad-slot="XXXXXXXXXX" data-ad-format="auto" /> */}

      {/* note誘導 */}
      <div
        className="mt-12 p-6 rounded-xl text-white text-center"
        style={{ background: '#1A1A2E' }}
      >
        <p className="text-sm mb-2" style={{ color: '#90E0EF' }}>深掘りはnoteで</p>
        <p className="font-black text-base mb-4">実体験・設計書の書き方・上流案件の取り方を有料記事で公開中</p>
        <a
          href="https://note.com/ch_ragga"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block px-5 py-2 rounded-lg font-bold text-white"
          style={{ background: '#00B4D8' }}
        >
          noteを見る →
        </a>
      </div>

      <div className="mt-8 text-center">
        <Link href="/posts" className="text-sm hover:underline" style={{ color: '#00B4D8' }}>
          ← 記事一覧に戻る
        </Link>
      </div>
    </div>
  )
}
