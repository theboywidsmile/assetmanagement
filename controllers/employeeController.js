const employeeService = require("../services/employeeService");
const companyService = require("../services/companyService");

exports.getEmployees = async (req, res) => {
  const { search, status } = req.query;
  const employees = await employeeService.getEmployees(search, status);
  const companies = await companyService.getCompanies(); // Fetch companies for modals
  res.render("employee/employees", { employees, companies });
};

exports.addEmployee = async (req, res) => {
  const data = req.body;
  await employeeService.addEmployee(data);
  res.redirect("/employees");
};

exports.editEmployee = async (req, res) => {
  const { id } = req.params;
  const data = req.body;
  await employeeService.editEmployee(id, data);
  res.redirect("/employees");
};

exports.getEditEmployee = async (req, res) => {
  const { id } = req.params;
  try {
    const companies = await companyService.getCompanies();
    const employee = await employeeService.getEmployeeById(id);
    if (!employee) {
      return res.status(404).send("Employee not found");
    }
    res.render("employee/employees", { employee, companies });
  } catch (error) {
    console.error("Error fetching employee:", error);
    res.status(500).send("An error occurred while fetching the employee.");
  }
};

exports.getAddEmployee = async (req, res) => {
  try {
    const companies = await companyService.getCompanies();
    res.render("employee/employees", { companies });
  } catch (error) {
    console.error("Error fetching companies:", error);
    res.status(500).send("An error occurred while fetching companies.");
  }
};
