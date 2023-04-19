const { client } = require('../wweb/client.wweb');
const { Commands } = require('../../commands');
const { config } = require('../../common/config');
client.on('message', message => {
  if (message.fromMe) return;
  if (message.body.indexOf(config.app.PREFIX) !== 0) return;
  // Our standard argument/command name definition.
  const args = message.body.slice(config.app.PREFIX.length).trim().split(/ +/g);
  const command = args.shift().toLowerCase();
  const cmd = Commands.get(command);
  console.log({
    args,
    command,
    cmd,
  });
  if (cmd.execute) {
    cmd.execute(message, args);
  } else {
    console.log('command has no execute');
  }
  // console.log('Message::created', message);
});
