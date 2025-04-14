const { AssetHistory, Asset } = require("../models");

exports.getHistory = async (assetId) => {
  const where = {};
  if (assetId) where.assetId = assetId;

  const assetHistory = await AssetHistory.findAll({
    where,
    include: [{ model: Asset, as: "asset" }],
  });

  assetHistory.forEach((history, index) => {
    history.s_no = index + 1;
  });
  return assetHistory;
};
