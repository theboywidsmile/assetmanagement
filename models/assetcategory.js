"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AssetCategory extends Model {
    static associate(models) {
      AssetCategory.hasMany(models.Asset, {
        foreignKey: "categoryId",
        as: "assets",
      });
    }
  }
  AssetCategory.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      description: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AssetCategory",
    }
  );
  return AssetCategory;
};
