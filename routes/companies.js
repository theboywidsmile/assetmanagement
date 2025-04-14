const express = require("express");
const router = express.Router();
const companyController = require("../controllers/companyController");

router.get("/", companyController.getCompanies);
router.post("/", companyController.addOrUpdateCompany);
router.get("/add", (req, res) => res.render("company/companies-add"));
router.get("/edit/:id", async (req, res) => {
  const company = await companyController.getCompanyById(req.params.id);
  res.render("company/companies-edit", { company });
});
router.post("/edit/:id", companyController.addOrUpdateCompany);

module.exports = router;
