const express = require("express");
const router = express.Router();
const scrapController = require("../controllers/scrapController");

router.get("/", scrapController.getScrapPage);
router.post("/", scrapController.scrapAsset);
router.post("/add", scrapController.addScrap);

module.exports = router;
