const { connection } = require('../../database');

class Command {
  name = 'register';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    console.log(args);
    if (args.find(arg => arg == '--help'))
      return await message.reply(
        '```/register <key> <value>```\n\nKey options:\n*pontos*: Grupo de pontos;\n*raizes*: Grupo do raizes;',
      );
    if (!args.length !== 2)
      return await message.reply(
        'Correct syntax:\n```/register <key> <value>```',
      );
    const keys = ['pontos', 'raizes'];
    if (keys.includes(!args[0])) return await message.reply('Invalid key arg');

    const name = args[0],
      channel_id = args[1];

    const id = await connection('bot_tb_registered_channels').insert({
      name,
      channel_id,
    });

    return await message.reply(`Registered ${name} channel on id ${id} key.`);
  };
}

exports.default = new Command();
