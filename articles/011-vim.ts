import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './011-vim.md';

const article: Article = {
  id: 11,
  slug: 'vim',
  header: 'Vim',
  subheader: 'Instructions not included',
  body,
  preview: `Have you ever thought to yourself "I wish my text
  editor were entirely cryptic, didn't let me type without
  entering a secret code, and can't be closed without rebooting?"
  I've got just the thing for you.`,
  tags: [TAGS.devTools],
  publishedOn: '2019-02-11',
  author: 'Aaron Ross',
  readingTime: {
    text: '7 min read',
    minutes: 6.175,
    time: 370500,
    words: 1235,
  },
};

export default article;
