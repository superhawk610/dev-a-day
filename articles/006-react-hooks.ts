import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './006-react-hooks.md';

const article: Article = {
  id: 6,
  slug: 'react-hooks',
  header: 'Hooks, Hooks, Hooks!',
  subheader: 'React 16.8.0 (Stable!)',
  body,
  preview: `Component-based design transformed the frontend
  landscape by fundamentally changing the way web apps are built.
  React's new Hooks API is set to do that again, this time for function
  logic.`,
  tags: [TAGS.javascript, TAGS.react],
  publishedOn: '2019-02-06',
  author: 'Aaron Ross',
  readingTime: {
    text: '6 min read',
    minutes: 5.26,
    time: 315599.99999999994,
    words: 1052,
  },
};

export default article;
