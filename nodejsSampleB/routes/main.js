const express = require("express");

const mainController = require("../controllers/main");
const router = express.Router();

router.get("/", mainController.getData);
router.post("/receiver", mainController.postData);
// router.get("/receiver", mainController.postData);

module.exports = router;
