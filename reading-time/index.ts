import { join } from 'path';
import { readdirSync, readFileSync, writeFileSync } from 'fs';
import readingTime = require('reading-time');

const root = join(__dirname, '..', 'articles');

const files = readdirSync(root).filter(f => f !== 'index.ts');

for (const file of files) {
  const path = join(root, file);
  const ts = readFileSync(path, 'utf-8');
  // only generate stats for files that request them
  if (ts.match(/__READING_TIME__/)) {
    const mdFile = file.replace(/.ts$/, '.md');
    const mdPath = join(root, mdFile);
    const md = readFileSync(mdPath, 'utf-8');
    const stats = readingTime(md);
    const rewrite = ts.replace(/__READING_TIME__/, JSON.stringify(stats));
    writeFileSync(path, rewrite, 'utf-8');
  }
}
