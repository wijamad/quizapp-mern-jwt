"use strict";

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      "Users",
      [
        {
          username: "qwe123",
          password: "qwe123",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          refreshToken: "sadddddddddddd",
        },
        {
          username: "asd123",
          password: "asd123",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          refreshToken: "sadddddddddddd",
        },
        {
          username: "zxc123",
          password: "zxc123",
          CreatedAt: new Date(),
          UpdatedAt: new Date(),
          refreshToken: "sadddddddddddd",
        },
      ],
      {}
    );
  },

  down: async (queryInterface, Sequelize) => {
    await queryInterface.bulkDelete("Users", null, {});
  },
};
