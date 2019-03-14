import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './014-bind.md';

const article: Article = {
  id: 14,
  slug: 'bind',
  header: 'B is for Bind',
  subheader: 'ABCs of JavaScript',
  body: { markdown },
  preview: `JavaScript always knows exactly what context you
  intended. For those times where it doesn't, try out a bind.`,
  tags: [TAGS.abcs, TAGS.javascript],
  publishedOn: '2019-02-21',
  author: 'Aaron Ross',
  readingTime: { text: '5 min read', minutes: 4.495, time: 269700, words: 899 },
};

export default article;
