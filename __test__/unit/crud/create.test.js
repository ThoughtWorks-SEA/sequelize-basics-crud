const createPokemon = require('../../../crud/create.js');

const db = require('../../../utils/db.js');

jest.setTimeout(3000);
jest.mock('../../../utils/logger.js');

const pokemon1 = {
  name: 'Pikachu',
  japaneseName: 'ピカチュウ',
  baseHP: 35,
  category: 'Mouse Pokemon'
};

describe('create', () => {
  beforeAll(async () => {
    await db.sync({ force: true });
  });

  afterAll(async () => {
    await db.truncate();
    await db.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-expressions */
  it('should create a pokemon', async () => {
    const created = await createPokemon(pokemon1);

    expect(created.id).not.toBeNull();
    // expect(created).toEqual(pokemon1); // false
    // expect(created).toContainEqual(pokemon1); // false
    expect(created).toMatchObject(pokemon1);
  });
});
