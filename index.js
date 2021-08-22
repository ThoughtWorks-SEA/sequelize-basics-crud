// [1] Uncomment to test database connection
// import { connectDb } from './utils/db.js';
// connectDb();

// [2] CRUD functions as separate file scope, demonstrating:
// - model initialization requires a sequelize connection
// - making initialization of model idempotent
// - reusability of model in multiple files
import createPokemon from './create.js';
import findPokemons from './read.js';

await createPokemon();
await createPokemon();
await findPokemons();