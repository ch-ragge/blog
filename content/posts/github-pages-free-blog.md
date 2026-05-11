---
title: "GitHub Pagesで完全無料のブログを作る方法【Next.js・費用ゼロ】"
date: "2026-04-28"
excerpt: "このブログはGitHub Pagesで動いている。費用ゼロ・維持費ゼロで公開できる仕組みと、実際のセットアップ手順を書く。"
tags: ["GitHub Pages", "Next.js", "個人開発"]
---

## なぜGitHub Pagesを選んだか

ブログを作るとき、選択肢はいくつかある。

- WordPress（レンタルサーバー代が月1,000〜2,000円）
- note・はてなブログ（プラットフォーム依存）
- Vercel・Netlify（無料枠あり・制約あり）
- **GitHub Pages（完全無料・独自ドメイン対応）**

このブログはGitHub Pagesで動いている。費用は月0円。独自ドメインを使わなければランニングコストがゼロだ。

維持費がかからないと、更新が止まっても焦らなくていい。副業の実験場として使いやすい。

---

## GitHub Pagesとは

GitHubが提供する静的サイトホスティングサービスだ。

Gitリポジトリのコードを `main` ブランチにpushすると、自動でウェブサイトとして公開される。URLは `https://ユーザー名.github.io/リポジトリ名/` になる。

**メリット**
- 完全無料
- GitHubのアカウントがあればすぐ使える
- CDN経由で配信されるため速い
- HTTPSが自動で有効になる

**デメリット**
- 静的サイトのみ（サーバーサイド処理は不可）
- リポジトリがパブリックである必要がある（無料枠の場合）

---

## このブログの技術構成

```
Next.js 15（Static Export）
TypeScript
Tailwind CSS
gray-matter（Markdownのfront matter解析）
remark（MarkdownをHTMLに変換）
```

記事はMarkdownファイルで管理している。`content/posts/` フォルダにMDファイルを置くと、自動で記事ページが生成される仕組みだ。

---

## セットアップ手順

### 1. Next.jsプロジェクトを作る

```bash
npx create-next-app@latest my-blog --typescript --tailwind --app
cd my-blog
```

### 2. Static Exportの設定

`next.config.ts` を編集する：

```typescript
const nextConfig = {
  output: 'export',
  basePath: '/リポジトリ名',
  trailingSlash: true,
}
export default nextConfig
```

`output: 'export'` がポイント。これを設定することで、ビルド時にすべてのページをHTMLファイルとして書き出してくれる。

`basePath` はGitHubのリポジトリ名に合わせる。

### 3. Markdownを記事にする仕組み

`gray-matter` と `remark` をインストールする：

```bash
npm install gray-matter remark remark-html
```

`src/lib/posts.ts` というファイルを作って、Markdownファイルを読み込む関数を書く。

基本的なコードの構成：
- `getAllPosts()`: contentフォルダ内のすべてのMDファイルを読んでメタデータを返す
- `getPost(slug)`: 特定のMDファイルを読んでHTML変換済みのコンテンツを返す

### 4. GitHub Actionsで自動デプロイ

`.github/workflows/deploy.yml` に以下を書くと、mainブランチへのpushごとに自動でビルドしてGitHub Pagesにデプロイしてくれる：

```yaml
name: Deploy to GitHub Pages

on:
  push:
    branches: [ main ]

jobs:
  deploy:
    runs-on: ubuntu-latest
    permissions:
      contents: read
      pages: write
      id-token: write
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version: '20'
      - run: npm ci
      - run: npm run build
      - uses: actions/upload-pages-artifact@v3
        with:
          path: ./out
      - uses: actions/deploy-pages@v4
```

### 5. GitHubリポジトリの設定

リポジトリの Settings > Pages > Source を `GitHub Actions` に設定する。

---

## 記事の書き方

新しい記事を書くときは `content/posts/` フォルダに `.md` ファイルを作るだけだ。

ファイルの先頭（front matter）にメタデータを書く：

```markdown
---
title: "記事のタイトル"
date: "2026-04-28"
excerpt: "記事の概要。一覧ページに表示される。"
tags: ["タグ1", "タグ2"]
---

## 本文はここから

Markdownで書ける。
```

あとは `git add . && git commit -m "新記事追加" && git push` するだけで公開される。

---

## 費用の内訳

| 項目 | 費用 |
|---|---|
| GitHub | 無料 |
| GitHub Pages | 無料 |
| ドメイン（github.ioサブドメイン） | 無料 |
| SSL/HTTPS | 無料（GitHub提供） |
| **合計** | **月0円** |

独自ドメインを使いたい場合は、ドメイン代（年1,000〜2,000円程度）がかかる。それでもWordPressより安い。

---

## Claude Codeで作ると速い

このブログの初期構築はClaude Codeを使って1日で終わらせた。

「Next.jsでGitHub Pages用のブログを作って。記事はMarkdownで管理したい」という指示を出して、あとは細かい調整を加えていくだけだった。

▼ [技術力ゼロ・費用ゼロ・1日でWebアプリを公開した話](https://ch-ragge.github.io/blog/posts/claude-code-webapp)

---

## まとめ

GitHub Pagesでブログを作るメリット：

1. **月0円で運用できる**（独自ドメインなし）
2. **Markdownで記事を書ける**（シンプルで続けやすい）
3. **Gitで記事の履歴が管理できる**（間違えてもすぐ戻せる）
4. **GitHub Actionsで自動デプロイ**（pushするだけで公開）

技術的な敷居はあるが、一度設定すれば維持コストがゼロなので、長期運用に向いている。
