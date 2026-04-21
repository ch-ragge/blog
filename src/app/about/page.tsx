import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: 'プロフィール',
  description: 'らがSEのプロフィール。元自衛隊・フリーランスSE13年目。AIツールとClaude Codeを活用した副業・情報発信を実践中。',
}

export default function AboutPage() {
  return (
    <div className="max-w-2xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black mb-8" style={{ color: '#1A1A2E' }}>
        プロフィール
      </h1>

      <div className="p-6 rounded-xl mb-8" style={{ background: '#1A1A2E' }}>
        <p className="text-2xl font-black text-white mb-1">らがSE</p>
        <p className="text-sm" style={{ color: '#00B4D8' }}>
          元自衛隊 × フリーランスSE × AIツール活用
        </p>
      </div>

      <div className="prose max-w-none">
        <h2>経歴</h2>
        <ul>
          <li>18歳：陸上自衛隊に入隊</li>
          <li>22歳：退職・ITエンジニアに転身</li>
          <li>26歳：運用保守SEとしてキャリアスタート</li>
          <li>32歳：フリーランスSEとして独立。上流案件（設計・構築）へ転換</li>
          <li>現在：官庁系の詳細設計〜移行案件を中心に活動</li>
        </ul>

        <h2>スキル・専門領域</h2>
        <ul>
          <li>サーバ設計・構築（RHEL・Windows Server・AIX・Solaris）</li>
          <li>上流工程（要件定義・基本設計・詳細設計・移行設計）</li>
          <li>AIツール活用・Claude Code実践</li>
          <li>GitHub Pages + Next.jsでの無料Webアプリ開発</li>
        </ul>

        <h2>このブログについて</h2>
        <p>
          フリーランスSEとして現場で使ってきたノウハウと、
          Claude Codeを使って作ったツール・サイト・副業の実践記録を発信しています。
          「AIを使えばSEじゃなくてもできる」より、
          「SEがAIを使えばここまでできる」を証明したい。
        </p>

        <h2>SNS・リンク</h2>
        <ul>
          <li>
            <a href="https://x.com/0mcEq1" target="_blank" rel="noopener noreferrer">X（旧Twitter）: @0mcEq1</a>
          </li>
          <li>
            <a href="https://www.threads.net/@ch_ragge" target="_blank" rel="noopener noreferrer">Threads: @ch_ragge</a>
          </li>
          <li>
            <a href="https://www.instagram.com/ch_ragge" target="_blank" rel="noopener noreferrer">Instagram: @ch_ragge</a>
          </li>
          <li>
            <a href="https://note.com/ch_ragga" target="_blank" rel="noopener noreferrer">note: らがSE</a>
          </li>
        </ul>
      </div>
    </div>
  )
}
