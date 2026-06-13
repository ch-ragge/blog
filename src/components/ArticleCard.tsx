import Link from 'next/link'
import type { PostMeta } from '@/lib/posts'

// 見出しレベルは配置先に合わせて切替（トップ=セクションh2配下のためh3／記事一覧=h1直下のためh2）
export default function ArticleCard({
  post,
  headingLevel = 'h3',
}: {
  post: PostMeta
  headingLevel?: 'h2' | 'h3'
}) {
  const Heading = headingLevel
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
      <Heading className="mb-2 text-xl font-bold leading-snug tracking-tight text-ink">
        {post.title}
      </Heading>
      <p className="line-clamp-2 text-sm leading-relaxed text-subtle">{post.excerpt}</p>
      <p className="mt-3 text-xs text-subtle">{post.date}</p>
    </Link>
  )
}
