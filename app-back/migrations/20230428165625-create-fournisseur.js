'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Fournisseurs', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      name: {
        allowNull: false,
        type: Sequelize.STRING
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
      updatedBy:{
        allowNull: false,
        type : Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        
      },
     
      userId:{
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
    await queryInterface.dropTable('Fournisseurs');
  }
};