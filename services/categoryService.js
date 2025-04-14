const { AssetCategory } = require("../models");

exports.getCategories = async () => {
  const categories = await AssetCategory.findAll();
  categories.forEach((category, index) => {
    category.s_no = index + 1;
  });
  return categories;
};

exports.addCategory = async (categoryData) => {
  await AssetCategory.create(categoryData);
};

exports.getCategoryById = async (id) => {
  return await AssetCategory.findByPk(id);
};

exports.editCategory = async (id, categoryData) => {
  await AssetCategory.update(categoryData, { where: { id } });
};
