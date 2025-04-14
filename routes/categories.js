const express = require("express");
const router = express.Router();
const categoryController = require("../controllers/categoryController");

router.get("/", categoryController.getCategories);
router.get("/add", categoryController.getAddCategory);
router.post("/add", categoryController.addCategory);
router.get("/edit/:id", categoryController.getEditCategory);
router.post("/edit/:id", categoryController.editCategory);

module.exports = router;
