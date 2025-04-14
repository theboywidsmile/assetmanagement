"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AssetIssues", [
      {
        assetId: 2, // Samsung Galaxy S22
        employeeId: 1, // Elon Musk
        issuedAt: new Date(),
        returnAt: null,
        status: "issued",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        assetId: 1, // MacBook Pro 16
        employeeId: null,
        issuedAt: new Date(),
        returnAt: new Date(),
        status: "returned",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("AssetIssues", null, {});
  },
};
