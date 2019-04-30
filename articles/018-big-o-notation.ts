import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './018-big-o-notation.md';

const article: Article = {
  id: 18,
  slug: 'big-o-notation',
  header: 'Big O Notation',
  subheader: '',
  body: {
    markdown,
    lines: {},
  },
  preview: `It's important to be able to quickly and efficiently evaluate
  and communicate the relative performance of an algorithm or block of code.
  Though daunting at first, Big O notation does just that.`,
  tags: [TAGS.compSci, TAGS.javascript],
  publishedOn: '2019-04-30',
  author: 'Aaron Ross',
  readingTime: { text: '6 min read', minutes: 5.71, time: 342600, words: 1142 },
};

export default article;
