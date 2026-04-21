import type { Metadata } from 'next'

export const metadata: Metadata = {
  title: '無料ツール',
  description: 'フリーランスSE向け無料ツール一覧。SE単価シミュレーター、CLAUDE.mdジェネレーターなど。',
}

const tools = [
  {
    name: 'SE単価シミュレーター',
    url: 'https://ch-ragge.github.io/se-rate-simulator/',
    desc: 'スキルシートの情報を入力するだけで市場単価の目安が出るツール。担当工程・経験年数・商流・スキルから推定単価レンジと年収換算を表示。単価アップへの具体的なアドバイス付き。',
    tag: '単価・キャリア',
  },
  {
    name: 'CLAUDE.mdジェネレーター',
    url: 'https://ch-ragge.github.io/claudemd-generator/',
    desc: '4ステップでCLAUDE.mdを自動生成。プロジェクト名・技術スタック・ルールを入力するだけで、Claude Codeがすぐに使える設定ファイルを出力。外部API不使用・完全ブラウザ完結。',
    tag: 'Claude Code',
  },
]

export default function ToolsPage() {
  return (
    <div className="max-w-3xl mx-auto px-4 py-12">
      <h1 className="text-2xl font-black mb-2" style={{ color: '#1A1A2E' }}>
        無料ツール
      </h1>
      <p className="text-gray-500 text-sm mb-8">
        Claude Codeで作った無料ツール。すべてブラウザで動きます。
      </p>
      <div className="flex flex-col gap-6">
        {tools.map(tool => (
          <a
            key={tool.name}
            href={tool.url}
            target="_blank"
            rel="noopener noreferrer"
            className="block p-6 bg-white rounded-xl border-2 hover:shadow-lg transition-shadow"
            style={{ borderColor: '#00B4D8' }}
          >
            <div className="flex items-center gap-3 mb-3">
              <span
                className="text-xs font-bold px-2 py-1 rounded text-white"
                style={{ background: '#00B4D8' }}
              >
                {tool.tag}
              </span>
              <span className="text-xs text-gray-400">無料</span>
            </div>
            <h2 className="text-lg font-black mb-2" style={{ color: '#1A1A2E' }}>
              {tool.name} →
            </h2>
            <p className="text-sm text-gray-600 leading-relaxed">{tool.desc}</p>
          </a>
        ))}
      </div>
    </div>
  )
}
