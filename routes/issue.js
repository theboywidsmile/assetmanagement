const express = require("express");
const router = express.Router();
const issueController = require("../controllers/issueController");

router.get("/", issueController.getIssuePage);
router.post("/", issueController.issueAsset);

module.exports = router;
