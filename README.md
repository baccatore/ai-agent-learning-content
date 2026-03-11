# AIエージェント活用ガイド / AI Agent Practical Guide
## Claude Codeでビジネスを加速する / Accelerate Business with Claude Code

非エンジニアのビジネスパーソンが、AIエージェント（Claude Code）を業務に活用し、
GitHubで業務管理と成果物の検収を行うためのスキルアップ学習コンテンツです。

Learning content for non-engineer business professionals to leverage Claude Code
as an AI agent for business tasks, with GitHub-based task management and deliverable review.

---

## 対象読者 / Target Audience

- IT感度が高い非エンジニア（SaaSツールの利用経験あり）
- AIチャット（ChatGPT等）の利用経験がある方
- CLI（ターミナル）やGit/GitHubは未経験の方

## コンテンツ構成 / Content Structure

### ワークショップ資料 / Workshop Materials

全5回シリーズの講師ファシリテート型ワークショップ。

| Session | テーマ / Theme | 概要 / Overview |
|---------|---------------|-----------------|
| 0 | 体験 / Experience | AIエージェントの威力をGitHub上で体験する |
| 1 | 基礎 / Foundations | AIエージェントの概念理解とClaude Codeの基本操作 |
| 2 | 実践 / Practice | デスクトップリサーチと提案資料の作成 |
| 3 | 実践応用 / Advanced Practice | データ分析・可視化と追加ユースケース |
| 4 | 運用 / Operations | GitHubによるタスク管理とチーム運用 |

### 自己学習教材 / Self-Study Materials

一人で読み進めて実践できるテキスト教材。

| Module | テーマ / Theme | 内容 / Content |
|--------|---------------|----------------|
| 1 | 基礎 / Foundations | AIエージェントの概念、セットアップ、基本操作 |
| 2 | 実践スキル / Practical Skills | リサーチ、文書作成、データ分析 |
| 3 | 応用ユースケース / Advanced Use Cases | 追加の業務活用パターン |
| 4 | 運用 / Operations | GitHub入門、タスク管理、チーム運用 |

## ディレクトリ構成 / Directory Structure

```
├── ja/                    # 日本語 / Japanese
│   ├── workshop/          # ワークショップ資料
│   │   ├── session-00/    # 各セッションに instructor-guide.md + participant-handout.md
│   │   ├── session-01/
│   │   ├── session-02/
│   │   ├── session-03/
│   │   └── session-04/
│   └── self-study/        # 自己学習教材
│       ├── 01-foundations/     # 各モジュールに textbook.md + exercises.md + reference.md
│       ├── 02-practical-skills/
│       ├── 03-advanced-use-cases/
│       └── 04-operations/
├── en/                    # English (mirror structure)
├── shared/                # 言語非依存 / Language-independent
│   ├── images/
│   ├── sample-data/       # サンプルデータ（CSV等）
│   └── templates/         # CLAUDE.mdテンプレート集
└── docs/plans/            # 設計ドキュメント
```

## 利用方法 / How to Use

### ワークショップを開催する場合
1. `ja/workshop/` (or `en/workshop/`) の該当セッションフォルダを開く
2. `instructor-guide.md` で進行を確認
3. `participant-handout.md` を参加者に配布
4. `shared/sample-data/` のサンプルデータを必要に応じて使用

### 自己学習する場合
1. `ja/self-study/` (or `en/self-study/`) のModule 1から順に進める
2. `textbook.md` で学習
3. `exercises.md` で実践
4. `reference.md` を辞書的に参照

## ライセンス / License

（検討中 / TBD）
