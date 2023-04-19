class Commands {
  commandsList = [];
  set(name, command) {
    this.commandsList.push({ name, command });
  }
  get(name) {
    const command = this.commandsList.find(cmd => cmd.name === name);
    return command.command;
  }
}

module.exports.commandsHandler = new Commands();
