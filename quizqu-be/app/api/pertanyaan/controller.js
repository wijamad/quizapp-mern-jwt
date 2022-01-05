const { Pertanyaan, Soal, JawabanUser } = require("../../db/models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Pertanyaan.findAll({
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
      const { pertanyaan, soalId, a, b, c, d, benar } = req.body;
      const result = await Pertanyaan.create({ pertanyaan, soalId, a, b, c, d, benar });
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  update: (req, res, next) => {
    const { id } = req.params;
    const { pertanyaan, a, b, c, d, benar } = req.body;
    Pertanyaan
      .findOne({ where: { id: id } })
      .then((user) => {
        user.update({ pertanyaan, a, b, c, d, benar }).then(() => {
          res.status(200).json({
            message: "success",
            data: user,
          });
        });
      })
      .catch((err) => {
        next(err);
      });
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
};
