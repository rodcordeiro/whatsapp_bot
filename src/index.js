const { client } = require('./core/wweb/client.wweb');
const { Commands } = require('./commands');
require('./core/events');

(async () => {
  await client.initialize();
  console.log(Commands);
})();
