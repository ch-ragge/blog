import type { Metadata } from 'next'
import { getAllPosts } from '@/lib/posts'
import ArticleCard from '@/components/ArticleCard'

export const metadata: Metadata = {
  title: '記事一覧',
  description: 'フリーランスSE×AIツール×Claude Codeに関する記事一覧',
}

export default function PostsPage() {
  const posts = getAllPosts()

  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black mb-2" style={{ color: '#1A1A2E' }}>
        記事一覧
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        フリーランスSE・AIツール・Claude Codeに関する記事
      </p>
      <div className="flex flex-col gap-4">
        {posts.map(post => (
          <ArticleCard key={post.slug} post={post} />
        ))}
      </div>
    </div>
  )
}
