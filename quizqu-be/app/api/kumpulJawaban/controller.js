const { KumpulJawaban, User, JawabanUser, Soal } = require("../../db/models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await KumpulJawaban.findAll({
        include: {
          model: Soal,
        },
        include: {
          model: JawabanUser,
        },
        include: {
          model: User,
        },
      });

      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  create: async (req, res) => {
    try {
      const { soalId, userId } = req.body;
      const nilai = 0;
      const result = await KumpulJawaban.create({ soalId, userId, nilai });
      res.status(200).json({
        message: "success",
        data: {
          id: result.id,
        }
      });
    } catch (error) {
      console.log(error);
    }
  },
  changeNilai: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await KumpulJawaban.findOne({
        where: { id: id },
        include: {
          model: JawabanUser,
        },
      });
      const benar = result.JawabanUsers.filter(benar => benar.benar == true)
      const nilai = (benar.length / result.JawabanUsers.length).toFixed(2) * 100
      result.update({ nilai: nilai })
      res.status(200).json({
        message: "success",
        nilai: nilai,
      });
    } catch (err) {
      next(err);
    }
  },
  getNilai: async (req, res, next) => {
    try {
      const { id } = req.params;
      const result = await KumpulJawaban.findOne({
        where: { id: id },
      });
      res.status(200).json({
        message: "success",
        data: result.nilai,
      });
    } catch (err) {
      next(err);
    }
  },
  // update: (req, res, next) => {
  //   const { id } = req.params;
  //   const { username, password } = req.body;
  //   user
  //     .findOne({ where: { id: id } })
  //     .then((user) => {
  //       user.update({ username: username, password: password }).then(() => {
  //         res.status(200).json({
  //           message: "success",
  //           data: user,
  //         });
  //       });
  //     })
  //     .catch((err) => {
  //       next(err);
  //     });
  // },
};
