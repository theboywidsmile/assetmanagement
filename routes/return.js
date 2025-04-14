const express = require("express");
const router = express.Router();
const returnController = require("../controllers/returnController");

router.get("/", returnController.getReturnPage);
router.post("/", returnController.returnAsset);

module.exports = router;
