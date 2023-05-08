const { Templates } = require('../../common/handlers/templates.handler');
const { PontosService } = require('../../common/utils/pontos.util');

class Command {
  name = 'pontos';
  description = 'Lista todos pontos de uma linha';
  help =
    'Comando para listagem de pontos!\nPara utilizar este comando, você precisa mandar\n```/pontos numero_da_linha```\nPor exemplo, para visualizar os pontos de Logun Edé, envie: /pontos 4, agora, para os pontos de Pretos velhos, é: /pontos 27.\n\n```Para ver os números de todas as linhas, envie /linhas```';
  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    try {
      const Data = new PontosService();
      const { pontos } = await Data.getData();
      if (!args.length || args.includes('help'))
        return await message.reply(this.help);
      const filtered = pontos.data.filter(item => item.idLinha === args[0]);

      const msg = `*Pontos de ${filtered[0].linha}!*\n${filtered
        .map(
          item => `\n${Templates.PONTO(item)}-------------------------------`,
        )
        .join('\n')}${Templates.Footer(filtered[0].linha)}`;
      return await message.reply(msg);
    } catch (error) {
      console.error(error);
      await message.reply('msgerror');
    }
  };
}

exports.default = new Command();
