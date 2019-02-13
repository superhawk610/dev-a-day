import { join, resolve } from 'path';
import { ok } from 'assert';
import * as dotenv from 'dotenv';
import * as Twitter from 'twitter';

// monkey-patch `require` so we can ignore `.md` imports
module.constructor.prototype.require = function(path) {
  const self = this;
  ok(typeof path === 'string', 'path must be a string');
  ok(path, 'missing path');

  if (path.match(/.md$/)) {
    return '';
  }

  try {
    return self.constructor._load(path, self);
  } catch (err) {
    // if module not found, we have nothing to do, simply throw it back.
    if (err.code === 'MODULE_NOT_FOUND') {
      throw err;
    }
    // resolve the path to get absolute path
    path = resolve(__dirname, path);

    // log unresolved error
    console.log('Error in file: ' + path);
  }
};

import { articles } from '../articles';

function error(output) {
  console.error();
  console.error('  -- ERROR WHILE ATTEMPTING TO POST TO TWITTER --');
  console.error();
  console.error(output);
  console.error();
  process.exit(1);
}

if (!process.env.CI) {
  const result = dotenv.config({ path: join(__dirname, '.env') });
  if (result.error) {
    error(result.error);
  }
}

const client = new Twitter({
  consumer_key: process.env.TW_CONSUMER_KEY,
  consumer_secret: process.env.TW_CONSUMER_SECRET,
  access_token_key: process.env.TW_ACCESS_KEY,
  access_token_secret: process.env.TW_ACCESS_SECRET,
});

function getStatus() {
  const article = articles[articles.length - 1];
  const { id, header, preview, slug, tags } = article;
  const link = `https://blog.aaronross.tech/articles/${slug}`;
  return (
    `#devaday Day ${id} - ${header}` +
    '\n' +
    tags.map(tag => `#${tag.name}`).join(' ') +
    '\n\n' +
    preview.replace(/\n\s{2,}/g, ' ') +
    ' ' +
    link
  );
}

(async () => {
  try {
    const tweet = await client.post('statuses/update', { status: getStatus() });
    console.log();
    console.log('  -- SUCCESSFULLY POSTED TO TWITTER --');
    console.log(
      `  -- LINK: https://twitter.com/superhawk610/status/${tweet.id_str} --`,
    );
    console.log();
  } catch (e) {
    error(e);
  }
})();
