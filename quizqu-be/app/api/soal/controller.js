const { Soal, Pertanyaan } = require("../../db/models");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await Soal.findAll({
        attributes: ["id", "judul", "kodesoal"],
      });
      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res) => {
    try {
      const { id } = req.params;
      const result = await Soal.findOne({
        where: { id: id },
        attributes: ["judul", "id"],
        include: [{
          model: Pertanyaan
        }
        ]
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
      const { judul, userId } = req.body;
      var kodeSoal = "asdsa";
      do {
        kodeSoal = Math.random().toString(36).replace(/[^a-z]+/g, '').slice(1, 6);
      } while (await Soal.findOne({
        where: { kodeSoal: kodeSoal },
      }));
      const result = await Soal.create({ judul, userId, kodeSoal, });
      res.status(200).json({
        message: "success",
        data: {
          id: result.id,
          judul: result.judul,
          kodeSoal: result.kodeSoal
        },
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
