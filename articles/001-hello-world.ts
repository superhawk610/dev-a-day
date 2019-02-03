import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';

const article: Article = {
  id: 1,
  slug: 'hello-world',
  header: 'Hello, world!',
  subheader: '',
  body: '001-hello-world',
  preview: `In which our intrepid hero embarks upon a perilous quest.`,
  tags: [],
  publishedOn: '2019-02-01',
  author: 'Aaron Ross',
};

export default article;
