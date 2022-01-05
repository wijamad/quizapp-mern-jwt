"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Soals",
      [
        {
          kodeSoal: `123qwe`,
          judul: "data percobaan1",
          userId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          kodeSoal: `124qwe`,
          judul: "data percobaan2",
          userId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          kodeSoal: `125qwe`,
          judul: "data percobaan3",
          userId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          kodeSoal: `126qwe`,
          judul: "data percobaan4",
          userId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          kodeSoal: `127qwe`,
          judul: "data percobaan5",
          userId: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Soals", null, {});
  },
};
