const axios = require('axios');
const { config } = require('../config');
const handlers = require('../handlers/music.handler');
const api = axios.create(config.api);

class Pontos {
  async getData() {
    return await api
      .get('/api')
      .then(data => {
        const { linhas, pontos } = data.data;
        return {
          linhas: new handlers.Category(linhas),
          pontos: new handlers.Point(pontos),
        };
      })
      .catch(err => {
        console.error(err);
      });
  }
}
module.exports.PontosService = Pontos;
