const express = require("express");
const router = express.Router();

// Import route modules
const employeeRoutes = require("./employees");
const assetRoutes = require("./assets");
const categoryRoutes = require("./categories");
const stockRoutes = require("./stock");
const issueRoutes = require("./issue");
const returnRoutes = require("./return");
const scrapRoutes = require("./scrap");
const historyRoutes = require("./history");
const companyRoutes = require("./companies");

// Home route
router.get("/", (req, res) => {
  res.render("index");
});

// Use route modules
router.use("/employees", employeeRoutes);
router.use("/assets", assetRoutes);
router.use("/categories", categoryRoutes);
router.use("/stock", stockRoutes);
router.use("/issue", issueRoutes);
router.use("/return", returnRoutes);
router.use("/scrap", scrapRoutes);
router.use("/history", historyRoutes);
router.use("/companies", companyRoutes);

module.exports = router;
