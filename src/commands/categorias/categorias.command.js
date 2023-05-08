const { PontosService } = require('../../common/utils/pontos.util');

class Command {
  name = 'linhas';
  description = 'Lista todas as linhas';
  help =
    'Comando para listar as Linhas (Tanto Orixás quanto guias):\nEste comando retorna todas as linhas que temos pontos salvos em nosso site de pontos, ordenando de orixás para guias.\n O formato é:\n```id: Nome```\n Utilize este Id para ver os pontos referentes aquela linha através do comando pontos.';
  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();
    try {
      const Data = new PontosService();
      const { linhas } = await Data.getData();
      if (args.includes('help')) return await message.reply(this.help);
      const msg = `Aqui estão as linhas:\r\n\n${linhas.data
        .map(linha => `${linha.id}: ${linha.linha}`)
        .join(
          '\n',
        )}\n\n\`\`\`Para ver os pontos de uma linha, envie /pontos id_da_linha. Exemplo: \`\`\`_/pontos 4_\`\`\` para pontos de Logun Edé.\`\`\``;
      return await message.reply(msg);
    } catch (err) {
      console.error(err);
      await message.reply('deu ruim aqui, tenta de novo depois');
    }
  };
}

exports.default = new Command();
