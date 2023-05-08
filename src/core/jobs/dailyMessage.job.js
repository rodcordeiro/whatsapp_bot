const { MessageMedia } = require('whatsapp-web.js');
const { schedule } = require('node-cron');
const { client } = require('../wweb/client.wweb');
const { connection } = require('../../database');
const { PontosService } = require('../../common/utils/pontos.util');
const { Templates } = require('../../common/handlers/templates.handler');

const DAILY_CRON = '0 9 * * *';

const sendDailyPonto = async () => {
  const Pontos = new PontosService();
  const { pontos } = await Pontos.getData();
  const data = pontos.getRandom();
  const message = Templates.DAILY(data);
  const { channel_id: destiny } = await connection('bot_tb_registered_channels')
    .select('channel_id')
    .where({ name: 'raizes' })
    .first();
  if (destiny) {
    if (data.hasAudio) {
      const audio = await MessageMedia.fromUrl(data.audioLink);
      const msg = await client.sendMessage(destiny, message);
      await msg.reply('', undefined, {
        media: audio,
      });
    } else {
      await client.sendMessage(destiny, message);
    }
  }
};

schedule(
  DAILY_CRON,
  async () => {
    console.log('Running daily jobs');
    sendDailyPonto();
  },
  {
    name: 'daily',
    runOnInit: false,
    timezone: 'America/Sao_Paulo',
    scheduled: true,
  },
);
