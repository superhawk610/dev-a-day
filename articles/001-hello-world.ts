import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './001-hello-world.md';

const article: Article = {
  id: 1,
  slug: 'hello-world',
  header: 'Hello, world!',
  subheader: '',
  body: { markdown },
  preview: `In which our intrepid hero embarks upon a perilous quest.`,
  tags: [],
  publishedOn: '2019-02-01',
  author: 'Aaron Ross',
  readingTime: { text: '3 min read', minutes: 2.015, time: 120900, words: 403 },
};

export default article;
