import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';

const article: Article = {
  id: 3,
  slug: 'reducers',
  header: 'Reducers',
  subheader: 'Transforming multiple inputs into a single output',
  body: '003-reducers',
  preview: `It may not be immediately obvious through the many
  modern layers of abstraction, but code can often be boiled down
  to piping some number of inputs to some other form of output.
  Reducers play a key role in this process.`,
  tags: [TAGS.javascript],
  publishedOn: '2019-02-03',
  author: 'Aaron Ross',
};

export default article;
