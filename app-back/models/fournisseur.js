'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Fournisseur extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Fournisseur.belongsTo(models.User)
      Fournisseur.hasMany(models.Approvisionnement);
      Fournisseur.belongsToMany(models.Produit, { through: 'FournisseurProduit' });

    }
  }
  Fournisseur.init({
    name: DataTypes.STRING,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Fournisseur',
  });
  return Fournisseur;
};