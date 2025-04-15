const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.getCompanies);
router.post("/add", companyController.addCompany);
router.get("/add", companyController.getAddCompany);
router.get("/edit/:id", companyController.getEditCompany);
router.post("/edit/:id", companyController.updateCompany);

module.exports = router;
