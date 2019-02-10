import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './008-observables.md';

const article: Article = {
  id: 8,
  slug: 'observables',
  header: 'Observables',
  subheader: '',
  body,
  preview: `Or, an idiomatic way to avoid callback hell.`,
  tags: [TAGS.javascript],
  publishedOn: '2019-02-08',
  author: 'Aaron Ross',
};

export default article;
