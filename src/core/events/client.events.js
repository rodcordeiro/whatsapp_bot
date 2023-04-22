const { client } = require('../wweb/client.wweb');
const { sendQrCode } = require('../../common/utils/qrToDisc.util');
const { Pontos } = require('../../common/utils/pontos.util');
const {
  automatedMessage,
} = require('../../common/utils/automatedMessage.util');

client.on('qr', async qr => {
  await sendQrCode(qr);
});

client.on('ready', async () => {
  client.sendMessage('5511982645275@c.us', "I'm alive");
  const X = new Pontos();
  const { pontos } = await X.getData();
  const selected = X.randomize(pontos);
  const template = `Ponto do dia!!\n\n*Linha:* \`\`\`${selected.linha}\`\`\`\n\n*Ritmo:* \`\`\`${selected.ritmo}\`\`\`\n\n${selected.ponto}\n\n\`\`\`[Mensagem automática]\`\`\``;

  client.sendMessage('5511983808494@c.us', template);
  // automatedMessage('5511983808494@c.us', template, 1 * 60 * 1000);
});
