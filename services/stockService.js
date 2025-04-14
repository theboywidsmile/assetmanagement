const { Asset, AssetCategory } = require("../models");

exports.getStock = async () => {
  const stock = await Asset.findAll({
    where: { status: "in_stock" },
    include: [{ model: AssetCategory, as: "category" }],
  });
  stock.forEach((item, index) => {
    item.s_no = index + 1;
  });
  return stock;
};
