const createPokemon = require('../create.js');

const db = require('../../db/index');

jest.setTimeout(3000);
jest.mock('../../utils/logger.js');

const pokemon1 = {
  name: 'Pikachu',
  japaneseName: 'ピカチュウ',
  baseHP: 35,
  category: 'Mouse Pokemon'
};

describe('create', () => {
  beforeAll(async () => {
    await db.sync();
  });

  afterAll(async () => {
    await db.truncate();
    await db.close();
  });

  beforeEach(() => {
    jest.clearAllMocks();
  });

  /* eslint-disable no-unused-vars, no-unused-expressions, jest/no-disabled-tests */

  it('should create a pokemon', async () => {
    const created = await createPokemon(pokemon1);

    expect(created.id).not.toBeNull();
    // expect(created).toEqual(pokemon1); // false
    // expect(created).toContainEqual(pokemon1); // false
    expect(created).toMatchObject(pokemon1);
  });

  it.skip('should not create pokemon without name', async () => {
    // run
    const created = await createPokemon({
      ...pokemon1,
      name: null
    });

    // assert
  });

  it.skip('should not create pokemon with empty name', async () => {
    // run
    const created = await createPokemon({
      ...pokemon1,
      name: ''
    });

    // assertion
  });

  it.skip('should not create pokemon with duplicated name', async () => {
    // set up
    await createPokemon(pokemon1);

    // run
    const created = await createPokemon(pokemon1);

    // assertion
  });
});
