"use strict";

/** @type {import('sequelize-cli').Migration} */
module.exports = {
  async up(queryInterface, Sequelize) {
    await queryInterface.bulkInsert("Employees", [
      {
        name: "Elon Musk",
        email: "elon.musk@tesla.com",
        phone: "1234567890",
        status: "active",
        companyId: 2,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
      {
        name: "Jeff Bezos",
        email: "jeff.bezos@amazon.com",
        phone: "0987654321",
        status: "inactive",
        companyId: 1,
        createdAt: new Date(),
        updatedAt: new Date(),
      },
    ]);
  },

  async down(queryInterface, Sequelize) {
    await queryInterface.bulkDelete("Employees", null, {});
  },
};
