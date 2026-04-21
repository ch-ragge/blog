export default function Footer() {
  return (
    <footer style={{ background: '#1A1A2E' }} className="text-gray-400 text-sm">
      <div className="max-w-3xl mx-auto px-4 py-8">
        <div className="flex flex-col sm:flex-row justify-between gap-6 mb-6">
          <div>
            <p className="font-black text-white mb-1">らがSE</p>
            <p className="text-xs">フリーランスSE × AIツール × Claude Code</p>
          </div>
          <div className="flex gap-6 text-xs">
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white">コンテンツ</p>
              <a href="/blog/posts" className="hover:text-white">記事一覧</a>
              <a href="/blog/tools" className="hover:text-white">無料ツール</a>
              <a href="/blog/about" className="hover:text-white">プロフィール</a>
            </div>
            <div className="flex flex-col gap-2">
              <p className="font-bold text-white">SNS</p>
              <a href="https://x.com/0mcEq1" target="_blank" rel="noopener noreferrer" className="hover:text-white">X</a>
              <a href="https://www.threads.net/@ch_ragge" target="_blank" rel="noopener noreferrer" className="hover:text-white">Threads</a>
              <a href="https://www.instagram.com/ch_ragge" target="_blank" rel="noopener noreferrer" className="hover:text-white">Instagram</a>
              <a href="https://note.com/ch_ragga" target="_blank" rel="noopener noreferrer" className="hover:text-white">note</a>
            </div>
          </div>
        </div>
        <p className="text-xs text-center border-t border-gray-700 pt-4">
          © 2026 らがSE. Powered by Claude Code + GitHub Pages（無料）
        </p>
      </div>
    </footer>
  )
}
