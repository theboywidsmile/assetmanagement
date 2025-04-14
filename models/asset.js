"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Asset extends Model {
    static associate(models) {
      Asset.belongsTo(models.Employee, {
        foreignKey: "employeeId",
        as: "employee",
      });

      Asset.belongsTo(models.AssetCategory, {
        foreignKey: "categoryId",
        as: "category",
      });
      Asset.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });
      Asset.hasMany(models.AssetHistory, {
        foreignKey: "assetId",
        as: "histories",
      });
    }
  }
  Asset.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      serialNumber: DataTypes.STRING,
      make: DataTypes.STRING,
      model: DataTypes.STRING,
      value: DataTypes.FLOAT,
      status: {
        type: DataTypes.STRING,
        allowNull: false,
        defaultValue: "in_stock",
      },
      reason: DataTypes.STRING,
      employeeId: DataTypes.INTEGER,
      categoryId: DataTypes.INTEGER,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Asset",
    }
  );
  return Asset;
};
