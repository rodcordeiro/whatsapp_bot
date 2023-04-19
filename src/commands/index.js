const fs = require('fs');
const path = require('path');
const { commandsHandler } = require('../common/handlers/commands.handler');

const commandPath = path.join(__dirname, './');
const commandDirs = fs
  .readdirSync(commandPath)
  .filter(file => !file.endsWith('.js'));

const Commands = commandsHandler;
for (const dir of commandDirs) {
  const filePath = path.join(commandPath, dir);
  try {
    const command = require(`${filePath}/${dir}.command`).default;
    if (command.execute) {
      Commands.set(command.name, command);
    } else {
      console.error(
        `[WARNING] The command at ${filePath} has no execute file or presented error while importing.`,
      );
    }
  } catch (err) {
    console.error(`[WARNING] The  ${filePath} has no command file`);
  }
}

module.exports.Commands = Commands;
