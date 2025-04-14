const { Company } = require("../models");

exports.getCompanies = async () => {
  const companies = await Company.findAll();
  companies.forEach((company, index) => {
    company.s_no = index + 1;
  });
  return companies;
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
    return await Company.findByPk(id);
  } catch (error) {
    throw new Error("Error fetching company by ID");
  }
};
