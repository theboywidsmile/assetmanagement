const { Company } = require("../models");

exports.getCompanies = async () => {
  const companies = await Company.findAll();
  companies.forEach((company, index) => {
    company.s_no = index + 1;
  });
  return companies;
};

exports.addCompany = async (companyData) => {
  try {
    const { id, ...rest } = companyData;
    if (id && isNaN(parseInt(id, 10))) {
      throw new Error(
        "Invalid input for 'id': must be a valid integer or omitted."
      );
    }

    await Company.create(rest);
  } catch (error) {
    throw new Error("Error saving company");
  }
};

exports.updateCompany = async (companyData) => {
  const { id, ...data } = companyData;
  try {
    await Company.update(data, { where: { id } });
  } catch (error) {
    throw new Error("Error updating company");
  }
};

exports.getCompanyById = async (id) => {
  try {
    return await Company.findByPk(id);
  } catch (error) {
    throw new Error("Error fetching company by ID");
  }
};
