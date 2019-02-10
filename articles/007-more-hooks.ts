import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './007-more-hooks.md';

const article: Article = {
  id: 7,
  slug: 'more-hooks',
  header: 'Hooks, continued',
  subheader: '',
  body,
  preview: `Yesterday, we talked about the high-level implications
  of React's new Hooks API. Now we'll go over their usage and
  explore a few different patterns you'll want to familiarize
  yourself with.`,
  tags: [TAGS.javascript, TAGS.react],
  publishedOn: '2019-02-07',
  author: 'Aaron Ross',
};

export default article;
