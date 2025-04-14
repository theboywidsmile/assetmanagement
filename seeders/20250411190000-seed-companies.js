"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Companies", [
      {
        name: "Google LLC",
        address: "1600 Amphitheatre Parkway, Mountain View, CA",
        phone: "6502530000",
        email: "contact@google.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Microsoft Corporation",
        address: "One Microsoft Way, Redmond, WA",
        phone: "4258828080",
        email: "info@microsoft.com",
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Companies", null, {});
  },
};
