"use strict";
const { Model } = require("sequelize");
module.exports = (sequelize, DataTypes) => {
  class JawabanUser extends Model {
    /**
     * Helper method for defining associations.
     * This method is not a part of Sequelize lifecycle.
     * The `models/index` file will call this method automatically.
     */
    static associate(models) {
      JawabanUser.belongsTo(models.KumpulJawaban);
      JawabanUser.belongsTo(models.Pertanyaan);
    }
  }
  JawabanUser.init(
    {
      jawabanUser: DataTypes.INTEGER,
      benar: DataTypes.BOOLEAN,
      pertanyaanId: DataTypes.INTEGER,
      kumpulJawabanId: DataTypes.INTEGER,
    },
    {
      sequelize,
      modelName: "JawabanUser",
    }
  );
  return JawabanUser;
};
