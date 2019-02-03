import { Article } from '../models/article.model';
import { TAGS } from '../../constants';
import body from './002-search-context.md';

const article: Article = {
  id: 2,
  slug: 'search-context',
  header: 'Creating a search context',
  subheader: 'Searching for user input in a dataset',
  body,
  preview:
    "A common task in front-end development is taking a string of user input and filtering a dataset for rows that contain that input. Let's explore that.",
  tags: [TAGS.javascript],
  publishedOn: '2019-02-02',
  author: 'Aaron Ross',
};

export default article;
