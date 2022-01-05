"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "KumpulJawabans",
      [
        {
          soalId: 1,
          userId: 1,
          nilai: 90,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          soalId: 1,
          userId: 2,
          nilai: 90,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          soalId: 2,
          userId: 1,
          nilai: 90,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          soalId: 3,
          userId: 1,
          nilai: 90,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("KumpulJawabans", null, {});
  },
};
