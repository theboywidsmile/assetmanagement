"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class AssetIssue extends Model {
    static associate(models) {}
  }
  AssetIssue.init(
    {
      assetId: DataTypes.INTEGER,
      employeeId: DataTypes.INTEGER,
      issuedAt: DataTypes.DATE,
      returnAt: DataTypes.DATE,
      status: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "AssetIssue",
    }
  );
  return AssetIssue;
};
