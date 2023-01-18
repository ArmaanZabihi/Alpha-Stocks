const { Model, DataTypes } = require('sequelize');
const sequelize = require('../config/connection');

class ListStock extends Model {}

ListStock.init(
  {
    // define columns
    id: {
      type: DataTypes.INTEGER,
      allowNull: true,
      primaryKey: true,
      autoIncrement: true,
    },
    list_id: {
      type: DataTypes.INTEGER,
      references: {
        model: 'list',
        key: 'id',
        unique: false,
      }
    },
    stock_id: {
      type: DataTypes.INTEGER,
      reference: {
        model: 'stock',
        key: 'id',
        unique: false,
      }
    }
  },
  {
    sequelize,
    timestamps: false,
    freezeTableName: true,
    underscored: true,
    modelName: 'list_stock',
  }
);

module.exports = ListStock;
