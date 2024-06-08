'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class pets extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  pets.init({
    nome: DataTypes.STRING,
    tipo: DataTypes.STRING,
    raca: DataTypes.STRING,
    genero: DataTypes.STRING,
    dono: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'pets',
    tableName: 'pets',
  });
  return pets;
};