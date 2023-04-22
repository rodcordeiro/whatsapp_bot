const { client } = require('../wweb/client.wweb');
const { connection } = require('../../database');
const { PontosService } = require('../../common/utils/pontos.util');
const { Templates } = require('../../common/handlers/templates.handler');

const DAY_IN_MS = 24 * 60 * 60 * 1000;

const sendDailyPonto = async () => {
  const Pontos = new PontosService();
  const { pontos } = await Pontos.getData();
  const data = pontos.getRandom();
  const message = Templates.DAILY(data);
  const { channel_id: destiny } = await connection('bot_tb_registered_channels')
    .select('channel_id')
    .where({ name: 'raizes' })
    .first();
  console.log({ destiny });
  if (destiny) {
    await client.sendMessage(destiny, message);
  }
};

(() => {
  const interval = setInterval(async () => {
    await sendDailyPonto();
  }, DAY_IN_MS);
})();
