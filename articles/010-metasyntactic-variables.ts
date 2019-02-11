import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './010-metasyntactic-variables.md';

const article: Article = {
  id: 10,
  slug: 'metasyntactic-variables',
  header: 'Metasyntactic Variables',
  subheader: 'foo, bar, baz, and the lot',
  body,
  preview: `You use them every day and you've probably never
  given them a second thought. What is a foo? How exactly does
  one bar? How big is a baz? Great question.`,
  tags: [TAGS.javascript, TAGS.python],
  publishedOn: '2019-02-10',
  author: 'Aaron Ross',
};

export default article;
