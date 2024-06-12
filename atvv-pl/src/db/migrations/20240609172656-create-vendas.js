'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('vendas', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      nomeCliente: {
        type: Sequelize.STRING
      },
      produtoServico: {
        type: Sequelize.STRING
      },
      idProdutoServico: {
        type: Sequelize.STRING
      },
      pet: {
        type: Sequelize.STRING
      },
      idPet: {
        type: Sequelize.STRING
      },
      racaPet: {
        type: Sequelize.STRING
      },
      tipoPet: {
        type: Sequelize.STRING
      },
      quantidade: {
        type: Sequelize.STRING
      },
      valorTotal: {
        type: Sequelize.STRING
      },
      tipoVenda: {
        type: Sequelize.STRING
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      }
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('vendas');
  }
};