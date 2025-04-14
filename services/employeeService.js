const { Employee, Company } = require("../models");

exports.getEmployees = async (search, status) => {
  const where = {};
  if (status) where.status = status;
  if (search) where.name = { [require("sequelize").Op.iLike]: `%${search}%` };

  const employees = await Employee.findAll({
    where,
    include: [{ model: Company, as: "company" }],
  });
  employees.forEach((employee, index) => {
    employee.s_no = index + 1;
  });
  return employees;
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
