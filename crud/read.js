import logger from '../utils/logger.js';
import sequelizeConnection from '../utils/db.js';

import { initOrGetSimplePokemonModel } from '../db/models/simple-pokemon.model.js';
const SimplePokemon = await initOrGetSimplePokemonModel(sequelizeConnection);

const findAllPokemons = async () => {
  logger.debug('========================DEBUG========================');
  logger.debug(`findAll() is invoked!`);
  logger.debug('========================DEBUG========================');

  const pokemons = await SimplePokemon.findAll();
  // logger.info(pokemons); // Sequelize model instances with a lot of clutter. Uncomment to inspect.
  logger.info(pokemons.map(model => model.dataValues));
}

export default findAllPokemons;
