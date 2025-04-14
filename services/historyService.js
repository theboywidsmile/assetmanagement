const { AssetHistory, Asset } = require("../models");

exports.getHistory = async (assetId) => {
  const where = {};
  if (assetId) where.assetId = assetId; // Add filter only if assetId is provided

  return await AssetHistory.findAll({
    where,
    include: [{ model: Asset, as: "asset" }], // Include the Asset association
  });
};
