// Update with your config settings.
const { config } = require('dotenv');
config();
/**
 * @type { Object.<string, import("knex").Knex.Config> }
 */
module.exports = {
  development: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'wweb_bot_migrations',
      directory: './src/database/migrations',
    },
  },

  staging: {
    client: 'postgresql',
    connection: {
      database: 'my_db',
      user: 'username',
      password: 'password',
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'wweb_bot_migrations',
    },
  },

  production: {
    client: 'mysql',
    connection: {
      host: process.env.DB_HOST,
      database: process.env.DB_NAME,
      user: process.env.DB_USER,
      password: process.env.DB_PWD,
    },
    pool: {
      min: 2,
      max: 10,
    },
    migrations: {
      tableName: 'wweb_bot_migrations',
      directory: './src/database/migrations',
    },
  },
};
