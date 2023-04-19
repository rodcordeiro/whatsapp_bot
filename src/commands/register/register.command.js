class Command {
  name = 'register';
  
  execute = async (message, args) => {
    // const chat = await message.getChat();
    // chat.sendStateTyping();

    console.log('register called');
    await message.reply('Registering' + args);

    return;
  };
}

exports.default = new Command();
