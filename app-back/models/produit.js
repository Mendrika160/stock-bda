'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Produit extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      Produit.belongsTo(models.User)
      Produit.belongsToMany(models.Fournisseur, { through: 'FournisseurProduit' });
      Produit.hasMany(models.Vente, { foreignKey: 'produitId' });
      Produit.hasMany(models.Approvisionnement, { foreignKey: 'produitId' });
    }
  }
  Produit.init({
    design: DataTypes.STRING,
    stock: DataTypes.INTEGER,
    userId: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Produit',
  });
  return Produit;
};