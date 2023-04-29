'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Produits', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      design: {
        allowNull: false,
        type: Sequelize.STRING
      },
      stock: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      userId:{
        allowNull: false,
        type : Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy:{
        allowNull: false,
        type : Sequelize.INTEGER,
        
        references: {
          model: 'Users',
          key: 'id'
        },
        
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
     
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      deletedBy:{
        allowNull: false,
        type : Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        
      },
    });
  },
  async down(queryInterface, Sequelize) {
    await queryInterface.dropTable('Produits');
  }
};