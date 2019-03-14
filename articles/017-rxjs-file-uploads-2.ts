import { Article } from '../src/app/models/article.model';
import { TAGS } from '../src/constants';
import * as markdown from './017-rxjs-file-uploads-2.md';

const article: Article = {
  id: 17,
  slug: 'rxjs-file-uploads-2',
  header: 'RxJS File Uploads (Part 2)',
  subheader: 'Now with 100% more pipes!',
  body: {
    markdown,
    lines: {
      0: '1,12',
      2: '1,2,10-29',
      3: '7-9',
    },
  },
  preview: `Now that you're an uploading aficionado, let's take it one
  step further. We'll clean up our UploadService implementation and talk
  about some corner cases you may encounter.`,
  tags: [TAGS.javascript, TAGS.angular, TAGS.rxjs],
  publishedOn: '2019-03-14',
  author: 'Aaron Ross',
  readingTime: { text: '4 min read', minutes: 3.23, time: 193800, words: 646 },
};

export default article;
