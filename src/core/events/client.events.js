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
  automatedMessage('5511963757171@c.us', 'Bot ta vivo', 1 * 60 * 1000);
});
