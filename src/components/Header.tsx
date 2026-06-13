import Link from 'next/link'

const NAV = [
  { href: '/posts', label: '記事' },
  { href: '/tools', label: 'ツール' },
  { href: '/about', label: 'プロフィール' },
  { href: '/contact', label: 'お問い合わせ' },
]

export default function Header() {
  return (
    <header className="fixed inset-x-0 top-0 z-50 h-12 bg-white/70 backdrop-blur-md shadow-[0_1px_0_rgba(0,0,0,0.04)]">
      <div className="mx-auto flex h-full max-w-5xl items-center justify-between px-4 sm:px-6">
        <Link href="/" className="shrink-0 whitespace-nowrap text-sm font-semibold tracking-tight text-ink">
          らがSE
        </Link>
        <nav aria-label="サイト内ナビゲーション" className="flex h-full items-stretch gap-4 text-xs sm:gap-6">
          {NAV.map(item => (
            <Link
              key={item.href}
              href={item.href}
              className="flex h-full items-center whitespace-nowrap text-subtle transition-colors hover:text-ink"
            >
              {item.label}
            </Link>
          ))}
          <a
            href="https://note.com/ch_ragga"
            target="_blank"
            rel="noopener noreferrer"
            className="flex h-full items-center whitespace-nowrap text-accent transition-opacity hover:opacity-80"
          >
            note
          </a>
        </nav>
      </div>
    </header>
  )
}
