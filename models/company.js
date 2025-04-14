"use strict";

const { Model } = require("sequelize");

module.exports = (sequelize, DataTypes) => {
  class Company extends Model {
    static associate(models) {
      Company.hasMany(models.Employee, {
        foreignKey: "companyId",
        as: "employees",
      });
      Company.hasMany(models.Asset, {
        foreignKey: "companyId",
        as: "assets",
      });
    }
  }
  Company.init(
    {
      id: {
        type: DataTypes.INTEGER,
        primaryKey: true,
        autoIncrement: true,
      },
      name: DataTypes.STRING,
      address: DataTypes.STRING,
      phone: DataTypes.STRING,
      email: DataTypes.STRING,
    },
    {
      sequelize,
      modelName: "Company",
    }
  );
  return Company;
};
