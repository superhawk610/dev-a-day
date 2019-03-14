import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './003-reducers.md';

const article: Article = {
  id: 3,
  slug: 'reducers',
  header: 'Reducers',
  subheader: 'Transforming multiple inputs into a single output',
  body: { markdown },
  preview: `It may not be immediately obvious through the many
  modern layers of abstraction, but code can often be boiled down
  to piping some number of inputs to some other form of output.
  Reducers play a key role in this process.`,
  tags: [TAGS.javascript, TAGS.fp],
  publishedOn: '2019-02-03',
  author: 'Aaron Ross',
  readingTime: {
    text: '7 min read',
    minutes: 6.815,
    time: 408900.00000000006,
    words: 1363,
  },
};

export default article;
