const { client } = require('../wweb/client.wweb');
const { sendQrCode } = require('../../common/utils/qrToDisc.util');


client.on('qr', async qr => {
  await sendQrCode(qr);
});

client.on('ready', async () => {
  client.sendMessage('5511982645275@c.us', "I'm alive");
  require("../jobs")
  // automatedMessage('5511983808494@c.us', template, 1 * 60 * 1000);
});
