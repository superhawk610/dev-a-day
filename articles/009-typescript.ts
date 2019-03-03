import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './009-typescript.md';

const article: Article = {
  id: 9,
  slug: 'typescript',
  header: 'TypeScript',
  subheader: 'Strong, static typing for JavaScript',
  body,
  preview: `Have you ever worked on a huge block of code
  for a few hours, bundled and run it, and it just worked?
  With TypeScript, that becomes a much more common occurence.`,
  tags: [TAGS.javascript],
  publishedOn: '2019-02-09',
  author: 'Aaron Ross',
  readingTime: { text: '8 min read', minutes: 7.84, time: 470400, words: 1568 },
};

export default article;
