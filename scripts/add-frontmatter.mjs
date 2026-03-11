import { readdir, readFile, writeFile } from 'node:fs/promises';
import { join, basename, dirname, relative } from 'node:path';

const ROOT = new URL('..', import.meta.url).pathname.replace(/\/$/, '');

const ORDER_MAP = {
  'textbook': 1,
  'instructor-guide': 1,
  'exercises': 2,
  'participant-handout': 2,
  'reference': 3,
};

async function findMarkdownFiles(dir) {
  const entries = await readdir(dir, { withFileTypes: true, recursive: true });
  return entries
    .filter(e => e.isFile() && e.name.endsWith('.md'))
    .map(e => join(e.parentPath ?? e.path, e.name));
}

async function processFile(filePath) {
  const content = await readFile(filePath, 'utf-8');

  // Skip files that already have frontmatter
  if (content.startsWith('---')) {
    console.log(`SKIP (already has frontmatter): ${filePath}`);
    return false;
  }

  // Extract title from first H1
  const h1Match = content.match(/^# (.+)$/m);
  const title = h1Match ? h1Match[1].trim() : basename(filePath, '.md');

  // Parse path components
  const rel = relative(ROOT, filePath); // e.g. ja/self-study/01-foundations/textbook.md
  const parts = rel.split('/');
  const lang = parts[0];                // ja or en
  const category = parts[1];            // workshop or self-study
  const moduleName = parts[2];          // session-00, 01-foundations, etc.
  const contentType = basename(filePath, '.md'); // textbook, exercises, etc.
  const order = ORDER_MAP[contentType];

  const frontmatter = [
    '---',
    `title: "${title}"`,
    `lang: "${lang}"`,
    `category: "${category}"`,
    `module: "${moduleName}"`,
    `contentType: "${contentType}"`,
    `order: ${order}`,
    '---',
    '',
  ].join('\n');

  await writeFile(filePath, frontmatter + content);
  console.log(`ADDED: ${rel}`);
  return true;
}

async function main() {
  const dirs = [
    join(ROOT, 'ja', 'workshop'),
    join(ROOT, 'ja', 'self-study'),
    join(ROOT, 'en', 'workshop'),
    join(ROOT, 'en', 'self-study'),
  ];

  let added = 0;
  let skipped = 0;

  for (const dir of dirs) {
    const files = await findMarkdownFiles(dir);
    for (const f of files) {
      const wasAdded = await processFile(f);
      if (wasAdded) added++; else skipped++;
    }
  }

  console.log(`\nDone. Added frontmatter to ${added} files, skipped ${skipped}.`);
}

main().catch(err => { console.error(err); process.exit(1); });
