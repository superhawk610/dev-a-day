import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './002-search-context.md';

const article: Article = {
  id: 2,
  slug: 'search-context',
  header: 'Creating a search context',
  subheader: 'Searching for user input in a dataset',
  body: { markdown },
  preview: `A common task in front-end development is taking
  a string of user input and filtering a dataset for rows
  that contain that input. Let's explore that.`,
  tags: [TAGS.javascript],
  publishedOn: '2019-02-02',
  author: 'Aaron Ross',
  readingTime: {
    text: '4 min read',
    minutes: 3.38,
    time: 202799.99999999997,
    words: 676,
  },
};

export default article;
