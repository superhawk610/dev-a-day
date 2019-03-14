import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as body from './016-rxjs-file-uploads.md';

const article: Article = {
  id: 16,
  slug: 'rxjs-file-uploads',
  header: 'RxJS File Uploads (Part 1)',
  subheader: 'UI progress updates too!',
  body,
  preview: `A common task in frontend development is uploading
  a file provided by the user. Visual feedback on upload progress
  prevents the user from worrying while they wait.`,
  tags: [TAGS.javascript, TAGS.angular, TAGS.rxjs],
  publishedOn: '2019-03-13',
  author: 'Aaron Ross',
  readingTime: { text: '6 min read', minutes: 5.36, time: 321600, words: 1072 },
};

export default article;
