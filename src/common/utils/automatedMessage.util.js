const { client } = require('../../core/wweb/client.wweb');

module.exports.automatedMessage = async (to, message, time = 600) => {
  const interval = setInterval(() => {
    client.sendMessage(to, message);
  }, time);
  return interval;
};
