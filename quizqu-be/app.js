const express = require("express");
const path = require("path");
const cookieParser = require("cookie-parser");
const logger = require("morgan");
const cors = require('cors');
require('dotenv').config()

const JawabanUserRouter = require("./app/api/jawabanUser/router");
const UserRouter = require("./app/api/user/router");
const KumpulJawabanRouter = require("./app/api/kumpulJawaban/router");
const SoalRouter = require("./app/api/soal/router");
const PertanyaanRouter = require("./app/api/pertanyaan/router");

const app = express();
app.use(cors());
app.use(logger("dev"));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
app.use(express.static(path.join(__dirname, "public")));
app.get("/", function (req, res) {
  res.json({
    message: "Welcome api clone trello",
    version: "1.0",
  });
});

app.use("/jawabanuser", JawabanUserRouter);
app.use("/user", UserRouter);
app.use("/pertanyaan", PertanyaanRouter);
app.use("/kumpuljawaban", KumpulJawabanRouter);
app.use("/soal", SoalRouter);

module.exports = app;
