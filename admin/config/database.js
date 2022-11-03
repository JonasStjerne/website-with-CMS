const path = require('path');

module.exports = ({ env }) => ({
  connection: {
    client: env('DB_CLIENT'),
    connection: {
      host: env('DB_HOST'),
      port: env.int('DB_PORT'),
      user: env('DB_USER'),
      password: env('DB_PASSWORD'),
      database: env('DATABASE'),
    },
  },
});
