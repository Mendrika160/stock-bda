'use strict';
const {
  Model
} = require('sequelize');
//const user = require('./user');
module.exports = (sequelize, DataTypes) => {
  class Vente extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Vente.belongsTo(models.User)
      Vente.belongsTo(models.Client)
      Vente.belongsTo(models.Produit)
    }
  }
  Vente.init({
    clientId: DataTypes.INTEGER,
    produitId: DataTypes.INTEGER,
    qteSortie: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Vente',
  });
  return Vente;
};