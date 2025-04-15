"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("AssetIssues", [
      {
        assetId: 2,
        employeeId: 1,
        issuedAt: new Date(),
        returnAt: null,
        status: "issued",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        assetId: 1,
        employeeId: 2,
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
