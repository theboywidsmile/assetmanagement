const { Asset, AssetCategory, Employee } = require("../models");

exports.getAssets = async (search, categoryId) => {
  try {
    const where = { status: { [require("sequelize").Op.ne]: "scrapped" } };
    if (categoryId) where.categoryId = categoryId;
    if (search) where.name = { [require("sequelize").Op.iLike]: `%${search}%` };
    const assets = await Asset.findAll({
      where,
      include: [
        { model: AssetCategory, as: "category" },
        { model: Employee, as: "employee" },
      ],
    });
    assets.forEach((asset, index) => {
      asset.s_no = index + 1;
    });
    return assets;
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
