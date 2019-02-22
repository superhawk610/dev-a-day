import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './014-bind.md';

const article: Article = {
  id: 14,
  slug: 'bind',
  header: 'B is for Bind',
  subheader: 'ABCs of JavaScript',
  body,
  preview: `JavaScript always knows exactly what context you
  intended. For those times where it doesn't, try out a bind.`,
  tags: [TAGS.abcs, TAGS.javascript],
  publishedOn: '2019-02-21',
  author: 'Aaron Ross',
};

export default article;
