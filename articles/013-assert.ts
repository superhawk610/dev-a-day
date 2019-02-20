import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './013-assert.md';

const article: Article = {
  id: 13,
  slug: 'assert',
  header: 'A is for Assert',
  subheader: 'ABCs of JavaScript',
  body,
  preview: `All programmers are perfect, of course.
  For those times where we're not, toss in an assert.`,
  tags: [TAGS.abcs, TAGS.javascript],
  publishedOn: '2019-02-19',
  author: 'Aaron Ross',
};

export default article;
