const { Asset, AssetCategory, Employee, Company } = require("../models");

exports.getAssets = async (search, categoryId, companyId) => {
  try {
    const where = { status: { [require("sequelize").Op.ne]: "scrapped" } };
    if (categoryId) where.categoryId = categoryId;
    if (companyId) where.companyId = companyId;
    if (search) where.name = { [require("sequelize").Op.iLike]: `%${search}%` };
    const assets = await Asset.findAll({
      where,
      include: [
        { model: AssetCategory, as: "category" },
        { model: Employee, as: "employee" },
        { model: Company, as: "company" },
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
