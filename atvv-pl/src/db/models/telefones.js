'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class telefones extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  telefones.init({
    telefone: DataTypes.STRING,
    idCliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'telefones',
    tableName: 'telefones',
  });
  return telefones;
};