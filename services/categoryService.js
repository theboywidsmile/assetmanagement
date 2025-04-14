const { AssetCategory } = require("../models");

exports.getCategories = async () => {
  return await AssetCategory.findAll();
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
