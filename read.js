import sequelizeConnection from './utils/db.js';

import { initOrGetSimplePokemonModel } from './db/models/simple-pokemon.model.js';
const SimplePokemon = await initOrGetSimplePokemonModel(sequelizeConnection);

const findAllPokemons = async () => {
  console.log('========================DEBUG========================');
  console.log(`findAll() is invoked!`);
  console.log('========================DEBUG========================');

  const pokemons = await SimplePokemon.findAll();
  // console.log(pokemons); // Sequelize model instances with a lot of clutter. Uncomment to inspect.
  console.log(pokemons.map(model => model.dataValues));
}

export default findAllPokemons;
