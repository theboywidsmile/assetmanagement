"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AssetHistory extends Model {
    static associate(models) {
      AssetHistory.belongsTo(models.Asset, {
        foreignKey: "assetId",
        as: "asset",
      });
      AssetHistory.belongsTo(models.Employee, {
        foreignKey: "employeeId",
        as: "employee",
      });
    }
  }
  AssetHistory.init(
    {
      assetId: DataTypes.INTEGER,
      employeeId: DataTypes.INTEGER,
      action: DataTypes.STRING,
      reason: DataTypes.STRING,
      date: DataTypes.DATE,
      description: DataTypes.STRING,
      actionDate: DataTypes.DATE,
    },
    {
      sequelize,
      modelName: "AssetHistory",
    }
  );
  return AssetHistory;
};
