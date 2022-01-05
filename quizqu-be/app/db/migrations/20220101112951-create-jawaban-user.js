"use strict";
module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.createTable("JawabanUsers", {
      id: {
        allowNull: false,
        autoIncrement: true,
        primaryKey: true,
        type: Sequelize.INTEGER,
      },
      jawabanUser: {
        type: Sequelize.INTEGER,
      },
      benar: {
        type: Sequelize.BOOLEAN,
      },
      pertanyaanId: {
        type: Sequelize.INTEGER,
        references: {
          model: `Pertanyaans`,
          key: `id`,
        },
      },
      kumpulJawabanId: {
        type: Sequelize.INTEGER,
        references: {
          model: `KumpulJawabans`,
          key: `id`,
        },
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
    await queryInterface.dropTable("JawabanUsers");
  },
};
