import { Article } from '../models/article.model';
import { TAGS } from '../../constants';
import body from './001-hello-world.md';

const article: Article = {
  id: 1,
  slug: 'hello-world',
  header: 'Hello, world!',
  subheader: 'My first post.',
  body,
  preview: 'This is a post excerpt',
  tags: [TAGS.angular, TAGS.javascript],
  publishedOn: '2019-02-01',
  author: 'Aaron Ross',
};

export default article;
