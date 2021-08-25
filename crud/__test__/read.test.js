const {
  findAllPokemons,
  findPokemonByName,
  findPokemonsWithBaseHpMoreThan,
  findPokemonByNameOrBaseHP
} = require('../../../crud/read.js');

const db = require('../../../db/index');

jest.setTimeout(3000);
jest.mock('../../../utils/logger.js');

const pikachu = {
  name: 'Pikachu',
  japaneseName: 'ピカチュウ',
  baseHP: 35,
  category: 'Mouse Pokemon'
};
const pokemons = [
  pikachu,
  {
    name: 'Squirtle',
    japaneseName: 'ゼニガメ',
    baseHP: 44,
    category: 'Tiny Turtle Pokemon'
  },
  {
    name: 'Wartortle',
    japaneseName: 'カメール',
    baseHP: 59,
    category: 'Turtle Pokémon'
  },
  {
    name: 'Meowth',
    japaneseName: 'ニャース',
    baseHP: 40,
    category: 'Scratch Cat Pokémon'
  }
];

describe('retrieve/read/find', () => {
  const PokemonModel = require('../../../db/models/simple-pokemon.model.js')(db);

  beforeAll(async () => {
    await db.sync({ force: true });
    await PokemonModel.bulkCreate(pokemons);
  });

  afterAll(async () => {
    await PokemonModel.truncate();
    await db.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  describe('findAllPokemons', () => {
    it('should return array with length 4', async () => {
      const retrieved = await findAllPokemons();
      expect(retrieved.length).toEqual(4);
    });
  });

  describe.skip('findPokemons', () => {
    describe('findPokemonsByName', () => {
      it('should return a Pokemon', async () => {
        const retrieved = await findPokemonByName('Pikachu');
        expect(retrieved).toMatchObject(pikachu);
      });

      it('should return empty when pokemon not found', async () => {
        const retrieved = await findPokemonByName('Giberrish');
        expect(retrieved).toMatchObject([]);
      });
    });

    describe('findPokemonWithBaseHpMoreThan', () => {
      it('should return array with baseHP more than', async () => {
        const retrieved = await findPokemonsWithBaseHpMoreThan(40);

        expect(retrieved.length).toEqual(2);

        const retrievedNames = retrieved.map(pokemon => pokemon.name);
        expect(retrievedNames).toMatchObject(['Squirtle', 'Wartortle']);
      });
    });

    describe('findPokemonByNameOrBaseHP', () => {
      it('should return array of 2', async () => {
        const retrieved = await findPokemonByNameOrBaseHP('Squirtle', 59);

        expect(retrieved.length).toEqual(2);

        const retrievedNames = retrieved.map(pokemon => pokemon.name);
        expect(retrievedNames).toMatchObject(['Squirtle', 'Wartortle']);
      });
    });
  });
});
