import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block p-5 bg-white rounded-xl border border-gray-200 hover:shadow-md hover:border-[#00B4D8] transition-all"
    >
      <div className="flex flex-wrap gap-2 mb-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="text-xs font-bold px-2 py-0.5 rounded text-white"
            style={{ background: '#00B4D8' }}
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="font-black text-base mb-1 leading-snug" style={{ color: '#1A1A2E' }}>
        {post.title}
      </h2>
      <p className="text-sm text-gray-500 leading-relaxed line-clamp-2">{post.excerpt}</p>
      <p className="text-xs text-gray-400 mt-2">{post.date}</p>
    </Link>
  )
}
