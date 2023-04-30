'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Approvisionnement extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Approvisionnement.belongsTo(models.User)
      Approvisionnement.belongsTo(models.Produit);
      Approvisionnement.belongsTo(models.Fournisseur);
    }
  }
  Approvisionnement.init({
    fournisseurId: DataTypes.INTEGER,
    produitId: DataTypes.INTEGER,
    qteEntree: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Approvisionnement',
  });
  return Approvisionnement;
};