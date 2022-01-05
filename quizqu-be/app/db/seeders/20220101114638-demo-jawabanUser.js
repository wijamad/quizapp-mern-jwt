"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "JawabanUsers",
      [
        {
          jawabanUser: 3,
          benar: true,
          pertanyaanId: 1,
          kumpulJawabanId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          jawabanUser: 1,
          benar: true,
          pertanyaanId: 2,
          kumpulJawabanId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          jawabanUser: 2,
          benar: true,
          pertanyaanId: 3,
          kumpulJawabanId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          jawabanUser: 4,
          benar: true,
          pertanyaanId: 4,
          kumpulJawabanId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("JawabanUsers", null, {});
  },
};
