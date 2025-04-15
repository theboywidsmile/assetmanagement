"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Assets", [
      {
        name: "MacBook Pro 16",
        serialNumber: "MBP2023-001",
        make: "Apple",
        model: "MacBook Pro 16-inch",
        value: 2500.0,
        status: "in_stock",
        categoryId: 1,
        employeeId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Samsung Galaxy S22",
        serialNumber: "SGS22-002",
        make: "Samsung",
        model: "Galaxy S22",
        value: 1200.0,
        status: "issued",
        categoryId: 2,
        employeeId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Assets", null, {});
  },
};
