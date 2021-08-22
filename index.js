const logger = require('./utils/logger.js');
const sequelizeConnection = require('./utils/db.js');

// [1] Uncomment to test database connection
// const { testDBConnection } = require('./utils/db.js');
// testDBConnection();

// [2] CRUD functions as separate file scope, demonstrating:
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
  .then(logger.info("All models were synchronized successfully."))
  .then(setTimeout(() => { console.log('2 seconds has passed!') }, 2 * 1000))
  .then(function () { createPokemon() })
  .then(function () { createPokemon() })
  .then(function () { findPokemons() });

logger.info('Done!');