'use strict';
const {
  Model
} = require('sequelize');
module.exports = (sequelize, DataTypes) => {
  class Meet extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      // define association here
     Meet.belongsToMany(models.User,{through: 'multiMeet', foreignKey: 'meetId'})
      Meet.belongsToMany(models.Content,{through: 'meetContent', foreignKey: 'meetId'})
    }
  };
  Meet.init({
    memberNumber: DataTypes.INTEGER,
    meetName: DataTypes.STRING,
    meetId: DataTypes.INTEGER,
    notice: DataTypes.STRING,
    totalcost: DataTypes.INTEGER
  }, {
    sequelize,
    modelName: 'Meet',
  });
  return Meet;
};
