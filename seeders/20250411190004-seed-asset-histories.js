"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AssetHistories", [
      {
        assetId: 2,
        employeeId: 1,
        action: "issued",
        reason: "For testing new app features",
        description: "Issued to Elon Musk for app testing",
        actionDate: new Date(),
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        assetId: 1,
        employeeId: 2,
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
