const findAllPokemons = require('../../../crud/read.js');

const db = require('../../../db/index');

jest.setTimeout(3000);
jest.mock('../../../utils/logger.js');

const pokemons = [
  {
    name: 'Pikachu',
    japaneseName: 'ピカチュウ',
    baseHP: 35,
    category: 'Mouse Pokemon'
  },
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

  /* eslint-disable no-unused-expressions */
  describe('findAllPokemons', () => {
    it('should return array with length 4', async () => {
      const retrieved = await findAllPokemons();
      expect(retrieved.length).toEqual(4);
    });
  });
});
