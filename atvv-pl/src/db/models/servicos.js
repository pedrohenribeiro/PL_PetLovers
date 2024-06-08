'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class servicos extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  servicos.init({
    nome: DataTypes.STRING,
    valor: DataTypes.STRING,
  }, {
    sequelize,
    modelName: 'servicos',
    tableName: 'servicos',
  });
  return servicos;
};