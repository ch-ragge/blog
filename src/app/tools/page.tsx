import type { Metadata } from 'next'
import Reveal from '@/components/Reveal'

export const metadata: Metadata = {
  title: '無料ツール',
  description: 'フリーランスSE向け無料ツール一覧。SE単価シミュレーター、CLAUDE.mdジェネレーター、技術スタック診断ツールなど。',
  alternates: { canonical: 'https://ch-ragge.github.io/blog/tools/' },
}

const tools = [
  {
    name: 'SE向け技術スタック診断ツール',
    url: 'https://ch-ragge.github.io/tech-stack-advisor/',
    desc: '5問に答えるだけで、あなたのプロジェクトに最適な技術スタックを診断。規模・目的・チーム・優先度・経験から8種の候補を自動採点。理由付きでトップ3を表示。',
    tag: '技術選定',
  },
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
    <div className="mx-auto max-w-3xl px-6 py-20 sm:py-24">
      <h1 className="text-4xl font-bold tracking-tight text-ink">無料ツール</h1>
      <p className="mt-3 mb-12 text-sm text-subtle">
        Claude Codeで作った無料ツール。すべてブラウザで動きます。
      </p>
      <div className="flex flex-col gap-6">
        {tools.map((tool, i) => (
          <Reveal key={tool.name} delay={i * 60}>
            <a
              href={tool.url}
              target="_blank"
              rel="noopener noreferrer"
              className="block rounded-3xl bg-surface p-8 transition-transform duration-300 hover:scale-[1.02]"
            >
              <div className="mb-3 flex items-center gap-3">
                <span className="rounded-full bg-accent/10 px-2.5 py-0.5 text-xs font-semibold text-accent">
                  {tool.tag}
                </span>
                <span className="text-xs text-subtle">無料</span>
              </div>
              <h2 className="mb-2 text-xl font-bold tracking-tight text-ink">
                {tool.name} →
              </h2>
              <p className="text-sm leading-relaxed text-subtle">{tool.desc}</p>
            </a>
          </Reveal>
        ))}
      </div>
    </div>
  )
}
