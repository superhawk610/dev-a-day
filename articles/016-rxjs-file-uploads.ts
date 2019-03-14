import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './016-rxjs-file-uploads.md';

const article: Article = {
  id: 16,
  slug: 'rxjs-file-uploads',
  header: 'RxJS File Uploads (Part 1)',
  subheader: 'UI progress updates too!',
  body: {
    markdown,
    lines: {
      4: '1,3,11,13,17-26',
      6: '2,7-16',
      7: '1,13,17-24',
      9: '2',
      10: '4,13-17',
      11: '1,12',
    },
  },
  preview: `A common task in frontend development is uploading
  a file provided by the user. Visual feedback on upload progress
  prevents the user from worrying while they wait.`,
  tags: [TAGS.javascript, TAGS.angular, TAGS.rxjs],
  publishedOn: '2019-03-13',
  author: 'Aaron Ross',
  readingTime: { text: '6 min read', minutes: 5.36, time: 321600, words: 1072 },
};

export default article;
