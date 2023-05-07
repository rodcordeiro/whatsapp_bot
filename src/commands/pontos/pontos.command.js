const { Templates } = require('../../common/handlers/templates.handler');
const { PontosService } = require('../../common/utils/pontos.util');

class Command {
  name = 'pontos';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    try {
      const Data = new PontosService();
      const { pontos } = await Data.getData();
      if (!args.length)
        return await message.reply(
          '\tComando inválido!\nO formato correto é:\n```/pontos id_linha```\nPara vizualizar os ids das linhas, mande ```/categoria```',
        );
      const filtered = pontos.data.filter(item => item.idLinha === args[0]);

      const msg = `*Pontos de ${filtered[0].linha}!*\n${filtered.map(
        item =>
          `${Templates.PONTO(item)}\n\n-------------------------------\n`,
      )}${Templates.Footer(filtered[0].linha)}`;
      return await message.reply(msg);
    } catch (error) {
      console.error(error);
      await message.reply('msgerror');
    }
  };
}

exports.default = new Command();
