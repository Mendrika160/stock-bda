'use strict';
/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.createTable('Approvisionnements', {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER
      },
      fournisseurId: {
        type: Sequelize.INTEGER,
        references: {
          model: 'Fournisseurs',
          key : 'id'
        }
      },
      produitId: {
        type: Sequelize.INTEGER,
        foreignKey:true,
        references: {
          model: 'Produits',
          key: 'id'
        }
      },
      qteEntree: {
        allowNull: false,
        type: Sequelize.INTEGER
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE
      },
      createdBy:{
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
        type : Sequelize.INTEGER,
        references: {
          model: 'Users',
          key: 'id'
        },
        
      },
      
      deletedAt: {
        allowNull: false,
        type: Sequelize.DATE
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
    await queryInterface.dropTable('Approvisionnements');
  }
};