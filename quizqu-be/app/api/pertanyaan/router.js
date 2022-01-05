var express = require("express");
var router = express.Router();
const { getAll, create, getOne, update } = require("./controller");

/* GET home page. */
router.get("/", getAll);
router.post("/", create);
// router.get("/:id", getOne);
router.put("/:id", update);

module.exports = router;
