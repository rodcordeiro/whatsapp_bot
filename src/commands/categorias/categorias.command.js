const { PontosService } = require("../../common/utils/pontos.util")


class Command {
  name = 'categorias';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();
    try{
      
    
    const Data = new PontosService()
    const {linhas} = await Data.getData()

    const msg = `Aqui estão as linhas:\r\n\n${linhas.data.map(linha=>`#${linha.id}: ${linha.linha}\n`)}\n\n\`\`\`Para ver os pontos de uma linha, envie /pontos id_da_linha\`\`\``
   return await message.reply(msg)
    }  catch(err){
      console.error(err)
      await message.reply("deu ruim aqui, tenta de novo depois")
    }
}}


exports.default = new Command();