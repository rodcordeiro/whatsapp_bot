const { PontosService } = require("../../common/utils/pontos.util")


class Command {
  name = 'categorias';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();
    const Data = new PontosService()
    const {linhas} = await Data.getData()

    const msg = `Aqui estão as linhas:\r\n\n${linhas.map(linha=>`#${linha.id}: ${linha.linha}\n`)}\n\n\`\`\`Para ver os pontos de uma linha, envie /pontos id_da_linha\`\`\``
   return await message.reply(msg)
    
}}


exports.default = new Command();