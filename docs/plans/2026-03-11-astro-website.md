# Astro Webサイト構築 Implementation Plan

> **For Claude:** REQUIRED SUB-SKILL: Use superpowers:executing-plans to implement this plan task-by-task.

**Goal:** 既存の学習コンテンツ（日英44 Markdownファイル）をAstro製の静的サイトとして公開できる形に仕上げる。Claude Resources風の洗練されたデザイン、パンくずリスト、ライブハイライトTOC、適切なURL設計を備える。

**Architecture:** Astro Content Collections で `ja/` `en/` のMarkdownを管理し、i18n routing (`/ja/...`, `/en/...`) で日英切替。レイアウトはBaseLayout → DocsLayoutの2層構成。TOCはIntersectionObserver でライブハイライト。CSS はグローバルCSS + scoped style（フレームワーク非依存、JS最小化）。

**Tech Stack:** Astro 5.x, Content Collections (glob loader), Zod schema, vanilla CSS, IntersectionObserver (island script)

---

## URL設計

```
/                          → 言語選択 or ja へリダイレクト
/ja/                       → 日本語トップ（コース一覧）
/ja/workshop/session-00/instructor-guide/
/ja/workshop/session-00/participant-handout/
/ja/self-study/01-foundations/textbook/
/ja/self-study/01-foundations/exercises/
/ja/self-study/01-foundations/reference/
/en/                       → English top
/en/workshop/session-00/instructor-guide/
/en/self-study/01-foundations/textbook/
... (同パターン)
```

## デザイン仕様

- **背景**: `#FFFFFF` (本文), `#FAFAFA` (サイドバー/ヘッダー)
- **アクセントカラー**: 朱色 `#D94032` (リンク, アクティブ状態, ボーダー)
- **アクセント hover**: `#B8342A`
- **テキスト**: `#1A1A1A` (本文), `#6B7280` (セカンダリ)
- **フォント**: `system-ui, -apple-system, sans-serif`（本文）, `monospace`（コード）
- **レイアウト**: 左サイドバー(ナビ 260px) + メインコンテンツ(max 780px) + 右TOC(220px)
- **パンくずリスト**: ヘッダー直下、`ホーム > ワークショップ > Session 0 > 講師ガイド`
- **TOC**: 右カラム固定、現在のセクションが朱色ハイライト、スクロール追従

---

## Task 1: Astroプロジェクト初期化

**Files:**
- Create: `package.json`
- Create: `astro.config.mjs`
- Create: `tsconfig.json`

**Step 1: Astroプロジェクトを作成**

```bash
cd /home/yuichiro/ai-agent-learning-content
npm create astro@latest . -- --template minimal --no-install --no-git --typescript strict
```

注意: 既存ファイルが上書きされないことを確認。conflictがあれば手動でマージ。

**Step 2: 依存関係インストール**

```bash
npm install
```

**Step 3: astro.config.mjs を設定**

```javascript
import { defineConfig } from 'astro/config';

export default defineConfig({
  site: 'https://example.com',
  i18n: {
    locales: ['ja', 'en'],
    defaultLocale: 'ja',
    routing: {
      prefixDefaultLocale: true,
    },
  },
  markdown: {
    shikiConfig: {
      theme: 'github-light',
    },
  },
});
```

**Step 4: ビルド確認**

Run: `npx astro build`
Expected: ビルド成功（空のサイト）

**Step 5: Commit**

```bash
git add package.json package-lock.json astro.config.mjs tsconfig.json src/
git commit -m "chore: initialize Astro project with i18n config"
```

---

## Task 2: Markdownにfrontmatter追加

**Files:**
- Modify: 全44 Markdownファイル（`ja/` `en/` 配下）

各Markdownファイルの先頭にfrontmatterを追加する。本文の内容は一切変更しない。

**Frontmatterスキーマ:**

```yaml
---
title: "Module 1: 基礎 — AIエージェントを理解し、使い始める"
description: "AIエージェントの基本概念とClaude Codeの環境構築"
lang: "ja"
category: "self-study"       # "workshop" | "self-study"
module: "01-foundations"      # or "session-00" etc.
contentType: "textbook"      # "textbook" | "exercises" | "reference" | "instructor-guide" | "participant-handout"
order: 1                     # モジュール/セッション内の表示順
---
```

**Step 1: frontmatter追加スクリプト作成**

Create: `scripts/add-frontmatter.mjs`

```javascript
import { readFileSync, writeFileSync } from 'fs';
import { globSync } from 'fs';
import { resolve, relative, basename, dirname } from 'path';

// Content mapping for titles and metadata
const contentTypes = {
  'textbook': { ja: 'テキスト', en: 'Textbook', order: 1 },
  'exercises': { ja: '演習', en: 'Exercises', order: 2 },
  'reference': { ja: 'リファレンス', en: 'Reference', order: 3 },
  'instructor-guide': { ja: '講師ガイド', en: 'Instructor Guide', order: 1 },
  'participant-handout': { ja: '受講者ハンドアウト', en: 'Participant Handout', order: 2 },
};

// Process each markdown file in ja/ and en/
for (const lang of ['ja', 'en']) {
  for (const category of ['workshop', 'self-study']) {
    const pattern = `${lang}/${category}/**/*.md`;
    // Use glob to find files
    const files = globSync(pattern);

    for (const file of files) {
      const content = readFileSync(file, 'utf-8');

      // Skip if already has frontmatter
      if (content.startsWith('---')) continue;

      const parts = file.split('/');
      // e.g., ja/self-study/01-foundations/textbook.md
      const module = parts[2];  // "01-foundations" or "session-00"
      const filename = basename(file, '.md');  // "textbook"
      const contentType = filename;
      const typeInfo = contentTypes[contentType];

      // Extract title from first H1
      const h1Match = content.match(/^#\s+(.+)$/m);
      const title = h1Match ? h1Match[1] : filename;

      const frontmatter = [
        '---',
        `title: "${title.replace(/"/g, '\\"')}"`,
        `lang: "${lang}"`,
        `category: "${category}"`,
        `module: "${module}"`,
        `contentType: "${contentType}"`,
        `order: ${typeInfo?.order || 1}`,
        '---',
        '',
      ].join('\n');

      writeFileSync(file, frontmatter + content);
      console.log(`Added frontmatter: ${file}`);
    }
  }
}
```

**Step 2: スクリプト実行**

Run: `node scripts/add-frontmatter.mjs`
Expected: 44ファイルに frontmatter が追加される

**Step 3: frontmatter追加を検証**

Run: `head -10 ja/self-study/01-foundations/textbook.md`
Expected: `---` で始まるfrontmatter + 元の `# Module 1:` が続く

**Step 4: Commit**

```bash
git add ja/ en/ scripts/
git commit -m "feat: add frontmatter to all 44 markdown content files"
```

---

## Task 3: Content Collections定義

**Files:**
- Create: `src/content.config.ts`
- Move/symlink: コンテンツを `src/data/` 配下に配置

**Step 1: コンテンツディレクトリ構成**

Astro Content Collections の glob loader を使い、既存の `ja/` `en/` ディレクトリを直接参照する。ファイルを移動せずに `base` で既存パスを指定。

Create: `src/content.config.ts`

```typescript
import { defineCollection } from 'astro:content';
import { glob } from 'astro/loaders';
import { z } from 'astro/zod';

const contentSchema = z.object({
  title: z.string(),
  lang: z.enum(['ja', 'en']),
  category: z.enum(['workshop', 'self-study']),
  module: z.string(),
  contentType: z.string(),
  order: z.number(),
});

const jaWorkshop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './ja/workshop' }),
  schema: contentSchema,
});

const jaStudy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './ja/self-study' }),
  schema: contentSchema,
});

const enWorkshop = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './en/workshop' }),
  schema: contentSchema,
});

const enStudy = defineCollection({
  loader: glob({ pattern: '**/*.md', base: './en/self-study' }),
  schema: contentSchema,
});

export const collections = {
  'ja-workshop': jaWorkshop,
  'ja-study': jaStudy,
  'en-workshop': enWorkshop,
  'en-study': enStudy,
};
```

**Step 2: ビルドでスキーマ検証**

Run: `npx astro build`
Expected: Content collections がパースされエラーなし

**Step 3: Commit**

```bash
git add src/content.config.ts
git commit -m "feat: define content collections with Zod schema for ja/en content"
```

---

## Task 4: グローバルCSS — Claude Resources風デザインシステム

**Files:**
- Create: `src/styles/global.css`

**Step 1: グローバルCSS作成**

Create: `src/styles/global.css`

```css
/* ===== Design Tokens ===== */
:root {
  /* Colors */
  --color-bg: #FFFFFF;
  --color-bg-secondary: #FAFAFA;
  --color-bg-code: #F5F5F4;
  --color-border: #E5E5E5;
  --color-border-light: #F0F0F0;
  --color-text: #1A1A1A;
  --color-text-secondary: #6B7280;
  --color-text-muted: #9CA3AF;
  --color-accent: #D94032;
  --color-accent-hover: #B8342A;
  --color-accent-light: #FEF2F1;

  /* Typography */
  --font-sans: system-ui, -apple-system, 'Segoe UI', 'Hiragino Kaku Gothic ProN', 'Noto Sans JP', sans-serif;
  --font-mono: 'SF Mono', 'Fira Code', 'Fira Mono', 'Roboto Mono', monospace;
  --text-xs: 0.75rem;
  --text-sm: 0.875rem;
  --text-base: 1rem;
  --text-lg: 1.125rem;
  --text-xl: 1.25rem;
  --text-2xl: 1.5rem;
  --text-3xl: 1.875rem;

  /* Spacing */
  --space-1: 0.25rem;
  --space-2: 0.5rem;
  --space-3: 0.75rem;
  --space-4: 1rem;
  --space-6: 1.5rem;
  --space-8: 2rem;
  --space-12: 3rem;
  --space-16: 4rem;

  /* Layout */
  --sidebar-width: 260px;
  --toc-width: 220px;
  --content-max: 780px;
  --header-height: 56px;
}

/* ===== Reset ===== */
*, *::before, *::after {
  box-sizing: border-box;
  margin: 0;
  padding: 0;
}

html {
  font-size: 16px;
  scroll-behavior: smooth;
  scroll-padding-top: calc(var(--header-height) + var(--space-8));
}

body {
  font-family: var(--font-sans);
  color: var(--color-text);
  background: var(--color-bg);
  line-height: 1.7;
  -webkit-font-smoothing: antialiased;
}

/* ===== Typography — Prose ===== */
.prose {
  max-width: var(--content-max);
  font-size: var(--text-base);
  line-height: 1.8;
}

.prose h1 {
  font-size: var(--text-3xl);
  font-weight: 700;
  margin-top: var(--space-12);
  margin-bottom: var(--space-6);
  letter-spacing: -0.02em;
  line-height: 1.3;
}

.prose h2 {
  font-size: var(--text-2xl);
  font-weight: 700;
  margin-top: var(--space-12);
  margin-bottom: var(--space-4);
  padding-bottom: var(--space-3);
  border-bottom: 1px solid var(--color-border);
  letter-spacing: -0.01em;
  line-height: 1.3;
}

.prose h3 {
  font-size: var(--text-xl);
  font-weight: 600;
  margin-top: var(--space-8);
  margin-bottom: var(--space-3);
  line-height: 1.4;
}

.prose h4 {
  font-size: var(--text-lg);
  font-weight: 600;
  margin-top: var(--space-6);
  margin-bottom: var(--space-2);
}

.prose p {
  margin-bottom: var(--space-4);
}

.prose a {
  color: var(--color-accent);
  text-decoration: none;
  border-bottom: 1px solid transparent;
  transition: border-color 0.15s;
}

.prose a:hover {
  border-bottom-color: var(--color-accent);
}

.prose ul, .prose ol {
  margin-bottom: var(--space-4);
  padding-left: var(--space-6);
}

.prose li {
  margin-bottom: var(--space-2);
}

.prose li > ul, .prose li > ol {
  margin-top: var(--space-1);
  margin-bottom: var(--space-1);
}

.prose blockquote {
  border-left: 3px solid var(--color-accent);
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
  background: var(--color-accent-light);
  color: var(--color-text-secondary);
  border-radius: 0 4px 4px 0;
}

.prose blockquote p:last-child {
  margin-bottom: 0;
}

.prose code {
  font-family: var(--font-mono);
  font-size: 0.9em;
  background: var(--color-bg-code);
  padding: 0.15em 0.35em;
  border-radius: 3px;
}

.prose pre {
  font-family: var(--font-mono);
  font-size: var(--text-sm);
  background: var(--color-bg-code);
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: var(--space-4);
  margin-bottom: var(--space-4);
  overflow-x: auto;
  line-height: 1.6;
}

.prose pre code {
  background: none;
  padding: 0;
  border-radius: 0;
  font-size: inherit;
}

.prose table {
  width: 100%;
  border-collapse: collapse;
  margin-bottom: var(--space-4);
  font-size: var(--text-sm);
}

.prose th, .prose td {
  padding: var(--space-2) var(--space-3);
  border: 1px solid var(--color-border);
  text-align: left;
}

.prose th {
  background: var(--color-bg-secondary);
  font-weight: 600;
}

.prose hr {
  border: none;
  border-top: 1px solid var(--color-border);
  margin: var(--space-8) 0;
}

.prose img {
  max-width: 100%;
  border-radius: 6px;
}

/* Details/Summary (折りたたみ) */
.prose details {
  border: 1px solid var(--color-border);
  border-radius: 6px;
  padding: var(--space-3) var(--space-4);
  margin-bottom: var(--space-4);
}

.prose details summary {
  cursor: pointer;
  font-weight: 600;
  color: var(--color-accent);
}

.prose details[open] summary {
  margin-bottom: var(--space-3);
}

/* ===== Scrollbar ===== */
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
}

::-webkit-scrollbar-track {
  background: transparent;
}

::-webkit-scrollbar-thumb {
  background: var(--color-border);
  border-radius: 3px;
}

::-webkit-scrollbar-thumb:hover {
  background: var(--color-text-muted);
}
```

**Step 2: 目視確認**

CSS は次のTaskでレイアウトに組み込んで確認する。

**Step 3: Commit**

```bash
git add src/styles/global.css
git commit -m "feat: add Claude Resources-inspired design system CSS"
```

---

## Task 5: BaseLayout + Header + パンくずリスト

**Files:**
- Create: `src/layouts/BaseLayout.astro`
- Create: `src/components/Header.astro`
- Create: `src/components/Breadcrumbs.astro`
- Create: `src/components/LanguageSwitcher.astro`

**Step 1: BaseLayout作成**

Create: `src/layouts/BaseLayout.astro`

```astro
---
import Header from '../components/Header.astro';
import '../styles/global.css';

interface Props {
  title: string;
  lang: 'ja' | 'en';
}

const { title, lang } = Astro.props;
---

<!DOCTYPE html>
<html lang={lang}>
<head>
  <meta charset="utf-8" />
  <meta name="viewport" content="width=device-width, initial-scale=1" />
  <title>{title}</title>
  <link rel="icon" type="image/svg+xml" href="/favicon.svg" />
</head>
<body>
  <Header lang={lang} />
  <slot />
</body>
</html>
```

**Step 2: Header作成**

Create: `src/components/Header.astro`

```astro
---
import LanguageSwitcher from './LanguageSwitcher.astro';

interface Props {
  lang: 'ja' | 'en';
}

const { lang } = Astro.props;
const siteTitle = lang === 'ja' ? 'AI Agent 学習コンテンツ' : 'AI Agent Learning Content';
---

<header class="site-header">
  <div class="header-inner">
    <a href={`/${lang}/`} class="site-logo">
      <span class="logo-mark">▸</span>
      <span class="logo-text">{siteTitle}</span>
    </a>
    <LanguageSwitcher lang={lang} />
  </div>
</header>

<style>
  .site-header {
    position: sticky;
    top: 0;
    z-index: 100;
    height: var(--header-height);
    background: var(--color-bg);
    border-bottom: 1px solid var(--color-border);
    backdrop-filter: blur(8px);
  }

  .header-inner {
    max-width: 1360px;
    margin: 0 auto;
    padding: 0 var(--space-6);
    height: 100%;
    display: flex;
    align-items: center;
    justify-content: space-between;
  }

  .site-logo {
    display: flex;
    align-items: center;
    gap: var(--space-2);
    text-decoration: none;
    color: var(--color-text);
    font-weight: 700;
    font-size: var(--text-lg);
  }

  .logo-mark {
    color: var(--color-accent);
    font-size: var(--text-xl);
  }
</style>
```

**Step 3: LanguageSwitcher作成**

Create: `src/components/LanguageSwitcher.astro`

```astro
---
interface Props {
  lang: 'ja' | 'en';
}

const { lang } = Astro.props;
const currentPath = Astro.url.pathname;
const otherLang = lang === 'ja' ? 'en' : 'ja';
const switchedPath = currentPath.replace(`/${lang}/`, `/${otherLang}/`);
---

<a href={switchedPath} class="lang-switch" aria-label={otherLang === 'ja' ? '日本語に切替' : 'Switch to English'}>
  {otherLang === 'ja' ? '日本語' : 'English'}
</a>

<style>
  .lang-switch {
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    text-decoration: none;
    padding: var(--space-1) var(--space-3);
    border: 1px solid var(--color-border);
    border-radius: 4px;
    transition: all 0.15s;
  }

  .lang-switch:hover {
    color: var(--color-accent);
    border-color: var(--color-accent);
  }
</style>
```

**Step 4: Breadcrumbs作成**

Create: `src/components/Breadcrumbs.astro`

```astro
---
interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface Props {
  items: BreadcrumbItem[];
}

const { items } = Astro.props;
---

<nav class="breadcrumbs" aria-label="Breadcrumb">
  <ol>
    {items.map((item, i) => (
      <li>
        {i < items.length - 1 ? (
          <a href={item.href}>{item.label}</a>
        ) : (
          <span aria-current="page">{item.label}</span>
        )}
      </li>
    ))}
  </ol>
</nav>

<style>
  .breadcrumbs {
    font-size: var(--text-sm);
    color: var(--color-text-muted);
    padding: var(--space-3) 0;
  }

  ol {
    list-style: none;
    display: flex;
    flex-wrap: wrap;
    gap: var(--space-1);
    padding: 0;
  }

  li:not(:last-child)::after {
    content: '›';
    margin-left: var(--space-1);
    color: var(--color-text-muted);
  }

  a {
    color: var(--color-text-secondary);
    text-decoration: none;
  }

  a:hover {
    color: var(--color-accent);
  }

  span[aria-current] {
    color: var(--color-text);
    font-weight: 500;
  }
</style>
```

**Step 5: Commit**

```bash
git add src/layouts/ src/components/
git commit -m "feat: add BaseLayout, Header, Breadcrumbs, LanguageSwitcher"
```

---

## Task 6: サイドバーナビゲーション

**Files:**
- Create: `src/components/Sidebar.astro`
- Create: `src/utils/navigation.ts`

**Step 1: ナビゲーション定義**

Create: `src/utils/navigation.ts`

```typescript
export interface NavItem {
  label: string;
  href: string;
  children?: NavItem[];
}

export function getNavigation(lang: 'ja' | 'en'): NavItem[] {
  const l = lang;

  const workshopLabel = l === 'ja' ? 'ワークショップ' : 'Workshop';
  const selfStudyLabel = l === 'ja' ? '自己学習' : 'Self-Study';

  const sessionNames = l === 'ja'
    ? ['体験', '環境構築・基礎', '実践①', '実践②', '運用']
    : ['Experience', 'Setup & Basics', 'Practice I', 'Practice II', 'Operations'];

  const moduleNames = l === 'ja'
    ? ['基礎', '実践スキル', '応用ユースケース', '運用']
    : ['Foundations', 'Practical Skills', 'Advanced Use Cases', 'Operations'];

  const docTypes = l === 'ja'
    ? { ig: '講師ガイド', ph: '受講者ハンドアウト', tb: 'テキスト', ex: '演習', ref: 'リファレンス' }
    : { ig: 'Instructor Guide', ph: 'Participant Handout', tb: 'Textbook', ex: 'Exercises', ref: 'Reference' };

  const sessions = ['session-00', 'session-01', 'session-02', 'session-03', 'session-04'];
  const modules = ['01-foundations', '02-practical-skills', '03-advanced-use-cases', '04-operations'];

  return [
    {
      label: workshopLabel,
      href: `/${l}/workshop/`,
      children: sessions.map((s, i) => ({
        label: `${i}. ${sessionNames[i]}`,
        href: `/${l}/workshop/${s}/instructor-guide/`,
        children: [
          { label: docTypes.ig, href: `/${l}/workshop/${s}/instructor-guide/` },
          { label: docTypes.ph, href: `/${l}/workshop/${s}/participant-handout/` },
        ],
      })),
    },
    {
      label: selfStudyLabel,
      href: `/${l}/self-study/`,
      children: modules.map((m, i) => ({
        label: `${i + 1}. ${moduleNames[i]}`,
        href: `/${l}/self-study/${m}/textbook/`,
        children: [
          { label: docTypes.tb, href: `/${l}/self-study/${m}/textbook/` },
          { label: docTypes.ex, href: `/${l}/self-study/${m}/exercises/` },
          { label: docTypes.ref, href: `/${l}/self-study/${m}/reference/` },
        ],
      })),
    },
  ];
}
```

**Step 2: Sidebar コンポーネント作成**

Create: `src/components/Sidebar.astro`

```astro
---
import { getNavigation, type NavItem } from '../utils/navigation';

interface Props {
  lang: 'ja' | 'en';
  currentPath: string;
}

const { lang, currentPath } = Astro.props;
const nav = getNavigation(lang);

function isActive(href: string): boolean {
  return currentPath === href || currentPath === href.replace(/\/$/, '');
}

function isExpanded(item: NavItem): boolean {
  if (isActive(item.href)) return true;
  return item.children?.some(c => isActive(c.href) || c.children?.some(gc => isActive(gc.href))) ?? false;
}
---

<aside class="sidebar">
  <nav class="sidebar-nav">
    {nav.map(section => (
      <div class="nav-section">
        <h3 class="nav-section-title">{section.label}</h3>
        <ul class="nav-list">
          {section.children?.map(group => (
            <li class:list={['nav-group', { expanded: isExpanded(group) }]}>
              <a
                href={group.href}
                class:list={['nav-group-title', { active: isActive(group.href) }]}
              >
                {group.label}
              </a>
              {group.children && (
                <ul class="nav-sublist">
                  {group.children.map(item => (
                    <li>
                      <a
                        href={item.href}
                        class:list={['nav-link', { active: isActive(item.href) }]}
                      >
                        {item.label}
                      </a>
                    </li>
                  ))}
                </ul>
              )}
            </li>
          ))}
        </ul>
      </div>
    ))}
  </nav>
</aside>

<style>
  .sidebar {
    width: var(--sidebar-width);
    height: calc(100vh - var(--header-height));
    position: sticky;
    top: var(--header-height);
    overflow-y: auto;
    padding: var(--space-6) var(--space-4);
    border-right: 1px solid var(--color-border);
    background: var(--color-bg-secondary);
    flex-shrink: 0;
  }

  .nav-section-title {
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
    margin-bottom: var(--space-3);
    padding: 0 var(--space-2);
  }

  .nav-section + .nav-section {
    margin-top: var(--space-6);
  }

  .nav-list, .nav-sublist {
    list-style: none;
    padding: 0;
  }

  .nav-group-title {
    display: block;
    padding: var(--space-1) var(--space-2);
    font-size: var(--text-sm);
    font-weight: 600;
    color: var(--color-text);
    text-decoration: none;
    border-radius: 4px;
    transition: background 0.15s;
  }

  .nav-group-title:hover {
    background: var(--color-border-light);
  }

  .nav-group-title.active {
    color: var(--color-accent);
  }

  .nav-sublist {
    display: none;
    padding-left: var(--space-4);
    margin-top: var(--space-1);
  }

  .nav-group.expanded .nav-sublist {
    display: block;
  }

  .nav-link {
    display: block;
    padding: var(--space-1) var(--space-2);
    font-size: var(--text-sm);
    color: var(--color-text-secondary);
    text-decoration: none;
    border-radius: 4px;
    border-left: 2px solid transparent;
    transition: all 0.15s;
  }

  .nav-link:hover {
    color: var(--color-text);
    background: var(--color-border-light);
  }

  .nav-link.active {
    color: var(--color-accent);
    border-left-color: var(--color-accent);
    background: var(--color-accent-light);
    font-weight: 500;
  }
</style>
```

**Step 3: Commit**

```bash
git add src/utils/ src/components/Sidebar.astro
git commit -m "feat: add sidebar navigation with active state highlighting"
```

---

## Task 7: TOC（ライブハイライト目次）

**Files:**
- Create: `src/components/TableOfContents.astro`

**Step 1: TOCコンポーネント作成**

Create: `src/components/TableOfContents.astro`

```astro
---
interface TocItem {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  headings: TocItem[];
  lang: 'ja' | 'en';
}

const { headings, lang } = Astro.props;
const tocTitle = lang === 'ja' ? '目次' : 'On this page';

// Only show h2 and h3
const filtered = headings.filter(h => h.depth >= 2 && h.depth <= 3);
---

{filtered.length > 0 && (
  <aside class="toc">
    <h4 class="toc-title">{tocTitle}</h4>
    <nav>
      <ul class="toc-list">
        {filtered.map(h => (
          <li class:list={[`toc-depth-${h.depth}`]}>
            <a href={`#${h.slug}`} class="toc-link" data-heading={h.slug}>
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  </aside>
)}

<script>
  function initToc() {
    const links = document.querySelectorAll<HTMLAnchorElement>('.toc-link');
    if (links.length === 0) return;

    const headingIds = Array.from(links).map(l => l.dataset.heading!);
    const headings = headingIds
      .map(id => document.getElementById(id))
      .filter((el): el is HTMLElement => el !== null);

    if (headings.length === 0) return;

    const observer = new IntersectionObserver(
      (entries) => {
        for (const entry of entries) {
          if (entry.isIntersecting) {
            links.forEach(l => l.classList.remove('active'));
            const active = document.querySelector(`.toc-link[data-heading="${entry.target.id}"]`);
            active?.classList.add('active');
          }
        }
      },
      {
        rootMargin: '-80px 0px -70% 0px',
        threshold: 0,
      }
    );

    headings.forEach(h => observer.observe(h));
  }

  // Run on initial load and on view transitions
  initToc();
  document.addEventListener('astro:page-load', initToc);
</script>

<style>
  .toc {
    width: var(--toc-width);
    height: calc(100vh - var(--header-height));
    position: sticky;
    top: var(--header-height);
    overflow-y: auto;
    padding: var(--space-6) var(--space-4);
    flex-shrink: 0;
  }

  .toc-title {
    font-size: var(--text-xs);
    font-weight: 700;
    text-transform: uppercase;
    letter-spacing: 0.05em;
    color: var(--color-text-muted);
    margin-bottom: var(--space-3);
  }

  .toc-list {
    list-style: none;
    padding: 0;
  }

  .toc-link {
    display: block;
    padding: var(--space-1) 0;
    font-size: var(--text-xs);
    color: var(--color-text-muted);
    text-decoration: none;
    border-left: 2px solid transparent;
    padding-left: var(--space-3);
    transition: all 0.15s;
    line-height: 1.5;
  }

  .toc-depth-3 .toc-link {
    padding-left: var(--space-6);
  }

  .toc-link:hover {
    color: var(--color-text-secondary);
  }

  .toc-link.active {
    color: var(--color-accent);
    border-left-color: var(--color-accent);
    font-weight: 500;
  }
</style>
```

**Step 2: Commit**

```bash
git add src/components/TableOfContents.astro
git commit -m "feat: add live-highlighted table of contents with IntersectionObserver"
```

---

## Task 8: DocsLayout（3カラムレイアウト統合）

**Files:**
- Create: `src/layouts/DocsLayout.astro`

**Step 1: DocsLayout作成**

Create: `src/layouts/DocsLayout.astro`

```astro
---
import BaseLayout from './BaseLayout.astro';
import Sidebar from '../components/Sidebar.astro';
import Breadcrumbs from '../components/Breadcrumbs.astro';
import TableOfContents from '../components/TableOfContents.astro';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface TocItem {
  depth: number;
  slug: string;
  text: string;
}

interface Props {
  title: string;
  lang: 'ja' | 'en';
  breadcrumbs: BreadcrumbItem[];
  headings: TocItem[];
}

const { title, lang, breadcrumbs, headings } = Astro.props;
const currentPath = Astro.url.pathname;
---

<BaseLayout title={title} lang={lang}>
  <div class="docs-layout">
    <Sidebar lang={lang} currentPath={currentPath} />
    <main class="docs-main">
      <Breadcrumbs items={breadcrumbs} />
      <article class="prose">
        <slot />
      </article>
    </main>
    <TableOfContents headings={headings} lang={lang} />
  </div>
</BaseLayout>

<style>
  .docs-layout {
    display: flex;
    max-width: 1360px;
    margin: 0 auto;
    min-height: calc(100vh - var(--header-height));
  }

  .docs-main {
    flex: 1;
    min-width: 0;
    padding: var(--space-4) var(--space-8) var(--space-16);
    max-width: var(--content-max);
    margin: 0 auto;
  }

  @media (max-width: 1100px) {
    .docs-layout :global(.toc) {
      display: none;
    }
  }

  @media (max-width: 800px) {
    .docs-layout :global(.sidebar) {
      display: none;
    }

    .docs-main {
      padding: var(--space-4) var(--space-4) var(--space-12);
    }
  }
</style>
```

**Step 2: Commit**

```bash
git add src/layouts/DocsLayout.astro
git commit -m "feat: add 3-column DocsLayout (sidebar + content + TOC)"
```

---

## Task 9: ページルーティング — ルート・言語トップ

**Files:**
- Create: `src/pages/index.astro`
- Create: `src/pages/[lang]/index.astro`

**Step 1: ルートリダイレクト**

Create: `src/pages/index.astro`

```astro
---
return Astro.redirect('/ja/');
---
```

**Step 2: 言語トップページ**

Create: `src/pages/[lang]/index.astro`

```astro
---
import BaseLayout from '../../layouts/BaseLayout.astro';
import { getNavigation } from '../../utils/navigation';

export function getStaticPaths() {
  return [
    { params: { lang: 'ja' } },
    { params: { lang: 'en' } },
  ];
}

const { lang } = Astro.params as { lang: 'ja' | 'en' };
const nav = getNavigation(lang);

const titles = {
  ja: { main: '非エンジニアのための AI Agent 活用ガイド', sub: 'Claude Code を使ってビジネスタスクを自動化する', workshop: 'ワークショップ', selfStudy: '自己学習', workshopDesc: '講師と一緒に体験しながら学ぶ全5回シリーズ', selfStudyDesc: '自分のペースでじっくり学べる全4モジュール' },
  en: { main: 'AI Agent Guide for Non-Engineers', sub: 'Automate business tasks with Claude Code', workshop: 'Workshop', selfStudy: 'Self-Study', workshopDesc: 'A 5-session instructor-led series', selfStudyDesc: 'A 4-module self-paced curriculum' },
};

const t = titles[lang];
---

<BaseLayout title={t.main} lang={lang}>
  <div class="landing">
    <div class="hero">
      <span class="hero-mark">▸</span>
      <h1>{t.main}</h1>
      <p class="hero-sub">{t.sub}</p>
    </div>

    <div class="cards">
      {nav.map(section => (
        <a href={section.href} class="card">
          <h2 class="card-title">{section.label}</h2>
          <p class="card-desc">
            {section.label === t.workshop ? t.workshopDesc : t.selfStudyDesc}
          </p>
          <ul class="card-items">
            {section.children?.map(item => (
              <li><a href={item.href}>{item.label}</a></li>
            ))}
          </ul>
        </a>
      ))}
    </div>
  </div>
</BaseLayout>

<style>
  .landing {
    max-width: 900px;
    margin: 0 auto;
    padding: var(--space-12) var(--space-6);
  }

  .hero {
    text-align: center;
    margin-bottom: var(--space-12);
  }

  .hero-mark {
    font-size: 2.5rem;
    color: var(--color-accent);
  }

  .hero h1 {
    font-size: var(--text-3xl);
    font-weight: 700;
    margin-top: var(--space-4);
    letter-spacing: -0.02em;
  }

  .hero-sub {
    color: var(--color-text-secondary);
    font-size: var(--text-lg);
    margin-top: var(--space-2);
  }

  .cards {
    display: grid;
    grid-template-columns: repeat(auto-fit, minmax(360px, 1fr));
    gap: var(--space-6);
  }

  .card {
    border: 1px solid var(--color-border);
    border-radius: 8px;
    padding: var(--space-6);
    text-decoration: none;
    color: var(--color-text);
    transition: border-color 0.15s, box-shadow 0.15s;
  }

  .card:hover {
    border-color: var(--color-accent);
    box-shadow: 0 2px 12px rgba(217, 64, 50, 0.08);
  }

  .card-title {
    font-size: var(--text-xl);
    font-weight: 700;
    color: var(--color-accent);
    margin-bottom: var(--space-2);
  }

  .card-desc {
    color: var(--color-text-secondary);
    font-size: var(--text-sm);
    margin-bottom: var(--space-4);
  }

  .card-items {
    list-style: none;
    padding: 0;
  }

  .card-items li {
    padding: var(--space-1) 0;
    font-size: var(--text-sm);
    border-bottom: 1px solid var(--color-border-light);
  }

  .card-items li:last-child {
    border-bottom: none;
  }

  .card-items a {
    color: var(--color-text);
    text-decoration: none;
  }

  .card-items a:hover {
    color: var(--color-accent);
  }
</style>
```

**Step 3: ビルド確認**

Run: `npx astro dev` → ブラウザで `/ja/` を確認
Expected: ランディングページにワークショップ・自己学習のカード表示

**Step 4: Commit**

```bash
git add src/pages/
git commit -m "feat: add root redirect and language landing pages"
```

---

## Task 10: コンテンツページ動的ルーティング

**Files:**
- Create: `src/pages/[lang]/workshop/[session]/[type].astro`
- Create: `src/pages/[lang]/self-study/[module]/[type].astro`
- Create: `src/utils/breadcrumbs.ts`

**Step 1: パンくずユーティリティ作成**

Create: `src/utils/breadcrumbs.ts`

```typescript
interface BreadcrumbItem {
  label: string;
  href?: string;
}

const sessionLabels: Record<string, Record<string, string>> = {
  ja: {
    'session-00': 'Session 0: 体験',
    'session-01': 'Session 1: 基礎',
    'session-02': 'Session 2: 実践①',
    'session-03': 'Session 3: 実践②',
    'session-04': 'Session 4: 運用',
  },
  en: {
    'session-00': 'Session 0: Experience',
    'session-01': 'Session 1: Basics',
    'session-02': 'Session 2: Practice I',
    'session-03': 'Session 3: Practice II',
    'session-04': 'Session 4: Operations',
  },
};

const moduleLabels: Record<string, Record<string, string>> = {
  ja: {
    '01-foundations': 'Module 1: 基礎',
    '02-practical-skills': 'Module 2: 実践スキル',
    '03-advanced-use-cases': 'Module 3: 応用',
    '04-operations': 'Module 4: 運用',
  },
  en: {
    '01-foundations': 'Module 1: Foundations',
    '02-practical-skills': 'Module 2: Practical Skills',
    '03-advanced-use-cases': 'Module 3: Advanced',
    '04-operations': 'Module 4: Operations',
  },
};

const typeLabels: Record<string, Record<string, string>> = {
  ja: {
    'instructor-guide': '講師ガイド',
    'participant-handout': '受講者ハンドアウト',
    textbook: 'テキスト',
    exercises: '演習',
    reference: 'リファレンス',
  },
  en: {
    'instructor-guide': 'Instructor Guide',
    'participant-handout': 'Participant Handout',
    textbook: 'Textbook',
    exercises: 'Exercises',
    reference: 'Reference',
  },
};

export function workshopBreadcrumbs(lang: string, session: string, type: string): BreadcrumbItem[] {
  const home = lang === 'ja' ? 'ホーム' : 'Home';
  const ws = lang === 'ja' ? 'ワークショップ' : 'Workshop';
  return [
    { label: home, href: `/${lang}/` },
    { label: ws, href: `/${lang}/workshop/${session}/instructor-guide/` },
    { label: sessionLabels[lang]?.[session] ?? session, href: `/${lang}/workshop/${session}/instructor-guide/` },
    { label: typeLabels[lang]?.[type] ?? type },
  ];
}

export function studyBreadcrumbs(lang: string, mod: string, type: string): BreadcrumbItem[] {
  const home = lang === 'ja' ? 'ホーム' : 'Home';
  const ss = lang === 'ja' ? '自己学習' : 'Self-Study';
  return [
    { label: home, href: `/${lang}/` },
    { label: ss, href: `/${lang}/self-study/${mod}/textbook/` },
    { label: moduleLabels[lang]?.[mod] ?? mod, href: `/${lang}/self-study/${mod}/textbook/` },
    { label: typeLabels[lang]?.[type] ?? type },
  ];
}
```

**Step 2: ワークショップ動的ページ作成**

Create: `src/pages/[lang]/workshop/[session]/[type].astro`

```astro
---
import { getCollection, render } from 'astro:content';
import DocsLayout from '../../../../layouts/DocsLayout.astro';
import { workshopBreadcrumbs } from '../../../../utils/breadcrumbs';

export async function getStaticPaths() {
  const langs = ['ja', 'en'] as const;
  const sessions = ['session-00', 'session-01', 'session-02', 'session-03', 'session-04'];
  const types = ['instructor-guide', 'participant-handout'];

  const paths = [];
  for (const lang of langs) {
    const collection = await getCollection(`${lang}-workshop`);
    for (const session of sessions) {
      for (const type of types) {
        const entry = collection.find(e =>
          e.id.includes(session) && e.id.includes(type)
        );
        if (entry) {
          paths.push({
            params: { lang, session, type },
            props: { entry },
          });
        }
      }
    }
  }
  return paths;
}

const { lang, session, type } = Astro.params as {
  lang: 'ja' | 'en';
  session: string;
  type: string;
};
const { entry } = Astro.props;
const { Content, headings } = await render(entry);
const breadcrumbs = workshopBreadcrumbs(lang, session, type);
---

<DocsLayout
  title={entry.data.title}
  lang={lang}
  breadcrumbs={breadcrumbs}
  headings={headings}
>
  <Content />
</DocsLayout>
```

**Step 3: 自己学習動的ページ作成**

Create: `src/pages/[lang]/self-study/[module]/[type].astro`

```astro
---
import { getCollection, render } from 'astro:content';
import DocsLayout from '../../../../layouts/DocsLayout.astro';
import { studyBreadcrumbs } from '../../../../utils/breadcrumbs';

export async function getStaticPaths() {
  const langs = ['ja', 'en'] as const;
  const modules = ['01-foundations', '02-practical-skills', '03-advanced-use-cases', '04-operations'];
  const types = ['textbook', 'exercises', 'reference'];

  const paths = [];
  for (const lang of langs) {
    const collection = await getCollection(`${lang}-study`);
    for (const mod of modules) {
      for (const type of types) {
        const entry = collection.find(e =>
          e.id.includes(mod) && e.id.includes(type)
        );
        if (entry) {
          paths.push({
            params: { lang, module: mod, type },
            props: { entry },
          });
        }
      }
    }
  }
  return paths;
}

const { lang, module: mod, type } = Astro.params as {
  lang: 'ja' | 'en';
  module: string;
  type: string;
};
const { entry } = Astro.props;
const { Content, headings } = await render(entry);
const breadcrumbs = studyBreadcrumbs(lang, mod, type);
---

<DocsLayout
  title={entry.data.title}
  lang={lang}
  breadcrumbs={breadcrumbs}
  headings={headings}
>
  <Content />
</DocsLayout>
```

**Step 4: ビルド確認**

Run: `npx astro build`
Expected: 全ルートが静的生成される（44ページ + 2ランディング + 1リダイレクト）

**Step 5: Commit**

```bash
git add src/pages/ src/utils/breadcrumbs.ts
git commit -m "feat: add dynamic content routing for workshop and self-study pages"
```

---

## Task 11: レスポンシブ対応 + モバイルメニュー

**Files:**
- Create: `src/components/MobileMenuButton.astro`
- Modify: `src/layouts/DocsLayout.astro` — モバイルメニューボタン追加
- Modify: `src/components/Sidebar.astro` — モバイル時のオーバーレイ対応

**Step 1: MobileMenuButton作成**

Create: `src/components/MobileMenuButton.astro`

```astro
<button class="mobile-menu-btn" aria-label="Toggle menu" aria-expanded="false">
  <svg width="20" height="20" viewBox="0 0 20 20" fill="none">
    <path d="M3 5h14M3 10h14M3 15h14" stroke="currentColor" stroke-width="1.5" stroke-linecap="round"/>
  </svg>
</button>

<script>
  function initMobileMenu() {
    const btn = document.querySelector('.mobile-menu-btn');
    const sidebar = document.querySelector('.sidebar');
    if (!btn || !sidebar) return;

    btn.addEventListener('click', () => {
      const isOpen = sidebar.classList.toggle('mobile-open');
      btn.setAttribute('aria-expanded', String(isOpen));
    });

    // Close on link click
    sidebar.querySelectorAll('a').forEach(link => {
      link.addEventListener('click', () => {
        sidebar.classList.remove('mobile-open');
        btn.setAttribute('aria-expanded', 'false');
      });
    });
  }

  initMobileMenu();
  document.addEventListener('astro:page-load', initMobileMenu);
</script>

<style>
  .mobile-menu-btn {
    display: none;
    background: none;
    border: 1px solid var(--color-border);
    border-radius: 4px;
    padding: var(--space-1) var(--space-2);
    cursor: pointer;
    color: var(--color-text);
  }

  @media (max-width: 800px) {
    .mobile-menu-btn {
      display: flex;
      align-items: center;
    }
  }
</style>
```

**Step 2: Header にモバイルメニューボタンを追加**

Modify: `src/components/Header.astro` — `.header-inner` 内に MobileMenuButton を import & 配置

**Step 3: Sidebar にモバイルオーバーレイスタイル追加**

Modify: `src/components/Sidebar.astro` — `<style>` ブロックに追記:

```css
@media (max-width: 800px) {
  .sidebar {
    position: fixed;
    left: 0;
    top: var(--header-height);
    z-index: 50;
    transform: translateX(-100%);
    transition: transform 0.2s ease;
    box-shadow: 2px 0 12px rgba(0,0,0,0.1);
  }

  .sidebar.mobile-open {
    transform: translateX(0);
  }
}
```

**Step 4: ビルド確認**

Run: `npx astro build && npx astro preview`
ブラウザでウィンドウ幅を狭めて確認

**Step 5: Commit**

```bash
git add src/components/ src/layouts/
git commit -m "feat: add responsive layout with mobile menu overlay"
```

---

## Task 12: ファビコン + メタタグ + View Transitions

**Files:**
- Create: `public/favicon.svg`
- Modify: `src/layouts/BaseLayout.astro` — View Transitions追加

**Step 1: ファビコン作成**

Create: `public/favicon.svg`

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 32 32">
  <rect width="32" height="32" rx="6" fill="#D94032"/>
  <text x="16" y="23" text-anchor="middle" fill="white" font-family="system-ui" font-weight="bold" font-size="18">A</text>
</svg>
```

**Step 2: BaseLayoutにView Transitions追加**

Modify: `src/layouts/BaseLayout.astro`

```astro
---
import { ViewTransitions } from 'astro:transitions';
// ... existing imports
---
<!-- In <head>: -->
<ViewTransitions />
<meta name="description" content="非エンジニアのためのClaude Code活用学習コンテンツ" />
```

これによりページ遷移時にブラウザ履歴が正しく記録され、戻る/進むボタンが機能する。

**Step 3: Commit**

```bash
git add public/ src/layouts/BaseLayout.astro
git commit -m "feat: add favicon, meta tags, and View Transitions for navigation history"
```

---

## Task 13: .gitignore + ビルド確認 + 最終コミット

**Files:**
- Create/Modify: `.gitignore`

**Step 1: .gitignore更新**

Append to `.gitignore`:

```
# Astro
node_modules/
dist/
.astro/
```

**Step 2: フルビルド確認**

Run: `npx astro build`
Expected: `dist/` に全ページが生成される。エラーなし。

**Step 3: ローカルプレビュー確認**

Run: `npx astro preview`
確認項目:
- [ ] `/` → `/ja/` にリダイレクト
- [ ] `/ja/` にワークショップ・自己学習のカード表示
- [ ] 各コンテンツページでサイドバー・パンくず・TOC表示
- [ ] TOCが現在セクションをハイライト
- [ ] 言語切替ボタンでEN/JA切替
- [ ] ブラウザの戻る/進むが正常動作
- [ ] レスポンシブ: 800px以下でモバイルメニュー

**Step 4: Commit**

```bash
git add .gitignore
git commit -m "chore: add Astro build artifacts to .gitignore"
```

---

## 全体サマリー

| Task | 内容 | 新規ファイル数 |
|------|------|-------------|
| 1 | Astro初期化 + i18n設定 | 3 |
| 2 | 全44 MDにfrontmatter追加 | 1 (script) + 44 modify |
| 3 | Content Collections定義 | 1 |
| 4 | グローバルCSS | 1 |
| 5 | BaseLayout + Header + パンくず + 言語切替 | 4 |
| 6 | サイドバーナビゲーション | 2 |
| 7 | ライブTOC | 1 |
| 8 | DocsLayout（3カラム統合） | 1 |
| 9 | ルート + 言語トップページ | 2 |
| 10 | コンテンツ動的ルーティング | 3 |
| 11 | レスポンシブ + モバイルメニュー | 1 + 2 modify |
| 12 | ファビコン + View Transitions | 1 + 1 modify |
| 13 | .gitignore + 最終確認 | 1 |

**合計: 新規 ~21ファイル, 修正 ~47ファイル, コミット 13回**
