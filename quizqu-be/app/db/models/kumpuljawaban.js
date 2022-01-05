"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class KumpulJawaban extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      KumpulJawaban.belongsTo(models.User);
      KumpulJawaban.belongsTo(models.Soal);
      KumpulJawaban.hasMany(models.JawabanUser);
    }
  }
  KumpulJawaban.init(
    {
      soalId: DataTypes.INTEGER,
      userId: DataTypes.INTEGER,
      nilai: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "KumpulJawaban",
    }
  );
  return KumpulJawaban;
};
