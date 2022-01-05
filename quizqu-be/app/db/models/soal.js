"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Soal extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Soal.belongsTo(models.User);
      Soal.hasMany(models.KumpulJawaban);
      Soal.hasMany(models.Pertanyaan);
    }
  }
  Soal.init(
    {
      kodeSoal: DataTypes.STRING,
      judul: DataTypes.STRING,
      userId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Soal",
    }
  );
  return Soal;
};
