const logger = require('../utils/logger.js');
const sequelizeConnection = require('../utils/db.js');

const initOrGetSimplePokemonModel = require('../db/models/simple-pokemon.model.js');
const SimplePokemon = initOrGetSimplePokemonModel(sequelizeConnection);

const findAllPokemons = async () => {
  const pokemons = await SimplePokemon.findAll();

  const result = pokemons.map(model => model.dataValues);
  // logger.info(pokemons); // Sequelize model instances with a lot of clutter. Uncomment to inspect.
  logger.info(result);

  return result;
};

module.exports = findAllPokemons;
