'use strict';
const {
  Model
} = require('sequelize');

module.exports = (sequelize, DataTypes) => {
  class User extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
      User.hasMany(models.Produit,{ foreignKey: 'userId' })
      User.hasMany(models.Client,{ foreignKey: 'createdBy' })
      User.hasMany(models.Fournisseur,{ foreignKey: 'createdBy' })
      User.hasMany(models.Vente,{ foreignKey: 'createdBy' })
      User.hasMany(models.Approvisionnement,{ foreignKey: 'createdBy' })
      
    }
  }
  User.init({
    name: DataTypes.STRING,
    email: DataTypes.STRING,
    password: DataTypes.STRING
  }, {
    sequelize,
    modelName: 'User',
  });
  return User;
};