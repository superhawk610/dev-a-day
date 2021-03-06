import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './005-ninja-reducers.md';

const article: Article = {
  id: 5,
  slug: 'ninja-reducers',
  header: 'Ninja Reducers',
  subheader: 'A reducer by any other name',
  body: { markdown },
  preview: `We defined reducers as a function that accepts two
  inputs and produces a single output. What about reducers that
  don't immediately look like reducers? You may already know a few!`,
  tags: [TAGS.javascript, TAGS.react, TAGS.fp],
  publishedOn: '2019-02-05',
  author: 'Aaron Ross',
  readingTime: { text: '5 min read', minutes: 4.465, time: 267900, words: 893 },
};

export default article;
