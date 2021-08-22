import logger from '../../utils/logger.js';

/* We need to deconstruct this due to CommonJS and ESM interoperability
    - https://jestjs.io/docs/ecmascript-modules
    - https://stackoverflow.com/questions/47277887/node-experimental-modules-requested-module-does-not-provide-an-export-named
*/
import sequelize from 'sequelize';
const { DataTypes, Model } = sequelize;

class SimplePokemon extends Model { }

const MODEL_NAME = 'SimplePokemon';

const initializeModel = async (sequelizeConnection) => {
  SimplePokemon.init(
    {
      name: {
        type: DataTypes.STRING
      },
      japaneseName: {
        type: DataTypes.STRING
      },
      baseHP: {
        type: DataTypes.INTEGER
      },
      category: {
        type: DataTypes.STRING
      },
      nameWithJapanese: {
        type: DataTypes.VIRTUAL,
        get () {
          return `${this.name} ${this.japaneseName}`;
        },
        set (value) {
          throw new Error('Do not try to set the `nameWithJapanese` value!');
        }
      }
    },
    {
      sequelize: sequelizeConnection, // We need to pass the connection instance
      modelName: MODEL_NAME, // We could set the model name instead of using the Class name
      // freezeTableName: true, // We could skip the pluralization for database naming
      tableName: 'Simple_Pokemon' // We could lock the name of the database table directly
    }
  );
};

export const initOrGetSimplePokemonModel = async (sequelizeConnection) => {
  logger.debug('===================DEBUG====================');
  logger.debug(`Has model ${MODEL_NAME} defined?`, sequelizeConnection.isDefined(MODEL_NAME));
  logger.debug('===================DEBUG====================');

  if (!sequelizeConnection.isDefined(MODEL_NAME)) {
    await initializeModel(sequelizeConnection);
  }
  return SimplePokemon;
};
