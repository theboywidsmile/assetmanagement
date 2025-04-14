const express = require("express");
const router = express.Router();
const assetController = require("../controllers/assetController");

router.get("/", assetController.getAssets);
router.get("/add", assetController.getAddAsset);
router.post("/add", assetController.addAsset);
router.get("/edit/:id", assetController.getEditAsset);
router.post("/edit/:id", assetController.editAsset);

module.exports = router;
