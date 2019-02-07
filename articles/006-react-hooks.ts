import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';

const article: Article = {
  id: 6,
  slug: 'react-hooks',
  header: 'Hooks, Hooks, Hooks!',
  subheader: 'React 16.8.0 (Stable!)',
  body: '006-react-hooks',
  preview: `Component-based design transformed the frontend
  landscape by fundamentally changing the way web apps are built.
  React's new Hooks API is set to do that again, this time for function
  logic.`,
  tags: [TAGS.javascript, TAGS.react],
  publishedOn: '2019-02-06',
  author: 'Aaron Ross',
};

export default article;
