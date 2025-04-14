"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AssetCategories", [
      {
        name: "Desktop Computer",
        description: "High-performance desktop systems",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Smartphone",
        description: "Mobile communication devices",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Office Furniture",
        description: "Desks, chairs, and other office furniture",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AssetCategories", null, {});
  },
};
