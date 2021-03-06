import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './008-observables.md';

const article: Article = {
  id: 8,
  slug: 'observables',
  header: 'Observables',
  subheader: '',
  body: { markdown },
  preview: `Or, an idiomatic way to avoid callback hell.`,
  tags: [TAGS.javascript, TAGS.rxjs],
  publishedOn: '2019-02-08',
  author: 'Aaron Ross',
  readingTime: { text: '9 min read', minutes: 8.5, time: 510000, words: 1700 },
};

export default article;
