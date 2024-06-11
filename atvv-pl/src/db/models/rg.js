'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class rg extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  rg.init({
    rgCliente: DataTypes.STRING,
    ufRgCliente: DataTypes.STRING,
    dataEmissaoRgCliente: DataTypes.STRING,
    idCliente: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'rg',
    tableName: 'rg',
  });
  return rg;
};