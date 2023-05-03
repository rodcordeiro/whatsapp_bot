const { PontosService } = require("../../common/utils/pontos.util")


class Command {
  name = 'pontos';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    const Data = new PontosService()
    const {linhas, pontos} = await Data.getData()
    if(!args.length)
      return await message.reply("\tComando inválido!\nO formato correto é:\n\`\`\`/pontos id_linha\`\`\`\nPara vizualizar os ids das linhas, mande \`\`\`/categoria\`\`\`");
    const linha =linhas.data.find(item=>item.id)
    
   return await message.reply("msg")
    
}}


exports.default = new Command();