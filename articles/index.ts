import * as path from 'path';
import * as fs from 'fs';
import * as bytes from 'bytes';

import { articles } from './articles';

const output = path.join(__dirname, '..', 'src', 'assets', 'articles.json');

const json = JSON.stringify(articles);
const outputSize = bytes(json.length).toLowerCase();
fs.writeFileSync(output, json, 'utf-8');

console.log();
console.log(`  -- WROTE ${outputSize} TO articles.json --`);
console.log();
