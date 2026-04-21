import Link from 'next/link'

export default function Header() {
  return (
    <header style={{ background: '#1A1A2E' }}>
      <div className="max-w-3xl mx-auto px-4 py-4 flex items-center justify-between">
        <Link href="/" className="font-black text-lg text-white leading-none">
          らがSE
          <span className="block text-xs font-normal" style={{ color: '#00B4D8' }}>
            フリーランスSE × AIツール × Claude Code
          </span>
        </Link>
        <nav className="flex items-center gap-5 text-sm font-bold text-gray-300">
          <Link href="/posts" className="hover:text-white transition-colors">記事</Link>
          <Link href="/tools" className="hover:text-white transition-colors">ツール</Link>
          <Link href="/about" className="hover:text-white transition-colors">プロフィール</Link>
          <a
            href="https://note.com/ch_ragga"
            target="_blank"
            rel="noopener noreferrer"
            className="px-3 py-1 rounded font-bold text-white"
            style={{ background: '#00B4D8' }}
          >
            note
          </a>
        </nav>
      </div>
    </header>
  )
}
