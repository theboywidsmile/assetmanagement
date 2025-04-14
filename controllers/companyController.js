const companyService = require("../services/companyService");

exports.getCompanies = async (req, res) => {
  try {
    const companies = await companyService.getCompanies();
    res.render("company/companies", { companies });
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).send("An error occurred while fetching companies.");
  }
};

exports.addOrUpdateCompany = async (req, res) => {
  try {
    await companyService.addOrUpdateCompany(req.body);
    res.redirect("/companies");
  } catch (error) {
    console.error("Error saving company:", error);
    res.status(500).send("An error occurred while saving the company.");
  }
};

exports.getCompanyById = async (id) => {
  try {
    return await companyService.getCompanyById(id);
  } catch (error) {
    throw new Error("Error fetching company by ID");
  }
};

exports.getAddCompany = async (req, res) => {
  try {
    res.render("company/companies");
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).send("An error occurred while fetching companies.");
  }
};

exports.getEditCompany = async (req, res) => {
  const { id } = req.params;
  try {
    const company = await companyService.getCompanyById(id);
    if (!company) {
      return res.status(404).send("Company not found");
    }
    res.render("company/companies", { company });
  } catch (error) {
    console.error("Error fetching company:", error);
    res.status(500).send("An error occurred while fetching the company.");
  }
};
