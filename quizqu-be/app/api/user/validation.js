const { User } = require("../../db/models");
const jwt = require("jsonwebtoken");

module.exports = {
  verifyToken: (req, res, next) => {
    const authHeader = req.headers["authorization"];
    const token = authHeader && authHeader.split(" ")[1];
    if (token == null) return res.sendStatus(401);
    jwt.verify(token, process.env.ACCESS_TOKEN_SECRET, (err, decoded) => {
      if (err) { return res.sendStatus(403); }
      req.username = decoded.username;
      next();
    });
  },
  refreshToken: async (req, res) => {
    try {
      const refreshToken = req.cookies.refreshToken;
      if (!refreshToken) return res.sendStatus(401);
      const user = await User.findAll({
        where: {
          refreshToken: refreshToken,
        },
      });
      if (!user[0]) return res.sendStatus(403);
      jwt.verify(
        refreshToken,
        process.env.REFRESH_TOKEN_SECRET,
        (err, decoded) => {
          if (err) return res.sendStatus(403);
          const userId = user[0].id;
          const username = user[0].username;
          const accessToken = jwt.sign(
            { userId, username },
            process.env.ACCESS_TOKEN_SECRET,
            {
              expiresIn: "15s",
            }
          );
          res.json({ accessToken });
        }
      );
    } catch (error) {
      console.log(error);
    }
  },
};
