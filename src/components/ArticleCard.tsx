import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

export default function ArticleCard({ post }: { post: PostMeta }) {
  return (
    <Link
      href={`/posts/${post.slug}`}
      className="block rounded-3xl bg-base p-6 transition-shadow duration-300 hover:shadow-[0_8px_30px_rgba(0,0,0,0.08)]"
    >
      <div className="mb-3 flex flex-wrap gap-2">
        {post.tags.map(tag => (
          <span
            key={tag}
            className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent"
          >
            {tag}
          </span>
        ))}
      </div>
      <h2 className="mb-2 text-xl font-bold leading-snug tracking-tight text-ink">
        {post.title}
      </h2>
      <p className="line-clamp-2 text-sm leading-relaxed text-subtle">{post.excerpt}</p>
      <p className="mt-3 text-xs text-subtle">{post.date}</p>
    </Link>
  )
}
