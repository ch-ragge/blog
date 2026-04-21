---
title: "Claude Codeで無料ブログを作る方法【GitHub Pages完全手順】"
date: "2026-04-22"
excerpt: "Next.js + GitHub Pages構成でブログを0円で作った。難しい知識は不要。Claude Codeに指示を出すだけで、このブログそのものが完成した手順を公開する。"
tags: ["Claude Code", "GitHub Pages", "ブログ"]
---

## このブログ自体がClaude Codeで作られている

このブログはClaude Codeで作った。

費用はゼロだ。使ったのはClaude Code、GitHub、PowerShell。それだけ。

「ブログを始めたいけど、WordPressは維持費がかかる」「無料でやりたいけどどこから手をつければいいかわからない」という人に向けて、実際にやった手順をそのまま書く。

フリーランスSEの自分が、コスト0円でブログを立ち上げた記録だ。

## 使う構成と費用

| ツール | 用途 | 費用 |
|--------|------|------|
| Next.js 15 | ブログフレームワーク | 無料 |
| GitHub | コード管理 | 無料 |
| GitHub Pages | ホスティング | 無料 |
| GitHub Actions | 自動デプロイ | 無料 |
| Claude Code | コード生成 | Claude契約に含む |

**合計：0円**

WordPressの場合、レンタルサーバー代が月1,000〜2,000円かかる。年間で12,000〜24,000円だ。それがゼロになる。

## Claude Codeへの指示の出し方

Claude Codeを起動して、こう伝えるだけでいい。

```
Next.js 15のApp RouterでMarkdownベースのブログを作って。
GitHub Pagesにデプロイできるよう静的出力にして。
basePath: '/blog' で動くようにして。
記事一覧・記事詳細・タグ・Aboutページを作って。
Tailwind CSSでデザインして。
```

この指示一つで、ブログの骨格が完成する。

あとは「デザインをもっとシンプルにして」「記事ページの末尾にnoteへのCTAを追加して」と追加で指示を出す。コードは一行も自分で書かなくていい。

自分がやるのは、何を作りたいかを言語化することだけだ。

## デプロイの手順

### 1. GitHub PATを取得する

GitHubの設定画面から「Personal access token」を発行する。`repo` と `workflow` の2つのスコープにチェックを入れる。

### 2. PowerShellスクリプトを実行する

ブログフォルダでスクリプトを実行すると、以下が自動で動く。

1. GitHubにリポジトリを作成
2. コードをpush
3. GitHub Pagesを有効化

### 3. GitHub Actionsが自動でビルド・デプロイ

pushが完了すると、GitHub ActionsがNext.jsをビルドして自動でGitHub Pagesに配置する。約1分で完了する。

URLは `https://ユーザー名.github.io/blog/` になる。

## 記事の追加方法

`content/posts/` フォルダに `.md` ファイルを追加するだけだ。

```markdown
---
title: "記事タイトル"
date: "2026-04-22"
excerpt: "記事の概要"
tags: ["タグ1", "タグ2"]
---

## 見出し

本文...
```

ファイルを追加してGitHubにpushすると、GitHub Actionsが自動でビルド・デプロイしてくれる。記事の追加作業は、ファイルを置いてpushするだけ。それ以外に何もしなくていい。

## AdSenseとの組み合わせで収益化する

ブログが完成したら、記事を10〜15本積み上げてGoogle AdSenseに申請できる。

審査が通れば、ブログに広告が表示されて収入が発生する。ブログの維持費はゼロなので、入ってきた収益がそのまま手元に残る。

さらにAmazonアソシエイトのリンクを記事に埋め込めば、読者が商品を購入するたびに報酬が発生する。

この構成の良いところは、**一度作れば記事を追加するだけで資産が積み上がる**ことだ。手を止めても、ブログは動き続ける。

## まとめ

Claude Code + GitHub Pages構成なら、フリーランスSEでも1日で無料ブログを公開できる。

技術的な壁を感じていた人ほど、やってみると「これだけでいいのか」と拍子抜けするはずだ。

自分はこの構成でブログを作り、Webアプリも公開した。副業の入口として、これ以上コスパの良い方法は今のところ見つかっていない。

▼ [SE単価シミュレーター（無料）](https://ch-ragge.github.io/se-rate-simulator/)
▼ [CLAUDE.mdジェネレーター（無料）](https://ch-ragge.github.io/claudemd-generator/)

---

*この記事で参考になる書籍*

[実践Claude Code入門](https://amzn.to/4mNScjV)（Amazon）

[Claude CodeによるAI駆動開発入門](https://amzn.to/4mEyXJs)（Amazon）
