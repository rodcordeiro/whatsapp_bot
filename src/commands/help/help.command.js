const { commandsHandler } = require('../../common/handlers/commands.handler');
class Command {
  name = 'help';
  execute = async message => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    const text = commandsHandler.commandsList
      .filter(command => command.help !== undefined)
      .map(command => `*/${command.name}*`)
      .join('\n');
    await message.reply(
      `Aqui estão os comandos que atendo hoje:\n${text}\n Para ver Mais informações sobre algum comando, basta executar o comando enviando \`\`\`help\`\`\` junto. Exemplo: /pontos help.`,
    );
    return;
  };
}

exports.default = new Command();
