const axios = require('axios');
const { config } = require('../config');

const api = axios.create(config.api);

class Pontos {
  async getData() {
    return await api
      .get('/api')
      .then(data => {
        const { linhas, pontos } = data.data;
        return { linhas, pontos };
      })
      .catch(err => {
        console.error(err);
      });
  }
  randomize(arr) {
    const random = Math.floor(Math.random() * arr.length);
    const randomItem = arr[random];
    return randomItem;
  }
}
module.exports.Pontos = Pontos;
