'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class vendas extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
    }
  }
  vendas.init({
    nomeCliente: DataTypes.STRING,
    produtoServico: DataTypes.STRING,
    idProdutoServico: DataTypes.STRING,
    pet: DataTypes.STRING,
    idPet: DataTypes.STRING,
    racaPet: DataTypes.STRING,
    tipoPet: DataTypes.STRING,
    quantidade: DataTypes.STRING,
    valorTotal: DataTypes.STRING,
    tipoVenda: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'vendas',
  });
  return vendas;
};