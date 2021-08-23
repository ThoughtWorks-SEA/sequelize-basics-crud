const { DataTypes, Model } = require('sequelize');

class SimplePokemon extends Model { }

const MODEL_NAME = 'SimplePokemon';

const initializeModel = (sequelizeConnection) => {
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

module.exports = (sequelizeConnection) => {
  initializeModel(sequelizeConnection);
  return SimplePokemon;
};
