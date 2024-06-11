'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class clientes extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  clientes.init({
    nome: DataTypes.STRING,
    nomeSocial: DataTypes.STRING,
    email: DataTypes.STRING,
    cpf: DataTypes.STRING,
    dataEmissaoCpf: DataTypes.STRING,
    estado: DataTypes.STRING,
    cidade: DataTypes.STRING,
    bairro: DataTypes.STRING,
    rua: DataTypes.STRING,
    numero: DataTypes.STRING,
    cep: DataTypes.STRING,
    complemento: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'clientes',
    tableName: 'clientes',
  });
  return clientes;
};