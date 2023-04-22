const { client } = require('../wweb/client.wweb');
const { sendQrCode } = require('../../common/utils/qrToDisc.util');
const { PontosService } = require('../../common/utils/pontos.util');
const {
  automatedMessage,
} = require('../../common/utils/automatedMessage.util');

client.on('qr', async qr => {
  await sendQrCode(qr);
});

client.on('ready', async () => {
  client.sendMessage('5511982645275@c.us', "I'm alive");
  
  // automatedMessage('5511983808494@c.us', template, 1 * 60 * 1000);
});
