const path = require('path');
const dotenv = require('dotenv');
const got = require('got');

function error(output) {
  console.error();
  console.error('  -- ERROR WHILE ATTEMPTING TO PURGE CLOUDFLARE CACHE --');
  console.error();
  console.error(output);
  console.error();
  process.exit(1);
}

const result = dotenv.config({ path: path.join(__dirname, '.env') });
if (result.error) {
  error(result.error);
}

const { CF_ZONE_ID, CF_API_KEY } = process.env;

(async () => {
  try {
    const { body } = await got.post(
      `https://api.cloudflare.com/client/v4/zones/${CF_ZONE_ID}/purge_cache`,
      {
        json: true,
        headers: {
          'X-Auth-Email': 'superhawk610@gmail.com',
          'X-Auth-Key': CF_API_KEY,
        },
        body: {
          files: ['http://blog.aaronross.tech'],
        },
      },
    );
    if (body.success === true) {
      console.log();
      console.log('  -- SUCCESSFULLY PURGED CLOUDFLARE CACHE --');
      console.log();
    }
  } catch (e) {
    error(e.response.body);
  }
})();
