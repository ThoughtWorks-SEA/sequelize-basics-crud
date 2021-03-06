module.exports = {
  development: {
    username: 'devtraining',
    password: null,
    database: 'devtraining',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  test: {
    username: 'devtraining',
    password: null,
    database: 'test',
    host: '127.0.0.1',
    dialect: 'postgres'
  },
  production: {
    username: process.env.PG_USER,
    password: process.env.PG_PASS,
    database: process.env.PG_DB_NAME,
    host: process.env.PG_HOST,
    port: process.env.PG_PORT,
    dialect: 'postgres'
  }
};
