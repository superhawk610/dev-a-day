const fs = require('fs');
const path = require('path');
const dotenv = require('dotenv');
const Twitter = require('twitter');

function error(output) {
  console.error();
  console.error('  -- ERROR WHILE ATTEMPTING TO POST TO TWITTER --');
  console.error();
  console.error(output);
  console.error();
  process.exit(1);
}

const result = dotenv.config({ path: path.join(__dirname, '.env') });
if (result.error) {
  error(result.error);
}

const client = new Twitter({
  consumer_key: process.env.TW_CONSUMER_KEY,
  consumer_secret: process.env.TW_CONSUMER_SECRET,
  access_token_key: process.env.TW_ACCESS_KEY,
  access_token_secret: process.env.TW_ACCESS_SECRET,
});

const articlePath = path.join(
  __dirname,
  '..',
  'src',
  'assets',
  'articles.json',
);

function getStatus() {
  const articles = JSON.parse(fs.readFileSync(articlePath, 'utf-8'));
  const article = articles[articles.length - 1];
  const { id, header, preview, slug } = article;
  const link = `https://blog.aaronross.tech/articles/${slug}`;
  return (
    `#devaday Day ${id} - ${header}` +
    '\n\n' +
    preview.replace(/\n\s{2,}/g, ' ') +
    '\n\n' +
    `Link: ${link}`
  );
}

(async () => {
  try {
    const tweet = await client.post('statuses/update', { status: getStatus() });
    console.log();
    console.log('  -- SUCCESSFULLY POSTED TO TWITTER --');
    console.log(`  -- LINK: https://twitter.com/superhawk610/status/${tweet.id_str} --`);
    console.log();
  } catch (e) {
    error(e);
  }
})();
