import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';

const article: Article = {
  id: 4,
  slug: 'transducers',
  header: 'Transducers',
  subheader: 'Transforming a reducer',
  body: '004-transducers',
  preview: `You have a reducer that's almost perfect, but it's not
  quite right. A transducer can take your existing reducer and fit
  it to the task at hand.`,
  tags: [TAGS.javascript, TAGS.fp],
  publishedOn: '2019-02-04',
  author: 'Aaron Ross',
};

export default article;
