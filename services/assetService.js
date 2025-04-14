const { Asset, AssetCategory, Employee } = require("../models");

exports.getAssets = async (search, categoryId) => {
  try {
    const where = { status: { [require("sequelize").Op.ne]: "scrapped" } }; // Exclude scrapped assets
    if (categoryId) where.categoryId = categoryId; // Filter by category
    if (search) where.name = { [require("sequelize").Op.iLike]: `%${search}%` }; // Filter by name

    return await Asset.findAll({
      where,
      include: [
        { model: AssetCategory, as: "category" }, // Include category association
        { model: Employee, as: "employee" }, // Include employee association
      ],
    });
  } catch (error) {
    console.error("Error fetching assets from database:", error);
    throw error;
  }
};

exports.addAsset = async (assetData) => {
  await Asset.create(assetData);
};

exports.getAssetById = async (id) => {
  return await Asset.findByPk(id);
};

exports.editAsset = async (id, assetData) => {
  await Asset.update(assetData, { where: { id } });
};
