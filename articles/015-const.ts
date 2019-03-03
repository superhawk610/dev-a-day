import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './015-const.md';

const article: Article = {
  id: 15,
  slug: 'const',
  header: 'C is for Const',
  subheader: 'ABCs of JavaScript',
  body,
  preview: `JavaScript always knows exactly what variable context you
  intended. For those times where it doesn't, try out a const.`,
  tags: [TAGS.abcs, TAGS.javascript],
  publishedOn: '2019-03-03',
  author: 'Aaron Ross',
  readingTime: {
    text: '5 min read',
    minutes: 4.945,
    time: 296700.00000000006,
    words: 989,
  },
};

export default article;
