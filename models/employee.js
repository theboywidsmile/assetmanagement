"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Employee extends Model {
    static associate(models) {
      Employee.hasMany(models.AssetHistory, {
        foreignKey: "employeeId",
        as: "histories",
      });
      Employee.hasMany(models.Asset, {
        foreignKey: "employeeId",
        as: "assets",
      });
      Employee.belongsTo(models.Company, {
        foreignKey: "companyId",
        as: "company",
      });
    }
  }
  Employee.init(
    {
      name: DataTypes.STRING,
      email: DataTypes.STRING,
      phone: DataTypes.STRING,
      status: DataTypes.STRING,
      companyId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Employee",
    }
  );
  return Employee;
};
