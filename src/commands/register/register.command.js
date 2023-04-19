class Command {
  name = 'register';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    if (args.find(arg => arg == '--help'))
      return await message.reply(
        '```/register <key> <value>```\n\nKey options:\n*pontos*: Grupo de pontos;\n*raizes*: Grupo do raizes;',
      );
    if (!args.length)
      return await message.reply(
        'Correct syntax:\n```/register <key> <value>```',
      );
    console.log('register called');
    await message.reply('Registering: ' + args);

    return;
  };
}

exports.default = new Command();
