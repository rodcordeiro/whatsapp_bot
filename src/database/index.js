const knex = require('knex');
const dotenv = require('dotenv');
dotenv.config();
const config = require('../../knexfile');

// eslint-disable-next-line no-undef
module.exports.connection = knex(config[process.env.NODE_ENV]);
