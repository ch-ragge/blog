export default function Footer() {
  return (
    <footer className="bg-surface text-subtle">
      <div className="mx-auto max-w-5xl px-6 py-16">
        <div className="flex flex-col gap-8 sm:flex-row sm:justify-between">
          <div>
            <p className="text-sm font-semibold text-ink">らがSE</p>
            <p className="mt-1 text-xs">フリーランスSE × AIツール × Claude Code</p>
          </div>
          <div className="flex gap-10 text-xs">
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-ink">コンテンツ</p>
              <a href="/blog/posts/" className="hover:text-ink">記事一覧</a>
              <a href="/blog/tools/" className="hover:text-ink">無料ツール</a>
              <a href="/blog/about/" className="hover:text-ink">プロフィール</a>
              <a href="/blog/privacy/" className="hover:text-ink">プライバシーポリシー</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-semibold text-ink">SNS</p>
              <a href="https://x.com/0mcEq1" target="_blank" rel="noopener noreferrer" className="hover:text-ink">X</a>
              <a href="https://www.threads.net/@ch_ragge" target="_blank" rel="noopener noreferrer" className="hover:text-ink">Threads</a>
              <a href="https://www.instagram.com/ch_ragge" target="_blank" rel="noopener noreferrer" className="hover:text-ink">Instagram</a>
              <a href="https://note.com/ch_ragga" target="_blank" rel="noopener noreferrer" className="hover:text-ink">note</a>
            </div>
          </div>
        </div>
        <p className="mt-12 text-xs">
          © 2026 らがSE. Powered by Claude Code + GitHub Pages（無料）
        </p>
      </div>
    </footer>
  )
}
