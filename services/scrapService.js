const { Asset, AssetHistory } = require("../models");

exports.getScrappableAssets = async () => {
  try {
    return await Asset.findAll({ where: { status: "in_stock" } }); // Exclude scrapped assets
  } catch (error) {
    console.error("Error fetching scrappable assets:", error);
    throw error;
  }
};

exports.getScrappedAssets = async () => {
  try {
    const scrappedAssets = await AssetHistory.findAll({
      where: { action: "scrapped" },
      include: [{ model: Asset, as: "asset" }],
    });

    scrappedAssets.forEach((history, index) => {
      history.s_no = index + 1;
    });
    return scrappedAssets;
  } catch (error) {
    console.error("Error fetching scrapped assets:", error);
    throw error;
  }
};

exports.scrapAsset = async (assetId) => {
  try {
    await Asset.update({ status: "scrapped" }, { where: { id: assetId } });
    await AssetHistory.create({
      assetId,
      action: "scrapped",
      reason: "Marked as obsolete",
      date: new Date(),
    });
  } catch (error) {
    console.error("Error scrapping asset:", error);
    throw error;
  }
};

exports.addScrap = async (assetId, reason) => {
  try {
    await Asset.update({ status: "scrapped" }, { where: { id: assetId } });
    await AssetHistory.create({
      assetId,
      action: "scrapped",
      reason,
      date: new Date(),
    });
  } catch (error) {
    console.error("Error adding scrapped asset:", error);
    throw error;
  }
};
