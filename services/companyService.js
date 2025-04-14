const { Company } = require("../models");

exports.getCompanies = async () => {
  return await Company.findAll();
};

exports.addOrUpdateCompany = async (companyData) => {
  if (companyData.id) {
    await Company.update(companyData, { where: { id: companyData.id } });
  } else {
    await Company.create(companyData);
  }
};

exports.getCompanyById = async (id) => {
  try {
    return await Company.findByPk(id); // Adjust based on your ORM and model structure
  } catch (error) {
    throw new Error("Error fetching company by ID");
  }
};
