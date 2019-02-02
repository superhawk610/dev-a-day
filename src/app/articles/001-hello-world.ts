import { Article } from '../models/article.model';
import { TAGS } from '../../constants';
import body from './001-hello-world.md';

const article: Article = {
  id: 1,
  slug: 'hello-world',
  header: 'Hello, world!',
  subheader: '',
  body,
  preview: 'In which our intrepid hero embarks upon a perilous quest.',
  tags: [],
  publishedOn: '2019-02-01',
  author: 'Aaron Ross',
};

export default article;
