import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './012-object-spread.md';

const article: Article = {
  id: 12,
  slug: 'object-spread',
  header: 'Tips & Tricks: Object Spread',
  subheader: '',
  body,
  preview: `The ECMAScript standard has brought with it many
  useful syntactic shortcuts that make development quick and
  easy, if not a bit cryptic at times. Let's take a look at the
  object spread operator.`,
  tags: [TAGS.javascript],
  publishedOn: '2019-02-12',
  author: 'Aaron Ross',
};

export default article;
