const { Employee, Company } = require("../models");

exports.getEmployees = async (search, status) => {
  const where = {};
  if (status) where.status = status;
  if (search) where.name = { [require("sequelize").Op.iLike]: `%${search}%` };
  return await Employee.findAll({
    where,
    include: [{ model: Company, as: "company" }],
  });
};

exports.addEmployee = async (employeeData) => {
  await Employee.create(employeeData);
};

exports.editEmployee = async (id, employeeData) => {
  await Employee.update(employeeData, { where: { id } });
};

exports.getEmployeeById = async (id) => {
  return await Employee.findByPk(id);
};
