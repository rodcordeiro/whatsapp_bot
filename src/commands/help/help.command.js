const { commandsHandler } = require('../../common/handlers/commands.handler');
class Command {
  name = 'help';
  execute = async message => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    const text = commandsHandler.commandsList
      .map(command => `/${command.name}`)
      .join('\n');
    await message.reply(`Here are some commands:\n\n${text}`);
    return;
  };
}

exports.default = new Command();
