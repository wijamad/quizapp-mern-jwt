"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Pertanyaans",
      [
        {
          soalId: 1,
          pertanyaan: "ibu kota indonesia",
          a: "Surabaya",
          b: "Bandung",
          c: "Jakarta",
          d: "Batam",
          benar: 3,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          soalId: 1,
          pertanyaan: "ibu Jawa Timur",
          a: "Surabaya",
          b: "Bandung",
          c: "Jakarta",
          d: "Batam",
          benar: 1,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          soalId: 1,
          pertanyaan: "ibu kota Jawa Barat",
          a: "Surabaya",
          b: "Bandung",
          c: "Jakarta",
          d: "Batam",
          benar: 2,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
        {
          soalId: 1,
          pertanyaan: "ibu kota Batam",
          a: "Surabaya",
          b: "Bandung",
          c: "Jakarta",
          d: "Batam",
          benar: 4,
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Pertanyaans", null, {});
  },
};
