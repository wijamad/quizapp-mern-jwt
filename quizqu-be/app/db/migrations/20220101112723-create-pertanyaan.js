"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("Pertanyaans", {
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
      pertanyaan: {
        type: Sequelize.STRING,
      },
      a: {
        type: Sequelize.STRING,
      },
      b: {
        type: Sequelize.STRING,
      },
      c: {
        type: Sequelize.STRING,
      },
      d: {
        type: Sequelize.STRING,
      },
      benar: {
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
    await queryInterface.dropTable("Pertanyaans");
  },
};
