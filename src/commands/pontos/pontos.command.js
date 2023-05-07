const { PontosService } = require("../../common/utils/pontos.util")


class Command {
  name = 'pontos';

  execute = async (message, args) => {
    const chat = await message.getChat();
    chat.sendStateTyping();

    try {
       const Data = new PontosService()
    const { pontos} = await Data.getData()
    if(!args.length)
      return await message.reply("\tComando inválido!\nO formato correto é:\n\`\`\`/pontos id_linha\`\`\`\nPara vizualizar os ids das linhas, mande \`\`\`/categoria\`\`\`");
    const da =pontos.data.find(item=>item.idLinha === args[0])
    console.debug({da})
   return await message.reply(JSON.JSON.stringify(da))
    
    } catch (error) {
      console.error(error)
       await message.reply("msgerror")
    }
    
}}


exports.default = new Command();