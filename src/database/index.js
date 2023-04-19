const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();
const config = require('../../knexfile');

module.exports.connection = knex(config[process.env.NODE_ENV]);
