const logger = require('./utils/logger.js');
const sequelizeConnection = require('./db/index.js');

// CRUD functions as separate file scope, demonstrating:
// - model initialization requires a sequelize connection
// - making initialization of model idempotent
// - reusability of model in multiple files
const createPokemon = require('./crud/create.js');
const findPokemons = require('./crud/read.js');

// This will drop the database tables and recreate empty tables whenever application restarts.
// Not recommended for production level due to destructive operation, but we will use this to demonstrate.
// For production level, to consider Migration support (advanced topic).
Promise
  .resolve(sequelizeConnection.sync({ force: true }))
  // .resolve(sequelizeConnection.sync()
  .then(logger.info('All models were synchronized successfully.'))
  .then(function () { createPokemon(); })
  .then(function () { createPokemon(); })
  .then(function () { findPokemons(); });

logger.info('Done!');
