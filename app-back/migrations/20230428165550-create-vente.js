'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Ventes', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      clientId: {
        type: Sequelize.INTEGER,
        references: {
          model:'Clients',
          key:'id'
        }
      },
      produitId: {
        type: Sequelize.INTEGER,
        references: {
          model :'Produits',
          key: 'id'
        }
      },
      qteSortie: {
        allowNull: false,
        type: Sequelize.INTEGER
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
    await queryInterface.dropTable('Ventes');
  }
};