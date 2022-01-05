"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("KumpulJawabans", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      soalId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Soals`,
          key: `id`,
        },
      },
      userId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Users`,
          key: `id`,
        },
      },
      nilai: {
        type: Sequelize.INTEGER,
      },
      createdAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
      updatedAt: {
        allowNull: false,
        type: Sequelize.DATE,
      },
    });
  },
  down: async (queryInterface, Sequelize) => {
    await queryInterface.dropTable("KumpulJawabans");
  },
};
