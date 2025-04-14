const categoryService = require("../services/categoryService");

exports.getCategories = async (req, res) => {
  try {
    const categories = await categoryService.getCategories();
    res.render("category/categories", { categories });
  } catch (error) {
    console.error("Error fetching categories:", error);
    res.status(500).send("An error occurred while fetching categories.");
  }
};

exports.addCategory = async (req, res) => {
  const { name, description } = req.body;
  try {
    await categoryService.addCategory({ name, description });
    res.redirect("/categories");
  } catch (error) {
    console.error("Error adding category:", error);
    res.status(500).send("An error occurred while adding the category.");
  }
};

exports.getEditCategory = async (req, res) => {
  const { id } = req.params;
  try {
    const category = await categoryService.getCategoryById(id);
    if (!category) {
      return res.status(404).send("Category not found");
    }
    res.render("category/categories", { category });
  } catch (error) {
    console.error("Error fetching category:", error);
    res.status(500).send("An error occurred while fetching the category.");
  }
};

exports.getAddCategory = async (req, res) => {
  try {
    res.render("category/categories");
  } catch (error) {
    console.error("Error rendering add category page:", error);
    res
      .status(500)
      .send("An error occurred while rendering the add category page.");
  }
};

exports.editCategory = async (req, res) => {
  const { id } = req.params;
  const { name, description } = req.body;
  try {
    await categoryService.editCategory(id, { name, description });
    res.redirect("/categories");
  } catch (error) {
    console.error("Error editing category:", error);
    res.status(500).send("An error occurred while editing the category.");
  }
};
