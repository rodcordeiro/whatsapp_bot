const { client } = require('../wweb/client.wweb');
const { sendQrCode } = require('../../common/utils/qrToDisc.util');
const {
  automatedMessage,
} = require('../../common/utils/automatedMessage.util');

client.on('qr', async qr => {
  await sendQrCode(qr);
});

client.on('ready', async () => {
  client.sendMessage('5511982645275@c.us', "I'm alive");
  require('../jobs');
  let i;
  automatedMessage(
    '5511982645275@c.us',
    `'STILL ALIVE' ${i++}`,
    30 * 60 * 1000,
  );
});
client.on('disconnected', async reason => {
  console.log('Client::Disconnected', reason);
  client.initialize();
});
