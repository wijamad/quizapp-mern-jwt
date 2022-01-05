var express = require("express");
var router = express.Router();
const { getAll, getOne, create } = require("./controller");

/* GET home page. */
router.get("/", getAll);
router.get("/:id", getOne)
router.post("/", create);
// router.get("/:id", getOne);
// router.put("/:id", update);

module.exports = router;
