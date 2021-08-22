const logger = require('../utils/logger.js');
const sequelizeConnection = require('../utils/db.js');

const initOrGetSimplePokemonModel = require('../db/models/simple-pokemon.model.js');
const SimplePokemon = initOrGetSimplePokemonModel(sequelizeConnection);

const findAllPokemons = async () => {

  logger.debug('========================DEBUG========================');
  logger.debug(`findAll() is invoked!`);
  logger.debug('========================DEBUG========================');

  const pokemons = await SimplePokemon.findAll();
  // logger.info(pokemons); // Sequelize model instances with a lot of clutter. Uncomment to inspect.
  logger.info(pokemons.map(model => model.dataValues));
}

module.exports = findAllPokemons;
