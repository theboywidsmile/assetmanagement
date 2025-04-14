"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AssetHistories", [
      {
        assetId: 2, // Samsung Galaxy S22
        employeeId: 1, // Elon Musk
        action: "issued",
        reason: "For testing new app features",
        description: "Issued to Elon Musk for app testing",
        actionDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        assetId: 1, // MacBook Pro 16
        employeeId: null,
        action: "returned",
        reason: "No longer needed",
        description: "Returned to inventory",
        actionDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AssetHistories", null, {});
  },
};
