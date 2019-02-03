import * as path from 'path';
import * as fs from 'fs';
import { articles } from './articles';

const output = path.join(__dirname, '..', 'src', 'assets', 'articles.json');

fs.writeFileSync(output, JSON.stringify(articles), 'utf-8');
