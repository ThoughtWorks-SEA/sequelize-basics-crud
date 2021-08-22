const logger = require('../utils/logger.js');
const sequelizeConnection = require('../utils/db.js');

const initOrGetSimplePokemonModel = require('../db/models/simple-pokemon.model.js');
const SimplePokemon = initOrGetSimplePokemonModel(sequelizeConnection);

const createPokemon = async () => {

  const pikachu = {
    name: 'Pikachu',
    japaneseName: 'ピカチュウ',
    baseHP: 35,
    category: 'Mouse Pokemon'
  };
  const created = await SimplePokemon.create(pikachu);

  logger.info('Pikachu was saved to the database!');
  // logger.info(created); // Not recommended, since Sequelize instances have a lot of things attached. This might produce a lot of clutter.
  logger.info(created.toJSON()); // The recommended way to log an instance, but do note that this might still log sensitive data stored in database.

}

module.exports = createPokemon;