const { JawabanUser, KumpulJawaban, Pertanyaan } = require("../../db/models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await JawabanUser.findAll({
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
      const { jawabanUser, pertanyaanId, kumpulJawabanId } = req.body;
      const soal = await Pertanyaan.findOne({
        where: { id: pertanyaanId },
      })
      const benar = (jawabanUser == soal.benar);
      const result = await JawabanUser.create({ jawabanUser, pertanyaanId, kumpulJawabanId, benar });
      res.status(200).json({
        message: "success",
        data: result,

      });
    } catch (error) {
      console.log(error);
    }
  },
  // getOne: async (req, res, next) => {
  //   try {
  //     const { id } = req.params;
  //     const result = await user.findOne({
  //       where: { id: id },
  //     });
  //     res.status(200).json({
  //       message: "success",
  //       data: result,
  //     });
  //   } catch (err) {
  //     next(err);
  //   }
  // },
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
