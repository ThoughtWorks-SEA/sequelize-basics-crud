import logger from './utils/logger.js';
import sequelizeConnection from './utils/db.js';

// [1] Uncomment to test database connection
// import { connectDb } from './utils/db.js';
// connectDb();

// [2] CRUD functions as separate file scope, demonstrating:
// - model initialization requires a sequelize connection
// - making initialization of model idempotent
// - reusability of model in multiple files
import createPokemon from './crud/create.js';
import findPokemons from './crud/read.js';

// This will drop the database tables and recreate empty tables whenever application restarts.
// Not recommended for production level due to destructive operation, but we will use this to demonstrate.
// For production level, to consider Migration support (advanced topic).
await sequelizeConnection.sync({ force: true });
logger.info("All models were synchronized successfully.");

await createPokemon();
await createPokemon();
await findPokemons();