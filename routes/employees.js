const express = require("express");
const router = express.Router();
const employeeController = require("../controllers/employeeController");

router.get("/", employeeController.getEmployees);
router.get("/add", employeeController.getAddEmployee);
router.post("/add", employeeController.addEmployee);
router.get("/edit/:id", employeeController.getEditEmployee);
router.post("/edit/:id", employeeController.editEmployee);

module.exports = router;
