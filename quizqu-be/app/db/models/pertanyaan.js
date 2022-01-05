"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class Pertanyaan extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      Pertanyaan.belongsTo(models.Soal);
      Pertanyaan.hasMany(models.JawabanUser);
    }
  }
  Pertanyaan.init(
    {
      soalId: DataTypes.INTEGER,
      pertanyaan: DataTypes.STRING,
      a: DataTypes.STRING,
      b: DataTypes.STRING,
      c: DataTypes.STRING,
      d: DataTypes.STRING,
      benar: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "Pertanyaan",
    }
  );
  return Pertanyaan;
};
