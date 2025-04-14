const { Asset, AssetCategory } = require("../models");

exports.getStock = async () => {
  return await Asset.findAll({
    where: { status: "in_stock" },
    include: [{ model: AssetCategory, as: "category" }], // Include category association
  });
};
