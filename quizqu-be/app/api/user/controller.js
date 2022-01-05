const {
  Soal,
  User,
  KumpulJawaban,
  Pertanyaan,
  JawabanUser,
} = require("../../db/models");
const bcrypt = require("bcrypt");
const jwt = require("jsonwebtoken");

module.exports = {
  getAll: async (req, res, next) => {
    try {
      const result = await User.findAll({
        attributes: ["id", "username", "password"],
        include: [
          {
            model: Soal,
            include: [{ model: Pertanyaan }],
          },
          {
            model: KumpulJawaban,
            include: [{ model: JawabanUser }],
          },
        ],
      });

      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },
  getOne: async (req, res, next) => {
    try {
      const result = await User.findOne({
        where: {
          id: req.body.id,
        },
        attributes: ["id", "username", "password"],
        include: [
          {
            model: Soal,
          },
          {
            model: KumpulJawaban,
            include: [{ model: Soal }],
          },
        ],
      });

      res.status(200).json({
        message: "success",
        data: result,
      });
    } catch (error) {
      console.log(error);
    }
  },

  regristrasi: async (req, res) => {
    const { username, password } = req.body;
    const salt = await bcrypt.genSalt();
    const hashPassword = await bcrypt.hash(password, salt);
    try {
      await User.create({
        username: username,
        password: hashPassword,
      });
      res.status(201).json({ msg: "Register Berhasil" });
    } catch (error) {
      console.log(error);
    }
  },
  login: async (req, res) => {
    try {
      const result = await User.findOne({
        where: { username: req.body.username },
      });
      const match = await bcrypt.compare(req.body.password, result.password);
      if (!match) {
        return res.status(400).json({ msg: "Wrong Password" })
      }
      const userId = result.id;
      const username = result.username;

      const accessToken = jwt.sign(
        { userId, username },
        process.env.ACCESS_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );
      const refreshToken = jwt.sign(
        { userId, username },
        process.env.REFRESH_TOKEN_SECRET,
        {
          expiresIn: "1d",
        }
      );
      await User.update(
        { refreshToken: refreshToken },
        {
          where: {
            id: userId,
          },
        }
      );
      res.cookie("refreshToken", refreshToken, {
        httpOnly: true,
        maxAge: 24 * 60 * 60 * 1000,
      });
      res.json({ refreshToken });
    } catch (error) {
      res.status(404).json({ msg: `user tidak ditemukan` });
    }
  },
  logout: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.status(204);
      const user = await User.findAll({
        where: {
          refreshToken: refreshToken,
        },
      });
      if (!user[0]) return res.status(204);
      const userId = user[0].id;
      await User.update(
        { refreshToken: null },
        {
          where: {
            id: userId,
          },
        }
      );
      res.clearCookie("refreshToken");
      return res.status(200).json({ msg: "berhasil logout" });
    } catch (error) {
      res.status(404).json({ msg: error });
    }
  }
};
