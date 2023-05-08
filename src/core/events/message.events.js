const { client } = require('../wweb/client.wweb');
const { Commands } = require('../../commands');
const { config } = require('../../common/config');
client.on('message', message => {
  if (message.fromMe) return;
  if (message.body.indexOf(config.app.PREFIX) !== 0) return;
  try {
    const args = message.body
      .slice(config.app.PREFIX.length)
      .trim()
      .split(/ +/g);
    const command = args.shift().toLowerCase();
    const cmd = Commands.get(command);

    if (!cmd.execute) return;
    cmd.execute(message, args);
  } catch (err) {
    console.error(err);
    message.reply('Não consegui processar, devo estar dormindo ¯\\_(ツ)_/¯');
  }
});
