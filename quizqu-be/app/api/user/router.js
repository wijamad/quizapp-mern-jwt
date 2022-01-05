var express = require("express");
var router = express.Router();
const { getAll, getOne, regristrasi, login, logout } = require("./controller");
const { refreshToken, verifyToken } = require("./validation.js");

router.get("/", getAll);
router.post("/profile", getOne);
router.post("/regristrasi", regristrasi);
router.post("/", login);
router.delete("/", logout);
router.get("/token", refreshToken);

module.exports = router;
