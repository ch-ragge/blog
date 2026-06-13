import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: '記事一覧',
  description: 'フリーランスSE×AIツール×Claude Codeに関する記事一覧',
  alternates: { canonical: 'https://ch-ragge.github.io/blog/posts/' },
}

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-ink">記事一覧</h1>
      <p className="mt-3 mb-12 text-sm text-subtle">
        フリーランスSE・AIツール・Claude Codeに関する記事
      </p>
      <div className="flex flex-col gap-4">
        {posts.map((post, i) => (
          <Reveal key={post.slug} delay={i * 60}>
            <ArticleCard post={post} />
          </Reveal>
        ))}
      </div>
    </div>
  )
}
